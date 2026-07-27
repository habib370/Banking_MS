import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaPiggyBank,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaWallet,
  FaChartLine,
  FaGift,
  FaStar,
  FaRocket,
} from "react-icons/fa";

export default function StudentDPS() {
  const [amount, setAmount] = useState(500);
  const [duration, setDuration] = useState(12);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition font-medium"
        >
          <FaArrowLeft /> Back to Dashboard
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-700 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaPiggyBank size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Student Monthly DPS
                </h1>
                <p className="text-purple-200 mt-1">
                  Automated savings starting at ৳500/month
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaRocket className="text-purple-600" /> About Monthly DPS
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The Student Monthly DPS (Deposit Pension Scheme) is a systematic
                savings plan designed to help students build a savings habit.
                Start with as little as ৳500 per month and watch your savings
                grow with competitive interest rates. Perfect for achieving your
                financial goals - whether it's a new laptop, semester fees, or
                emergency funds.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                With flexible tenures from 12 to 60 months, you can choose a
                plan that fits your budget and goals. Automatic deductions from
                your account make saving effortless. You can even increase your
                monthly contributions as your income grows.
              </p>
            </div>

            {/* DPS Calculator */}
            <div className="bg-white border-2 border-purple-200 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🧮 DPS Calculator
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Amount (৳)
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">৳500</span>
                    <span className="text-sm font-bold text-purple-600">
                      ৳{amount.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">৳10,000</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (Months)
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="60"
                    step="6"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">12 mo</span>
                    <span className="text-sm font-bold text-purple-600">
                      {duration} mo
                    </span>
                    <span className="text-xs text-gray-500">60 mo</span>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <p className="text-gray-500 text-sm">Total Savings</p>
                  <p className="text-3xl font-bold text-purple-700">
                    ৳{(amount * duration * 1.1).toFixed(0)}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    *Approximate with 10% returns
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✨ Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BenefitCard
                  icon={<FaMoneyBillWave className="text-green-600" />}
                  title="Small Start"
                  desc="Begin with just ৳500 per month"
                />
                <BenefitCard
                  icon={<FaCalendarCheck className="text-blue-600" />}
                  title="Flexible Tenure"
                  desc="Choose 12 to 60 months"
                />
                <BenefitCard
                  icon={<FaChartLine className="text-purple-600" />}
                  title="Competitive Returns"
                  desc="Earn up to 10% annual interest"
                />
                <BenefitCard
                  icon={<FaGift className="text-orange-600" />}
                  title="Bonus Rewards"
                  desc="Loyalty bonus on completion"
                />
                <BenefitCard
                  icon={<FaClock className="text-indigo-600" />}
                  title="Auto-Debit"
                  desc="Set and forget automation"
                />
                <BenefitCard
                  icon={<FaStar className="text-yellow-600" />}
                  title="Goal Tracking"
                  desc="Visualize your progress"
                />
              </div>
            </div>

            {/* Plans */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📋 DPS Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PlanCard
                  title="Starter Plan"
                  amount="৳500/mo"
                  tenure="12 months"
                  interest="8%"
                  return="৳6,480"
                />
                <PlanCard
                  title="Standard Plan"
                  amount="৳2,000/mo"
                  tenure="24 months"
                  interest="9%"
                  return="৳52,560"
                />
                <PlanCard
                  title="Premium Plan"
                  amount="৳5,000/mo"
                  tenure="36 months"
                  interest="10%"
                  return="৳198,000"
                  highlighted
                />
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📋 How It Works
              </h2>
              <div className="space-y-3">
                <StepItem
                  number="1"
                  text="Choose your monthly contribution amount"
                />
                <StepItem number="2" text="Select your preferred tenure" />
                <StepItem
                  number="3"
                  text="Set up auto-debit from your account"
                />
                <StepItem
                  number="4"
                  text="Watch your savings grow month by month"
                />
                <StepItem
                  number="5"
                  text="Earn interest on your contributions"
                />
                <StepItem
                  number="6"
                  text="Withdraw accumulated amount at maturity"
                />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• DPS accounts earn interest at prevailing rates</li>
                <li>• No penalty for early closure after 1 year</li>
                <li>• Auto-debit requires sufficient balance</li>
                <li>• Loyalty bonus available for completing full term</li>
                <li>• Partial withdrawals not allowed during tenure</li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-purple-700 hover:to-pink-700">
              🐖 Open DPS Account Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-purple-200 group">
      <div className="flex items-start gap-3">
        <div className="text-2xl mt-1 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PlanCard({
  title,
  amount,
  tenure,
  interest,
  return: returnAmount,
  highlighted,
}) {
  return (
    <div
      className={`border rounded-xl p-5 text-center transition-all hover:shadow-lg ${
        highlighted
          ? "border-purple-500 bg-purple-50 shadow-md"
          : "border-gray-200 bg-white"
      }`}
    >
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-2xl font-bold text-purple-600 my-2">{amount}</p>
      <p className="text-sm text-gray-500">{tenure}</p>
      <p className="text-sm text-gray-500">{interest} interest</p>
      <p className="text-lg font-bold text-gray-800 mt-2">
        Maturity: {returnAmount}
      </p>
      {highlighted && (
        <div className="mt-2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
          Most Popular
        </div>
      )}
    </div>
  );
}

function StepItem({ number, text }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition hover:border-purple-200">
      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
        {number}
      </div>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
}
