import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaBook, FaBookOpen, FaPenFancy, FaUsers, FaClock } from "react-icons/fa";

export default function LibraryDues() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link to="/home" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition">
          <FaArrowLeft /> Back to Dashboard
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-700 to-orange-800 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaBook size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Library & Lab Dues</h1>
                <p className="text-amber-200 mt-1">Clear institutional fines and library fees</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Description */}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h2 className="text-xl font-bold text-gray-800 mb-3">📚 About This Service</h2>
              <p className="text-gray-700 leading-relaxed">
                Pay library fines, lab fees, and other institutional dues through EliteBank's academic payment 
                system. Check your outstanding balances and clear them instantly with our secure payment gateway.
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">✨ Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureCard icon={<FaBookOpen />} title="Library Fines" desc="Pay overdue book fees" />
                <FeatureCard icon={<FaPenFancy />} title="Lab Fees" desc="Clear lab usage charges" />
                <FeatureCard icon={<FaUsers />} title="Resource Access" desc="Unlock library resources" />
                <FeatureCard icon={<FaClock />} title="Real-time Balance" desc="View outstanding dues" />
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">📋 How It Works</h2>
              <div className="space-y-3">
                <StepItem number="1" text="Login and view your outstanding dues" />
                <StepItem number="2" text="Select items to clear from your list" />
                <StepItem number="3" text="Review the total amount" />
                <StepItem number="4" text="Complete payment securely" />
                <StepItem number="5" text="Get confirmation and updated balance" />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2">⚠️ Important Notes</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Clear dues before semester end to avoid blocking</li>
                <li>• Return library books before paying fines</li>
                <li>• Lab fees are semester-based</li>
                <li>• Contact library for dispute resolution</li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition hover:scale-[1.02]">
              📚 Pay Dues Now
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
        <div className="text-2xl text-amber-600">{icon}</div>
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
      <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}