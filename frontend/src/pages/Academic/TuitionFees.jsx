import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaGraduationCap, FaMoneyBillWave, FaUniversity, FaCalendarCheck, FaBook, FaClock } from "react-icons/fa";

export default function TuitionFees() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link to="/home" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition">
          <FaArrowLeft /> Back to Dashboard
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaGraduationCap size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Semester Tuition Fees</h1>
                <p className="text-blue-200 mt-1">Pay your university tuition fees securely</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Description Section */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="text-xl font-bold text-gray-800 mb-3">📖 About This Service</h2>
              <p className="text-gray-700 leading-relaxed">
                Pay your semester tuition fees directly to your partnered university through EliteBank's secure academic payment system. 
                Our platform ensures instant, hassle-free transactions with zero processing fees for all enrolled students.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">✨ Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureCard 
                  icon={<FaMoneyBillWave className="text-green-600" />}
                  title="Zero Processing Fee"
                  desc="No additional charges for tuition payments"
                />
                <FeatureCard 
                  icon={<FaUniversity className="text-blue-600" />}
                  title="Direct University Transfer"
                  desc="Payments sent directly to your institution"
                />
                <FeatureCard 
                  icon={<FaCalendarCheck className="text-purple-600" />}
                  title="Instant Confirmation"
                  desc="Real-time payment acknowledgment"
                />
                <FeatureCard 
                  icon={<FaClock className="text-orange-600" />}
                  title="24/7 Availability"
                  desc="Pay anytime, anywhere"
                />
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">📋 How It Works</h2>
              <div className="space-y-3">
                <StepItem number="1" text="Log in to your EliteBank student account" />
                <StepItem number="2" text="Select your university from the partnered list" />
                <StepItem number="3" text="Enter your student ID and semester details" />
                <StepItem number="4" text="Confirm the amount and complete payment" />
                <StepItem number="5" text="Download payment receipt instantly" />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2">⚠️ Important Notes</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Ensure your student ID is correctly entered</li>
                <li>• Payment confirmation may take 2-3 minutes</li>
                <li>• Contact support for any payment discrepancies</li>
                <li>• All payments are securely encrypted</li>
              </ul>
            </div>

            {/* Action Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition hover:scale-[1.02]">
              🎓 Pay Tuition Fees Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Components
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition">
      <div className="flex items-start gap-3">
        <div className="text-2xl">{icon}</div>
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
      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}