import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaUtensils, FaCoffee, FaPizzaSlice, FaCrown, FaClock } from "react-icons/fa";

export default function CampusMeal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link to="/home" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition">
          <FaArrowLeft /> Back to Dashboard
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-700 to-pink-800 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaUtensils size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Campus Meal Card</h1>
                <p className="text-rose-200 mt-1">Recharge your campus cafeteria card</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Description */}
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
              <h2 className="text-xl font-bold text-gray-800 mb-3">🍽️ About This Service</h2>
              <p className="text-gray-700 leading-relaxed">
                Recharge your campus meal card to enjoy hassle-free dining at university cafeterias, 
                food courts, and partner restaurants. Track your spending and manage your meal budget 
                with our smart dining platform.
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">✨ Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureCard icon={<FaCoffee />} title="Instant Recharge" desc="Add funds to your card instantly" />
                <FeatureCard icon={<FaPizzaSlice />} title="Multiple Dining Options" desc="Use at various campus outlets" />
                <FeatureCard icon={<FaCrown />} title="Student Discounts" desc="Exclusive discounts for card holders" />
                <FeatureCard icon={<FaClock />} title="Balance Tracker" desc="Monitor your spending in real-time" />
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">📋 How It Works</h2>
              <div className="space-y-3">
                <StepItem number="1" text="Login to your EliteBank student account" />
                <StepItem number="2" text="Select your campus and meal card" />
                <StepItem number="3" text="Choose recharge amount" />
                <StepItem number="4" text="Complete payment" />
                <StepItem number="5" text="Use card at any campus outlet" />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2">⚠️ Important Notes</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Minimum recharge is ৳500</li>
                <li>• Card can be used at all campus outlets</li>
                <li>• Unused balance carries forward</li>
                <li>• Report lost cards immediately</li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition hover:scale-[1.02]">
              🍽️ Recharge Meal Card
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
        <div className="text-2xl text-rose-600">{icon}</div>
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
      <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}