import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/Auth";
import { useToast } from "../context/Toast";
import { 
  FaHistory, FaArrowDown, FaArrowUp, FaPaperPlane, 
  FaHandHoldingUsd, FaSearch, FaFileDownload 
} from "react-icons/fa";

export default function History() {
  const { user, fetchMyLoans, checkBalance, fetchTransactions } = useAuth();
  const { showToast } = useToast();

  const [transactions, setTransactions] = useState([]);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔒 HARD HARDWARE LOCK: Prevents React from running fetches more than once!
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchBackendData = async () => {
      if (hasFetched.current) return; // ⛔ Lock active: stop immediate second call
      hasFetched.current = true;

      setLoading(true);
      try {
        // 1. Sync User Balance
        if (checkBalance) {
          await checkBalance().catch(() => {});
        }

        // 2. Fetch Transactions
        if (fetchTransactions) {
          const txRes = await fetchTransactions();
          if (txRes?.ok && Array.isArray(txRes.data)) {
            setTransactions(txRes.data);
          } else if (Array.isArray(txRes)) {
            setTransactions(txRes);
          }
        }

        // 3. Fetch Loans
        if (fetchMyLoans) {
          const loanRes = await fetchMyLoans();
          if (loanRes?.ok && Array.isArray(loanRes.loans)) {
            setLoans(loanRes.loans);
          } else if (Array.isArray(loanRes)) {
            setLoans(loanRes);
          }
        }
      } catch (err) {
        console.error("Ledger compile error:", err);
        showToast("Failed to fetch fresh transaction records", "error");
      } finally {
        setLoading(false);
      }
    };

    if (user?.accountNumber && !hasFetched.current) {
      fetchBackendData();
    }
  }, [user?.accountNumber]);

  const rawTxList = transactions.length > 0 
    ? transactions 
    : (Array.isArray(user?.transactions) ? user.transactions : []);

  const matchesSearch = (type, target) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      (type && type.toLowerCase().includes(term)) ||
      (target && target.toString().toLowerCase().includes(term))
    );
  };

  const getTxType = (tx) => {
    if (tx.type || tx.transactionType || tx.action) {
      return (tx.type || tx.transactionType || tx.action).toLowerCase();
    }
    const receiver = (tx.receiverAccNum || "").toUpperCase();
    if (receiver === "CASH WITHDRAWAL") return "withdraw";
    if (receiver === user?.accountNumber) return "deposit";
    if (receiver) return "transfer";
    return "";
  };

  const getTxTarget = (tx, fallback) => {
    if (tx.receiverAccNum) return tx.receiverAccNum;
    return tx.target || tx.targetAccount || tx.description || fallback;
  };

  const deposits = rawTxList.filter(tx => {
    const type = getTxType(tx);
    return type === "deposit" && matchesSearch("deposit", getTxTarget(tx, "Self Deposit"));
  });

  const withdrawals = rawTxList.filter(tx => {
    const type = getTxType(tx);
    return type === "withdraw" && matchesSearch("withdraw", getTxTarget(tx, "ATM Cash Out"));
  });

  const transfers = rawTxList.filter(tx => {
    const type = getTxType(tx);
    return type === "transfer" && matchesSearch("transfer", getTxTarget(tx, "Account Transfer"));
  });

  const filteredLoans = loans.filter(loan => 
    matchesSearch("loan", loan.loanType?.loanType || loan.loanType || "") || 
    matchesSearch("loan", loan.status || "")
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Control Header Bar */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center justify-between mb-8">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaHistory className="text-blue-700" size={22} /> Live Financial Audit Ledger
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Real-time records tracking Account No: <span className="font-mono text-gray-600 font-semibold">{user?.accountNumber || "N/A"}</span>
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-72">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input 
                type="text" 
                placeholder="Search description or type..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 bg-gray-50/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <button 
              onClick={() => window.print()}
              className="p-2.5 bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition text-sm font-semibold flex items-center gap-1.5 shrink-0"
              title="Print Ledger Summary"
            >
              <FaFileDownload size={14} /> <span className="hidden sm:inline">Print Statement</span>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-24 text-gray-400 text-sm">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            Syncing secure backend transactional parameters...
          </div>
        ) : (
          /* 4-COLUMN SYMMETRIC GRID LAYOUT */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            
            {/* COLUMN 1: DEPOSITS */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-[72vh] flex flex-col">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                <div className="p-2 bg-green-50 text-green-700 rounded-lg text-sm"><FaArrowDown /></div>
                <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Deposits</h3>
                <span className="ml-auto text-xs font-semibold px-2 py-0.5 bg-green-50 text-green-700 rounded-full">{deposits.length}</span>
              </div>
              <div className="space-y-3 overflow-y-auto flex-1 pr-1 custom-scrollbar">
                {deposits.length === 0 ? (
                  <p className="text-center py-12 text-gray-400 text-xs">No logged deposits found.</p>
                ) : (
                  deposits.map((tx, idx) => (
                    <HistoryItemCard 
                      key={tx.transactionId || tx.id || idx} 
                      title={getTxTarget(tx, "Self Deposit")} 
                      date={tx.transactionDate ? new Date(tx.transactionDate).toLocaleDateString() : "Recent"} 
                      amount={tx.amount} 
                      status={tx.status || "SUCCESS"} 
                      color="green" 
                      prefix="+" 
                    />
                  ))
                )}
              </div>
            </div>

            {/* COLUMN 2: WITHDRAWALS */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-[72vh] flex flex-col">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                <div className="p-2 bg-red-50 text-red-700 rounded-lg text-sm"><FaArrowUp /></div>
                <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Withdrawals</h3>
                <span className="ml-auto text-xs font-semibold px-2 py-0.5 bg-red-50 text-red-700 rounded-full">{withdrawals.length}</span>
              </div>
              <div className="space-y-3 overflow-y-auto flex-1 pr-1 custom-scrollbar">
                {withdrawals.length === 0 ? (
                  <p className="text-center py-12 text-gray-400 text-xs">No logged withdrawals found.</p>
                ) : (
                  withdrawals.map((tx, idx) => (
                    <HistoryItemCard 
                      key={tx.transactionId || tx.id || idx} 
                      title={getTxTarget(tx, "ATM Cash Out")} 
                      date={tx.transactionDate ? new Date(tx.transactionDate).toLocaleDateString() : "Recent"} 
                      amount={tx.amount} 
                      status={tx.status || "SUCCESS"} 
                      color="red" 
                      prefix="-" 
                    />
                  ))
                )}
              </div>
            </div>

            {/* COLUMN 3: TRANSFERS */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-[72vh] flex flex-col">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                <div className="p-2 bg-purple-50 text-purple-700 rounded-lg text-sm"><FaPaperPlane /></div>
                <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Transfers</h3>
                <span className="ml-auto text-xs font-semibold px-2 py-0.5 bg-purple-50 text-purple-700 rounded-full">{transfers.length}</span>
              </div>
              <div className="space-y-3 overflow-y-auto flex-1 pr-1 custom-scrollbar">
                {transfers.length === 0 ? (
                  <p className="text-center py-12 text-gray-400 text-xs">No logged transfers found.</p>
                ) : (
                  transfers.map((tx, idx) => (
                    <HistoryItemCard 
                      key={tx.transactionId || tx.id || idx} 
                      title={`To Acc: ${getTxTarget(tx, "Account Transfer")}`} 
                      date={tx.transactionDate ? new Date(tx.transactionDate).toLocaleDateString() : "Recent"} 
                      amount={tx.amount} 
                      status={tx.status || "SUCCESS"} 
                      color="purple" 
                      prefix="-" 
                    />
                  ))
                )}
              </div>
            </div>

            {/* COLUMN 4: LOANS */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-[72vh] flex flex-col">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                <div className="p-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm"><FaHandHoldingUsd /></div>
                <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Loans</h3>
                <span className="ml-auto text-xs font-semibold px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full">{filteredLoans.length}</span>
              </div>
              <div className="space-y-3 overflow-y-auto flex-1 pr-1 custom-scrollbar">
                {filteredLoans.length === 0 ? (
                  <p className="text-center py-12 text-gray-400 text-xs">No active backend loan applications.</p>
                ) : (
                  filteredLoans.map((loan, idx) => {
                    const loanDate = loan.createdAt ? new Date(loan.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Recent";
                    const displayType = loan.loanType?.loanType || loan.loanType || "Loan Application";
                    return (
                      <HistoryItemCard 
                        key={loan.loanId || loan._id || loan.id || idx} 
                        title={`${displayType} (${loan.durationMonths || 0} Mo.)`} 
                        date={loanDate} 
                        amount={parseFloat(loan.amount || 0)} 
                        status={loan.status || "PENDING"} 
                        color="indigo" 
                        prefix="+" 
                      />
                    );
                  })
                )}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

function HistoryItemCard({ title, date, amount, status, color, prefix }) {
  const textColors = {
    green: "text-green-600",
    red: "text-red-600",
    purple: "text-purple-600",
    indigo: "text-indigo-600"
  };

  const isSuccess = status?.toLowerCase() === "completed" || status?.toLowerCase() === "approved" || status?.toLowerCase() === "success";
  const statusStyles = isSuccess ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800";

  return (
    <div className="p-3 bg-gray-50/60 hover:bg-gray-50 border border-gray-100/70 rounded-xl flex items-center justify-between gap-2 transition group">
      <div className="min-w-0">
        <p className="font-bold text-gray-700 text-xs md:text-sm truncate capitalize">{title}</p>
        <p className="text-[10px] text-gray-400 mt-0.5">{date}</p>
      </div>
      <div className="text-right shrink-0">
        <p className={`font-mono font-bold text-xs md:text-sm ${textColors[color]}`}>
          {prefix} ৳{parseFloat(amount || 0).toLocaleString()}
        </p>
        <span className={`text-[9px] tracking-wide font-extrabold px-1.5 py-0.5 rounded uppercase ${statusStyles}`}>
          {status || "SUCCESS"}
        </span>
      </div>
    </div>
  );
}