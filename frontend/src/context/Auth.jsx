import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useApi } from "./Api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const api = useApi();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const safeParse = (data) => {
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const parsedUser = safeParse(savedUser);

    if (parsedUser && token) {
      setUser(parsedUser);
      setIsAuthenticated(true); 
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await api.post("/auth/login", credentials);
      const { token, user, ok, message } = response.data; 

      if (ok) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setIsAuthenticated(true);
        return { ok: true };
      } else {
        return { ok: false, message: message || "Invalid Credentials" };
      }
    } catch (error) {
      return {
        ok: false,
        message: error.response?.data?.message || "Server Error",
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await api.post("/auth/register", userData);
      if (response.status === 200 || response.status === 201) {
        return { ok: true, data: response.data };
      }
      return { ok: false, message: "Registration failed" };
    } catch (error) {
      const errorMsg = typeof error.response?.data === 'string' 
                       ? error.response.data 
                       : error.response?.data?.message || "Registration failed";
                       
      return { ok: false, message: errorMsg };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  // 🟢 OPTIMIZED: Only calls setUser if balance actually changed
  const checkBalance = useCallback(async () => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    if (!currentUser?.accountNumber) return { ok: false };

    try {
      const response = await api.post("/account/balance", {
        accountNumber: currentUser?.accountNumber,
      });
      if (response.data.ok) {
        const newBalance = response.data.balance;
        // Only update state if balance has changed to prevent re-render loops
        if (currentUser.balance !== newBalance) {
          const updatedUser = { ...currentUser, balance: newBalance };
          setUser(updatedUser);
          localStorage.setItem("user", JSON.stringify(updatedUser));
        }
        return { ok: true, message: response.data.message, balance: newBalance };
      } else {
        return { ok: false, message: response.data.message };
      }
    } catch (err) {
      console.error(err);
      return { ok: false, message: "An error occurred while checking balance." };
    }
  }, [user, api]);

  const deposit = async (amount) => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    if (!amount || amount <= 0) {
      return { success: false, message: "Please enter a valid amount" };
    }
    try {
      const response = await api.post("/account/deposit", {
        accountNumber: currentUser.accountNumber,
        amount: parseFloat(amount),
      });
      if (response.data.ok) {
        const updatedUser = { ...currentUser, balance: response.data.balance };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        return { ok: true, message: response.data.message };
      } else {
        return { ok: false, message: response.data.message };
      }
    } catch (err) {
      console.error(err);
      return { ok: false, message: "An error occurred while processing the deposit." };
    }
  };

  const withdraw = async (amount) => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    try {
      const response = await api.post("/account/withdraw", {
        accountNumber: currentUser.accountNumber,
        amount: parseFloat(amount),
      });
      if (response.data.ok) {
        const updatedUser = { ...currentUser, balance: response.data.balance };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        return { ok: true, message: response.data.message };
      } else {
        return { ok: false, message: response.data.message };
      }
    } catch (err) {
      console.error(err);
      return { ok: false, message: "An error occurred while processing the withdrawal." };
    }
  };

  const transferMoney = async (targetAccountNumber, amount) => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    if (!targetAccountNumber || targetAccountNumber.trim() === "") {
      return { ok: false, message: "Please enter receiver's account number" };
    }
    if (targetAccountNumber === currentUser.accountNumber) {
      return { ok: false, message: "You cannot transfer money to yourself!" };
    }
    if (!amount || amount <= 0) {
      return { ok: false, message: "Please enter a valid amount" };
    }
    if (amount > currentUser.balance) {
      return { ok: false, message: "Insufficient balance for this transfer" };
    }
    try {
      const response = await api.post("/account/transfer", {
        fromAccount: currentUser.accountNumber,
        toAccount: targetAccountNumber,
        amount: parseFloat(amount),
      });
      if (response.data.ok) {
        const updatedUser = { ...currentUser, balance: response.data.balance };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        return { ok: true, message: response.data.message };
      } else {
        return { ok: false, message: response.data.message };
      }
    } catch (err) {
      console.error(err);
      return {
        ok: false,
        message: err.response?.data?.message || "Transfer failed. Check account number and try again.",
      };
    }
  };

  const applyLoan = async (amount, loanDetails = {}) => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    try {
      const response = await api.post("/loans/apply", {
        accountNumber: currentUser?.accountNumber,
        loanType: loanDetails.loanType || "Home Loan",
        amount: parseFloat(amount),
        interestRate: loanDetails.interestRate || 8.5,
        durationMonths: parseInt(loanDetails.durationMonths) || 24
      });

      if (response.data?.ok || response.status === 200 || response.status === 201) {
        return { ok: true, message: response.data?.message || "Loan application submitted successfully." };
      }
      return { ok: false, message: response.data?.message || "Failed to submit loan request." };
    } catch (err) {
      console.error(err);
      return { ok: false, message: err.response?.data?.message || "Error submitting loan request." };
    }
  };

  // 🟢 WRAPPED IN USECALLBACK
  const fetchMyLoans = useCallback(async () => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    if (!currentUser?.accountNumber) return { ok: false, loans: [] };
    try {
      const response = await api.get(`/loans/my-loans?accountNumber=${currentUser?.accountNumber}`);
      return { ok: true, loans: response.data };
    } catch (err) {
      console.error(err);
      return { ok: false, message: err.response?.data?.message || "Could not retrieve loans history." };
    }
  }, [user, api]);

  const requestDebitCard = async () => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    try {
      const response = await api.post("/cards/request", {
        accountNumber: currentUser?.accountNumber
      });
      if (response.data?.ok || response.status === 200 || response.status === 201) {
        return { ok: true, message: response.data?.message || "Debit Card requested successfully." };
      }
      return { ok: false, message: response.data?.message || "Failed to process card request." };
    } catch (err) {
      console.error(err);
      return { ok: false, message: err.response?.data?.message || "Error ordering debit card." };
    }
  };

  // 🟢 WRAPPED IN USECALLBACK
  const checkCardStatus = useCallback(async () => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    if (!currentUser?.accountNumber) return { ok: false, status: null };
    try {
      const response = await api.get(`/cards/status?accountNumber=${currentUser?.accountNumber}`);
      return { ok: true, status: response.data?.status || response.data };
    } catch (err) {
      console.error(err);
      return { ok: false, message: err.response?.data?.message || "Could not query card status." };
    }
  }, [user, api]);

  // 🟢 WRAPPED IN USECALLBACK
  const fetchTransactions = useCallback(async () => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    if (!currentUser?.accountNumber) return { ok: false, data: [] };

    try {
      const response = await api.get(`/account/transactions?accountNumber=${currentUser.accountNumber}`);
      return { ok: true, data: response.data };
    } catch (err) {
      console.error("Error fetching transactions:", err);
      return { ok: false, message: "Could not retrieve transactions." };
    }
  }, [user, api]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        register,
        loading,
        checkBalance,
        deposit,
        withdraw,
        transferMoney,
        isAuthenticated,
        applyLoan,
        fetchMyLoans,
        requestDebitCard,
        checkCardStatus,
        fetchTransactions
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);