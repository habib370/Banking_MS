import React, { useState, useEffect } from "react";
import { useAuth } from "../context/Auth";
import { useToast } from "../context/Toast";
import { 
  FaArrowUp, FaArrowDown, FaPaperPlane, 
  FaCreditCard, FaShieldAlt, FaTimesCircle, 
  FaChartLine, FaUniversity, FaGift, FaHandHoldingUsd
} from "react-icons/fa";

export default function Home() {
  const { 
    user, 
    checkBalance, 
    deposit, 
    withdraw, 
    transferMoney, 
    applyLoan, 
    requestDebitCard,
    checkCardStatus 
  } = useAuth();
  const { showToast } = useToast();

  const [activeAction, setActiveAction] = useState(null);
  const [amount, setAmount] = useState("");
  const [targetAccount, setTargetAccount] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [loanType, setLoanType] = useState("Home Loan");
  const [durationMonths, setDurationMonths] = useState("24");
  const [cardRequested, setCardRequested] = useState(false);

  useEffect(() => {
    if (user) {
      checkBalance().catch(() => console.log("Silent initial balance sync."));
      
      const verifyCardStatus = async () => {
        try {
          const res = await checkCardStatus();
          if (res?.ok && res.status) {
            setCardRequested(true);
          }
        } catch (err) {
          console.error("Failed to verify card status on load", err);
        }
      };

      verifyCardStatus();
    }
  }, [user]);

  const getInterestRate = (type) => {
    switch (type) {
      case "Home Loan": return 8.5;
      case "Car Loan": return 9.0;
      case "Personal Loan": return 11.5;
      case "Education Loan": return 6.0;
      default: return 8.5;
    }
  };

  const handleAction = async (e) => {
    e.preventDefault();
    setLoading(true);

    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      showToast("Please enter a valid amount", "error");
      setLoading(false);
      return;
    }

    try {
      let res;
      if (activeAction === "deposit") {
        res = await deposit(numericAmount);
      } else if (activeAction === "withdraw") {
        if (numericAmount > user?.balance) {
          showToast("Insufficient balance for withdrawal", "error");
          setLoading(false);
          return;
        }
        res = await withdraw(numericAmount);
      } else if (activeAction === "transfer") {
        if (!targetAccount) {
          showToast("Please enter recipient account number", "error");
          setLoading(false);
          return;
        }
        if (numericAmount > user?.balance) {
          showToast("Insufficient balance for transfer", "error");
          setLoading(false);
          return;
        }
        res = await transferMoney(targetAccount, numericAmount);
      } else if (activeAction === "loan") {
        const loanPayload = {
          loanType,
          amount: numericAmount,
          interestRate: getInterestRate(loanType),
          durationMonths: parseInt(durationMonths)
        };
        res = await applyLoan(loanPayload.amount, loanPayload);
      }

      if (res?.ok) {
        showToast(res.message || "Transaction requested successfully", "success");
        setAmount("");
        setTargetAccount("");
        await checkBalance();
        
        setTimeout(() => {
          setActiveAction(null);
        }, 1200);
      } else {
        showToast(res?.message || "Transaction failed.", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Unexpected error processing transaction", "error");
    }

    setLoading(false);
  };

  const handleCardRequestSubmit = async () => {
    setLoading(true);
    try {
      const res = await requestDebitCard();
      if (res?.ok) {
        alert("Your request is sent! Your debit card will be issued after verification processes complete.");
        showToast("Debit Card tracking request processed", "success");
        setCardRequested(true);
        setActiveAction(null);
      } else {
        showToast(res?.message || "Failed to order card.", "error");
      }
    } catch (err) {
      showToast("Error routing card application payload", "error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Welcome back, <span className="text-blue-700">{user?.fullName?.split(' ')[0]}</span>
          </h1>
          <p className="text-gray-500 mt-1">Here's your financial overview</p>
        </div>

        {/* Action Buttons Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <ActionButton
            icon={<FaArrowDown />}
            title="Deposit"
            color="blue"
            onClick={() => setActiveAction("deposit")}
          />
          <ActionButton
            icon={<FaArrowUp />}
            title="Withdraw"
            color="orange"
            onClick={() => setActiveAction("withdraw")}
          />
          <ActionButton
            icon={<FaPaperPlane />}
            title="Transfer"
            color="purple"
            onClick={() => setActiveAction("transfer")}
          />
          <ActionButton
            icon={<FaHandHoldingUsd />}
            title="Request Loan"
            color="indigo"
            onClick={() => setActiveAction("loan")}
          />
          <ActionButton
            icon={<FaCreditCard />}
            title={cardRequested ? "Card Requested" : "Request Card"}
            color={cardRequested ? "gray" : "green"}
            onClick={() => !cardRequested && setActiveAction("confirm-card")}
            disabled={cardRequested}
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <QuickStatCard
            icon={<FaChartLine />}
            title="Registered Email"
            amount={user?.email || "N/A"}
            change="Verified"
            color="yellow"
          />
          <QuickStatCard
            icon={<FaUniversity />}
            title="Registered Phone"
            amount={user?.phoneNumber || "N/A"}
            change="Active"
            color="green"
          />
          <QuickStatCard
            icon={<FaGift />}
            title="Occupation Role"
            amount={user?.occupation || "Engineer"}
            change="Primary"
            color="red"
          />
        </div>
      </div>

      {/* Transaction & Loan Action Modals */}
      {activeAction && activeAction !== "confirm-card" && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800 capitalize">
                {activeAction === "loan" ? "Loan Request Application" : `${activeAction} Money`}
              </h3>
              <button
                onClick={() => setActiveAction(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <FaTimesCircle size={24} />
              </button>
            </div>

            <form onSubmit={handleAction} className="space-y-4">
              {activeAction === "loan" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loan Type</label>
                    <select 
                      value={loanType} 
                      onChange={(e) => setLoanType(e.target.value)}
                      className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Home Loan">Home Loan (8.5% Int.)</option>
                      <option value="Car Loan">Car Loan (9.0% Int.)</option>
                      <option value="Personal Loan">Personal Loan (11.5% Int.)</option>
                      <option value="Education Loan">Education Loan (6.0% Int.)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration (Months)</label>
                    <input 
                      type="number"
                      value={durationMonths}
                      onChange={(e) => setDurationMonths(e.target.value)}
                      min="6"
                      max="120"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </>
              )}

              {activeAction === "transfer" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recipient Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter destination account"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={targetAccount}
                    onChange={(e) => setTargetAccount(e.target.value)}
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (৳)
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min="1"
                />
              </div>

              <div className="bg-blue-50 rounded-xl p-3 text-xs text-blue-800 space-y-1">
                <p className="flex items-center font-medium"><FaShieldAlt className="mr-2" /> Security protocols active.</p>
                {activeAction === "loan" && <p>Estimated interest tracking metric applied: {getInterestRate(loanType)}% APY</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50"
              >
                {loading ? "Processing..." : activeAction === "loan" ? "Submit Loan Application" : `Confirm ${activeAction}`}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Dedicated Debit Card Confirmation Modal Popup */}
      {activeAction === "confirm-card" && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl text-center relative">
            <button 
              onClick={() => setActiveAction(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <FaTimesCircle size={20} />
            </button>
            
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 text-2xl">
              <FaCreditCard />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">Confirm Card Request?</h3>
            <p className="text-sm text-gray-500 mb-6">
              Would you like to register a Mastercard/Visa debit card linking directly to account number: <span className="font-mono text-gray-700 font-bold">{user?.accountNumber}</span>?
            </p>

            <div className="flex space-x-3">
              <button 
                onClick={() => setActiveAction(null)}
                className="w-1/2 py-2.5 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition"
              >
                Cancel
              </button>
              <button 
                onClick={handleCardRequestSubmit}
                disabled={loading}
                className="w-1/2 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition shadow-sm hover:shadow"
              >
                {loading ? "Processing..." : "Confirm Request"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ActionButton({ icon, title, color, onClick, disabled }) {
  const colors = {
    blue: "from-blue-500 to-blue-600",
    orange: "from-orange-500 to-orange-600",
    purple: "from-purple-500 to-purple-600",
    indigo: "from-indigo-500 to-indigo-600",
    green: "from-green-500 to-green-600",
    gray: "from-gray-400 to-gray-500"
  };
  
  const bgColors = { blue: "bg-blue-50", orange: "bg-orange-50", purple: "bg-purple-50", indigo: "bg-indigo-50", green: "bg-green-50", gray: "bg-gray-100" };
  const textColors = { blue: "text-blue-700", orange: "text-orange-700", purple: "text-purple-700", indigo: "text-indigo-700", green: "text-green-700", gray: "text-gray-500" };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${bgColors[color]} p-4 rounded-2xl flex flex-col items-center space-y-2 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-lg group w-full disabled:opacity-70 disabled:hover:scale-100`}
    >
      <div className={`p-3 bg-gradient-to-r ${colors[color]} rounded-xl shadow-md group-hover:shadow-lg transition text-white`}>
        {icon}
      </div>
      <span className={`font-semibold text-xs md:text-sm whitespace-nowrap ${textColors[color]}`}>{title}</span>
    </button>
  );
}

function QuickStatCard({ icon, title, amount, change, color }) {
  const colors = {
    red: "text-red-600 bg-red-50",
    green: "text-green-600 bg-green-50",
    yellow: "text-yellow-600 bg-yellow-50"
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className={`p-2 rounded-lg ${colors[color]}`}>
          {icon}
        </div>
        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
          {change}
        </span>
      </div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-base font-bold text-gray-800 mt-1 truncate">{amount}</p>
    </div>
  );
}