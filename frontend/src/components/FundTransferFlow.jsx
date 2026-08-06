import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/Auth"; // Adjust path if needed
import { 
  FaPaperPlane, FaShieldAlt, FaArrowLeft, FaCheckCircle, 
  FaReceipt, FaDownload, FaShareAlt, FaUniversity 
} from "react-icons/fa";

const API_BASE = "http://localhost:8080/api/account";

export default function FundTransferFlow({ onBackHome }) {
  const { user, checkBalance } = useAuth();
  
  const senderAccount = user?.accountNumber || "";

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fromAccount: senderAccount,
    toAccount: "",
    accountName: "",
    amount: "",
    narration: "",
    transferToken: "",
    otp: ["", "", "", "", "", ""],
  });

  const [timer, setTimer] = useState(120);
  const [txDetails, setTxDetails] = useState(null);

  useEffect(() => {
    if (user?.accountNumber) {
      setFormData((prev) => ({ ...prev, fromAccount: user.accountNumber }));
    }
  }, [user]);

  useEffect(() => {
    let interval = null;
    if (step === 3 && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const getAuthHeader = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });

  const handleAccountLookup = async (accNum) => {
    if (!accNum || accNum.length < 5) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `${API_BASE}/transfer/lookup?accountNumber=${accNum}`,
        getAuthHeader()
      );
      setFormData((prev) => ({ ...prev, accountName: res.data.accountName }));
    } catch (err) {
      setFormData((prev) => ({ ...prev, accountName: "" }));
      setError("Account not found");
    } finally {
      setLoading(false);
    }
  };

  const handleInitiateTransfer = async () => {
    setLoading(true);
    setError("");
    try {
      const payload = {
        fromAccount: formData.fromAccount,
        toAccount: formData.toAccount,
        amount: parseFloat(formData.amount),
        narration: formData.narration || "Fund Transfer",
      };
      const res = await axios.post(
        `${API_BASE}/transfer/initiate`,
        payload,
        getAuthHeader()
      );
      setFormData((prev) => ({ ...prev, transferToken: res.data.transferToken }));
      setTimer(120);
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || "Transfer initiation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    const fullOtp = formData.otp.join("");
    if (fullOtp.length < 6) return setError("Please enter 6-digit OTP");
    setLoading(true);
    setError("");
    try {
      const payload = {
        transferToken: formData.transferToken,
        otp: fullOtp,
      };
      const res = await axios.post(
        `${API_BASE}/transfer/verify-otp`,
        payload,
        getAuthHeader()
      );
      setTxDetails(res.data);
      
      if (checkBalance) await checkBalance();
      
      setStep(4);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (val, index) => {
    if (isNaN(val)) return;
    const updated = [...formData.otp];
    updated[index] = val;
    setFormData({ ...formData, otp: updated });

    if (val && index < 5) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }
  };

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {step > 1 && step <= 3 && (
              <button 
                onClick={() => setStep(step - 1)} 
                className="p-2 hover:bg-white/10 rounded-full transition"
              >
                <FaArrowLeft size={18} />
              </button>
            )}
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FaUniversity className="text-yellow-400" /> StudentBank
              </h2>
              <p className="text-xs text-blue-100">
                {step === 1 && "Fund Transfer"}
                {step === 2 && "Confirm Transfer Details"}
                {step === 3 && "Security Verification"}
                {step === 4 && "Transaction Complete"}
                {step === 5 && "Official Transfer Receipt"}
              </p>
            </div>
          </div>
          <button 
            onClick={onBackHome}
            className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition"
          >
            Back to Home
          </button>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 text-sm font-medium text-center border-b border-red-100">
            {error}
          </div>
        )}

        <div className="p-6">
          {/* STEP 1: Enter Transfer Details */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Debit Source Account</span>
                <p className="text-base font-bold text-gray-800 mt-1">{user?.fullName || "Account Holder"}</p>
                <div className="flex justify-between items-center text-xs text-gray-600 mt-2">
                  <span>A/C: <strong className="font-mono">{formData.fromAccount}</strong></span>
                  <span>Available: <strong className="text-green-600 font-bold">৳{user?.balance || "0.00"}</strong></span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination Account Number</label>
                <input
                  type="text"
                  placeholder="Enter recipient account number"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.toAccount}
                  onChange={(e) => {
                    setFormData({ ...formData, toAccount: e.target.value });
                    handleAccountLookup(e.target.value);
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
                <input
                  type="text"
                  readOnly
                  placeholder={loading ? "Verifying Account..." : "Recipient Name (Auto-filled)"}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium"
                  value={formData.accountName}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Transfer Amount (৳)</label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg font-bold"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Narration / Remark</label>
                <input
                  type="text"
                  placeholder="e.g. Tuition Fee / Personal"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.narration}
                  onChange={(e) => setFormData({ ...formData, narration: e.target.value })}
                />
              </div>

              <button
                disabled={!formData.accountName || !formData.amount || loading}
                onClick={() => setStep(2)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition disabled:opacity-50"
              >
                Proceed to Confirmation
              </button>
            </div>
          )}

          {/* STEP 2: Summary & Confirmation */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 space-y-3">
                <h3 className="text-lg font-bold text-gray-800">{formData.accountName}</h3>
                <p className="text-sm font-mono text-gray-500">Account: {formData.toAccount}</p>
                <div className="border-t border-gray-200 pt-3 space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Sender Account:</span>
                    <span className="font-mono font-medium">{formData.fromAccount}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Transfer Narration:</span>
                    <span>{formData.narration || "Fund Transfer"}</span>
                  </div>
                  <div className="flex justify-between text-gray-900 font-bold text-base pt-2 border-t">
                    <span>Total Amount:</span>
                    <span className="text-blue-700">৳ {parseFloat(formData.amount).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleInitiateTransfer}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition disabled:opacity-50"
              >
                {loading ? "Initiating Request..." : "Confirm & Send OTP"}
              </button>
            </div>
          )}

          {/* STEP 3: OTP Verification */}
          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Enter Security Code</h3>
                <p className="text-sm text-gray-500 mt-1">
                  We sent a 6-digit OTP code to your registered contact.
                </p>
              </div>

              <div className="flex justify-center gap-2">
                {formData.otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-input-${idx}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, idx)}
                    className="w-12 h-14 text-center text-xl font-bold border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none"
                  />
                ))}
              </div>

              <p className="text-xs font-semibold text-gray-500">
                Code expires in: <span className="text-red-500">{formatTimer(timer)}</span>
              </p>

              <button
                onClick={handleVerifyOtp}
                disabled={loading || timer === 0}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Verify & Transfer"}
              </button>
            </div>
          )}

          {/* STEP 4: Transfer Successful */}
          {step === 4 && (
            <div className="text-center space-y-6 py-4">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl">
                <FaCheckCircle />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Transfer Successful</h3>
                <p className="text-3xl font-extrabold text-blue-700 mt-2">
                  ৳ {parseFloat(txDetails?.amount || formData.amount).toFixed(2)}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-left space-y-2 text-sm border border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-500">Recipient:</span>
                  <span className="font-bold text-gray-800">{txDetails?.recipientName || formData.accountName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Account Number:</span>
                  <span className="font-mono">{txDetails?.recipientAccount || formData.toAccount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Reference ID:</span>
                  <span className="font-mono">{txDetails?.referenceId || "TXN" + Date.now().toString().slice(-8)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setStep(5)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow"
                >
                  <FaReceipt /> View Printable Receipt
                </button>
                <button
                  onClick={onBackHome}
                  className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-xl font-semibold transition"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Printable Receipt */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-slate-50 space-y-4">
                <div className="text-center border-b border-gray-200 pb-4">
                  <h3 className="text-2xl font-bold text-blue-800 flex items-center justify-center gap-2">
                    <FaUniversity /> StudentBank
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">Premium Banking Services</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold mt-2">
                    Official Transfer Memo
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <p className="font-bold text-gray-700 text-sm">Receiver Details</p>
                  <div className="flex justify-between"><span className="text-gray-500">Name:</span> <strong>{txDetails?.recipientName || formData.accountName}</strong></div>
                  <div className="flex justify-between"><span className="text-gray-500">Bank:</span> <span>StudentBank PLC</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Account:</span> <span className="font-mono">{txDetails?.recipientAccount || formData.toAccount}</span></div>
                </div>

                <div className="border-t border-gray-200 pt-3 space-y-2 text-xs">
                  <p className="font-bold text-gray-700 text-sm">Sender Details</p>
                  <div className="flex justify-between"><span className="text-gray-500">Name:</span> <strong>{user?.fullName || "Account Holder"}</strong></div>
                  <div className="flex justify-between"><span className="text-gray-500">Account:</span> <span className="font-mono">{formData.fromAccount}</span></div>
                </div>

                <div className="border-t border-gray-200 pt-3 space-y-2 text-xs">
                  <p className="font-bold text-gray-700 text-sm">Transaction Summary</p>
                  <div className="flex justify-between"><span className="text-gray-500">Transaction ID:</span> <span className="font-mono">{txDetails?.referenceId || "TXN" + Date.now().toString().slice(-8)}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Date & Time:</span> <span>{new Date().toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm pt-2 font-bold"><span className="text-gray-700">Amount Paid:</span> <span className="text-blue-700">৳ {parseFloat(formData.amount).toFixed(2)}</span></div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => window.print()}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition"
                >
                  <FaDownload /> Download / Print
                </button>
                <button
                  onClick={onBackHome}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-bold transition"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}