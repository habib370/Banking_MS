import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome, FaBed, FaShower, FaWifi, FaUtensils, FaClock } from "react-icons/fa";

export default function HostelRent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link to="/home" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition">
          <FaArrowLeft /> Back to Dashboard
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-700 to-purple-800 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaHome size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Hall & Hostel Rent</h1>
                <p className="text-indigo-200 mt-1">Manage your dormitory and campus living bills</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Description */}
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
              <h2 className="text-xl font-bold text-gray-800 mb-3">🏠 About This Service</h2>
              <p className="text-gray-700 leading-relaxed">
                Conveniently pay your hall and hostel rent through EliteBank's student accommodation portal. 
                We partner with major universities to provide seamless, automated rental payments with 
                real-time status updates and digital receipts.
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">✨ Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureCard icon={<FaBed />} title="Room Management" desc="Select and manage your room preferences" />
                <FeatureCard icon={<FaShower />} title="Utility Bills" desc="Water, electricity, and maintenance charges" />
                <FeatureCard icon={<FaWifi />} title="Internet Included" desc="High-speed campus WiFi included" />
                <FeatureCard icon={<FaUtensils />} title="Meal Plans" desc="Choose your cafeteria meal package" />
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">📋 How It Works</h2>
              <div className="space-y-3">
                <StepItem number="1" text="Select your hall or hostel from the list" />
                <StepItem number="2" text="Choose your room type and meal plan" />
                <StepItem number="3" text="Review the monthly rent breakdown" />
                <StepItem number="4" text="Confirm and complete payment" />
                <StepItem number="5" text="Get instant confirmation and receipt" />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2">⚠️ Important Notes</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Rent is due on the 1st of every month</li>
                <li>• Late payments may incur penalties</li>
                <li>• Submit maintenance requests through the portal</li>
                <li>• Contact hall administration for room changes</li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition hover:scale-[1.02]">
              🏠 Pay Hostel Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reuse FeatureCard and StepItem from above or define them here
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition">
      <div className="flex items-start gap-3">
        <div className="text-2xl text-indigo-600">{icon}</div>
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
      <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}