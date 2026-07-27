import React, { useState, useEffect } from "react";
import { useAuth } from "../context/Auth";
import { useToast } from "../context/Toast";
import { 
  FaUserCircle, FaEnvelope, FaPhone, FaBriefcase, FaIdCard, 
  FaCreditCard, FaHandHoldingUsd, FaCheckCircle, FaClock, 
  FaUniversity, FaCalendarAlt, FaChevronRight 
} from "react-icons/fa";

export default function Profile() {
  const { user, fetchMyLoans, checkCardStatus } = useAuth();
  const { showToast } = useToast();

  const [loans, setLoans] = useState([]);
  const [cardStatus, setCardStatus] = useState("Not Requested");
  const [loadingLoans, setLoadingLoans] = useState(false);
  const [showLoanModal, setShowLoanModal] = useState(false);

  useEffect(() => {
    if (user) {
      // 1. Fetch real card status on profile load
      const getCardStatus = async () => {
        try {
          const res = await checkCardStatus();
          if (res?.ok && res.status) {
            setCardStatus(res.status); // e.g. "PENDING", "APPROVED", etc.
          }
        } catch (err) {
          console.error("Error retrieving card tracking information", err);
        }
      };

      getCardStatus();
    }
  }, [user, checkCardStatus]);

  // 2. Fetch loans context records on demand
  const handleViewLoans = async () => {
    setLoadingLoans(true);
    try {
      const res = await fetchMyLoans();
      if (res?.ok) {
        setLoans(res.loans || []);
        setShowLoanModal(true);
      } else {
        showToast(res?.message || "Could not fetch loans status records", "error");
      }
    } catch (err) {
      showToast("Error processing loan history timeline", "error");
    } finally {
      setLoadingLoans(false);
    }
  };

  // Status Chip Badge color styling builders
  const getStatusColor = (status) => {
    const s = status?.toLowerCase();
    if (s === "approved" || s === "completed" || s === "active") return "bg-green-100 text-green-800 border-green-200";
    if (s === "pending" || s === "processing") return "bg-yellow-100 text-yellow-800 border-yellow-200";
    if (s === "rejected" || s === "failed") return "bg-red-100 text-red-800 border-red-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4 md:p-8">
      
      {/* Centralized Core Banking Profile Container */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 max-w-2xl w-full overflow-hidden transition-all duration-300 hover:shadow-2xl">
        
        {/* Banner Top Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 px-6 py-12 text-center relative text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/5 rounded-full transform -translate-x-5 translate-y-10"></div>
          
          <div className="relative inline-block mb-3">
            <FaUserCircle className="text-white drop-shadow-md mx-auto" size={84} />
            <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 border-4 border-blue-800 rounded-full"></span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">{user?.fullName || "Account Holder"}</h2>
          <p className="text-blue-200 text-xs font-mono mt-1">Tier 1 Verified Customer</p>
        </div>

        {/* Dynamic Financial Asset/Card Status Summary Row */}
        <div className="grid grid-cols-2 border-b border-gray-100 bg-gray-50/50">
          <div className="p-4 border-r border-gray-100 text-center">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Debit Card Status</p>
            <div className="inline-flex items-center space-x-1.5">
              <FaCreditCard size={14} className={cardStatus !== "Not Requested" ? "text-blue-600" : "text-gray-400"} />
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${getStatusColor(cardStatus)}`}>
                {cardStatus}
              </span>
            </div>
          </div>
          <div className="p-4 text-center flex flex-col items-center justify-center">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Active Accounts</p>
            <button 
              onClick={handleViewLoans}
              disabled={loadingLoans}
              className="inline-flex items-center space-x-1 text-xs font-bold text-blue-700 hover:text-indigo-900 transition disabled:opacity-50"
            >
              <FaHandHoldingUsd size={15} />
              <span>{loadingLoans ? "Checking..." : "My Active Loans"}</span>
              <FaChevronRight size={10} className="mt-0.5" />
            </button>
          </div>
        </div>

        {/* Primary Account & KYC Informational Grid */}
        <div className="p-6 space-y-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-2">
            Secure Account Profile Elements
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProfileRowCard icon={<FaIdCard className="text-blue-600" />} title="Account Number" value={user?.accountNumber || "N/A"} mono />
            <ProfileRowCard icon={<FaUniversity className="text-emerald-600" />} title="Account Type" value={user?.accountType || "Savings Account"} />
            <ProfileRowCard icon={<FaEnvelope className="text-indigo-600" />} title="Email Address" value={user?.email || "N/A"} />
            <ProfileRowCard icon={<FaPhone className="text-purple-600" />} title="Phone Network" value={user?.phoneNumber || "N/A"} />
            <ProfileRowCard icon={<FaBriefcase className="text-amber-600" />} title="Declared Occupation" value={user?.occupation || "Corporate Professional"} />
            <ProfileRowCard icon={<FaCalendarAlt className="text-red-600" />} title="System Access Group" value="Active Live Node" />
          </div>

          {/* Core Institutional Footprint Notice */}
          <div className="bg-blue-50 rounded-2xl p-4 text-xs text-blue-800 flex items-start space-x-3 mt-4">
            <FaClock size={16} className="shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Protected Electronic Ledger Encryption</p>
              <p className="opacity-80 mt-0.5">This profile profile map updates seamlessly across active balance requests and automated underwriting infrastructure configurations.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Slide Up/Fade In Loan History Overlay Details View */}
      {showLoanModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[85vh] flex flex-col">
            <button 
              onClick={() => setShowLoanModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition"
            >
              <FaTimesCircle size={22} />
            </button>

            <div className="flex items-center space-x-2 border-b border-gray-100 pb-3 mb-4">
              <FaHandHoldingUsd size={24} className="text-blue-700" />
              <h3 className="text-xl font-bold text-gray-800">Your Registered Loans</h3>
            </div>

            {/* Loans Table Data Mapper Container */}
            <div className="overflow-y-auto space-y-3 pr-1 flex-1">
              {loans.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <FaCheckCircle size={36} className="mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">No recorded loan obligations bound to this account identifier.</p>
                </div>
              ) : (
                loans.map((loan, idx) => (
                  <div key={loan._id || idx} className="border border-gray-100 bg-gray-50/50 rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{loan.loanType || "Personal Loan"}</p>
                      <p className="text-xs text-gray-500 mt-0.5">Duration: {loan.durationMonths || 24} Months • Rate: {loan.interestRate || 8.5}%</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono font-bold text-blue-700 text-sm">৳ {parseFloat(loan.amount || 0).toLocaleString()}</p>
                      <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border font-semibold ${getStatusColor(loan.status)}`}>
                        {loan.status || "Pending"}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <button 
              onClick={() => setShowLoanModal(false)}
              className="w-full bg-gray-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition mt-4"
            >
              Dismiss View
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

/* Local Component Helper Card to present Profile Data elegantly */
function ProfileRowCard({ icon, title, value, mono }) {
  return (
    <div className="bg-gray-50 border border-gray-100/70 p-3.5 rounded-xl flex items-start space-x-3">
      <div className="p-2.5 bg-white shadow-sm rounded-lg text-sm shrink-0">
        {icon}
      </div>
      <div className="overflow-hidden w-full">
        <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">{title}</p>
        <p className={`text-sm font-bold text-gray-800 truncate mt-0.5 ${mono ? "font-mono text-gray-700" : ""}`}>
          {value}
        </p>
      </div>
    </div>
  );
}

// Named close helper explicitly matching interface usages
function FaTimesCircle({ size, className }) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height={size} width={size} className={className}>
      <path d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.033 248-248S392.966 8 256 8zm0 416c-92.645 0-168-75.355-168-168S163.355 88 256 88s168 75.355 168 168-75.355 168-168 168zm70.657-240.657l-42.427 42.427 42.427 42.426c6.249 6.248 6.249 16.379 0 22.627l-11.314 11.314c-6.248 6.249-16.379 6.249-22.628 0L256 301.314l-42.426 42.427c-6.248 6.249-16.379 6.249-22.628 0l-11.314-11.314c-6.249-6.248-6.249-16.379 0-22.627l42.427-42.426-42.427-42.427c-6.249-6.249-6.249-16.379 0-22.628l11.314-11.314c6.249-6.248 16.379-6.248 22.628 0L256 216.686l42.426-42.427c6.248-6.249 16.379-6.249 22.628 0l11.314 11.314c6.249 6.249 6.249 16.379 0 22.628z"></path>
    </svg>
  );
}