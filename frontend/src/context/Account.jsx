import { createContext, useContext } from "react";
import { useApi } from "./Api";
import { useAuth } from "./Auth";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const api = useApi();
  const { user, setUser } = useAuth();

  // 🏦 Apply for a Loan
  const applyLoan = async (loanData) => {
    try {
      // loanData structure: { loanType, amount, interestRate, durationMonths }
      const response = await api.post("/loans/apply", loanData);
      return { ok: true, message: response.data };
    } catch (err) {
      console.error(err);
      return {
        ok: false,
        message: err.response?.data || "Failed to process loan request.",
      };
    }
  };

  // 📋 Fetch User Loans
  const fetchMyLoans = async () => {
    try {
      const response = await api.get("/loans/my-loans");
      return { ok: true, data: response.data };
    } catch (err) {
      console.error(err);
      return {
        ok: false,
        message: err.response?.data?.message || "Failed to fetch loans.",
      };
    }
  };

  // 💳 Request Debit Card
  const requestDebitCard = async () => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    try {
      const response = await api.post("/cards/request", {
        accountNumber: currentUser.accountNumber,
      });
      return { ok: true, message: response.data };
    } catch (err) {
      console.error(err);
      return {
        ok: false,
        message: err.response?.data || "Failed to request debit card.",
      };
    }
  };

  // 🔍 Check Debit Card Status
  const checkCardStatus = async () => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    try {
      const response = await api.get(`/cards/status?accountNumber=${currentUser.accountNumber}`);
      return { ok: true, data: response.data };
    } catch (err) {
      console.error(err);
      return {
        ok: false,
        message: err.response?.data?.message || "Failed to fetch card status.",
      };
    }
  };

  return (
    <AccountContext.Provider
      value={{
        applyLoan,
        fetchMyLoans,
        requestDebitCard,
        checkCardStatus,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);