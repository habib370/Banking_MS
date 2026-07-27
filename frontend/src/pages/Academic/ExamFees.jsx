import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaFileAlt, FaClipboardCheck, FaCreditCard, FaPrint, FaDownload } from "react-icons/fa";

export default function ExamFees() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link to="/home" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition">
          <FaArrowLeft /> Back to Dashboard
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-green-800 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaFileAlt size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Exam & Registration Dues</h1>
                <p className="text-emerald-200 mt-1">Pay for semester exams and registration fees</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Description */}
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <h2 className="text-xl font-bold text-gray-800 mb-3">📝 About This Service</h2>
              <p className="text-gray-700 leading-relaxed">
                Pay your semester exam fees, registration charges, and associated academic dues through 
                EliteBank's dedicated academic portal. Get instant admit card generation and registration 
                confirmation after successful payment.
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">✨ Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureCard icon={<FaClipboardCheck />} title="Quick Registration" desc="Register for exams in minutes" />
                <FeatureCard icon={<FaCreditCard />} title="Multiple Payment Options" desc="Bank, card, or mobile banking" />
                <FeatureCard icon={<FaPrint />} title="Admit Card Generation" desc="Instant admit card download" />
                <FeatureCard icon={<FaDownload />} title="Digital Receipts" desc="Download payment confirmation" />
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">📋 How It Works</h2>
              <div className="space-y-3">
                <StepItem number="1" text="Select your semester and examination type" />
                <StepItem number="2" text="Verify your course registration details" />
                <StepItem number="3" text="Review the fee breakdown" />
                <StepItem number="4" text="Complete payment securely" />
                <StepItem number="5" text="Download admit card and receipt" />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2">⚠️ Important Notes</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Registration deadlines must be strictly followed</li>
                <li>• Late registration may incur additional charges</li>
                <li>• Verify exam details before payment</li>
                <li>• Keep receipt for future reference</li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition hover:scale-[1.02]">
              📝 Pay Exam Fees Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition">
      <div className="flex items-start gap-3">
        <div className="text-2xl text-emerald-600">{icon}</div>
        <div>
          <h3 className="font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function StepItem({ number, text }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
      <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}