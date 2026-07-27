import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCreditCard,
  FaMobile,
  FaLock,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaWallet,
  FaGlobe,
  FaQrcode,
  FaApple,
  FaGoogle,
  FaAmazon,
  FaPaypal,
  FaShoppingCart,
} from "react-icons/fa";

export default function VirtualCard() {
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
          <div className="bg-gradient-to-r from-blue-700 to-cyan-700 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaCreditCard size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Student Virtual Card
                </h1>
                <p className="text-blue-200 mt-1">
                  Instant online payments for Coursera, Udemy & more
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaMobile className="text-blue-600" /> About Virtual Card
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The EliteBank Student Virtual Card is a digital payment solution
                designed specifically for students. Instantly generate a virtual
                card for online purchases, subscription payments, and
                educational platform fees. Perfect for Coursera, Udemy, edX, and
                other learning platforms.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                No physical card needed - get your card details instantly
                through the app. Set custom spending limits, lock/unlock your
                card with one tap, and track all transactions in real-time. Your
                virtual card is secure with EMV 3D Secure technology and can be
                used globally wherever Mastercard or Visa is accepted.
              </p>
            </div>

            {/* Card Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-800 to-cyan-800 rounded-2xl p-6 md:p-8 text-white shadow-2xl max-w-md mx-auto">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-blue-200 text-xs uppercase tracking-wider">
                      Virtual Card
                    </p>
                    <p className="text-lg font-bold mt-1">Student Edition</p>
                  </div>
                  <FaCreditCard size={32} className="opacity-80" />
                </div>
                <div className="mt-6">
                  <p className="text-blue-200 text-xs">Card Number</p>
                  <p className="text-xl font-mono tracking-wider">
                    •••• •••• •••• 4829
                  </p>
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-blue-200 text-xs">Expiry</p>
                    <p className="font-mono text-sm">12/26</p>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs">CVV</p>
                    <p className="font-mono text-sm">•••</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-xs text-blue-200">
                    💳 Tap to view full details
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✨ Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BenefitCard
                  icon={<FaGlobe className="text-green-600" />}
                  title="Global Payments"
                  desc="Use anywhere in the world"
                />
                <BenefitCard
                  icon={<FaLock className="text-blue-600" />}
                  title="Secure Transactions"
                  desc="EMV 3D Secure protection"
                />
                <BenefitCard
                  icon={<FaQrcode className="text-purple-600" />}
                  title="Instant Generation"
                  desc="Get card details immediately"
                />
                <BenefitCard
                  icon={<FaWallet className="text-orange-600" />}
                  title="Spend Control"
                  desc="Set custom limits"
                />
                <BenefitCard
                  icon={<FaClock className="text-indigo-600" />}
                  title="24/7 Monitoring"
                  desc="Track all transactions"
                />
                <BenefitCard
                  icon={<FaShieldAlt className="text-green-600" />}
                  title="One-Tap Lock"
                  desc="Lock/unlock instantly"
                />
              </div>
            </div>

            {/* Supported Platforms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📚 Supported Platforms
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <PlatformCard icon={<FaApple />} name="Apple Pay" />
                <PlatformCard icon={<FaGoogle />} name="Google Pay" />
                <PlatformCard icon={<FaAmazon />} name="Amazon" />
                <PlatformCard icon={<FaPaypal />} name="PayPal" />
                <PlatformCard icon={<FaShoppingCart />} name="E-commerce" />
              </div>
            </div>

            {/* How to Get Started */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📋 How to Get Started
              </h2>
              <div className="space-y-3">
                <StepItem
                  number="1"
                  text="Login to your EliteBank student account"
                />
                <StepItem
                  number="2"
                  text="Navigate to Cards & Forex &gt; Virtual Card"
                />
                <StepItem number="3" text="Click 'Generate Virtual Card'" />
                <StepItem
                  number="4"
                  text="Set your daily/monthly spending limits"
                />
                <StepItem number="5" text="Review and accept terms" />
                <StepItem
                  number="6"
                  text="Start using your virtual card instantly"
                />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>
                  • Virtual card is free for EliteBank student account holders
                </li>
                <li>
                  • Suitable for international transactions in USD, EUR, GBP
                </li>
                <li>• Daily spending limit of ৳50,000 (adjustable)</li>
                <li>• Card expires in 2 years (auto-renew available)</li>
                <li>• Zero liability for unauthorized transactions</li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-cyan-700">
              💳 Generate Virtual Card Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-blue-200 group">
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

function PlatformCard({ icon, name }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition hover:border-blue-300">
      <div className="text-3xl text-blue-600 mb-2">{icon}</div>
      <p className="text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
}

function StepItem({ number, text }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition hover:border-blue-200">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
        {number}
      </div>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
}
