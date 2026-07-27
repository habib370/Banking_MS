import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaLaptopCode,
  FaDollarSign,
  FaGlobe,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaWallet,
  FaPaypal,
  FaUsers,
  FaStar,
  FaChartLine,
} from "react-icons/fa";

export default function Freelance() {
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
          <div className="bg-gradient-to-r from-indigo-700 to-blue-800 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaLaptopCode size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Freelancer Student Account
                </h1>
                <p className="text-indigo-200 mt-1">
                  Receive earnings from Fiverr, Upwork & more
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaDollarSign className="text-indigo-600" /> About Freelancer
                Account
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The EliteBank Freelancer Student Account is specifically
                designed for students who earn income through freelancing
                platforms like Fiverr, Upwork, Freelancer, and Toptal. Receive
                your earnings directly, convert currencies at competitive rates,
                and manage your freelance income seamlessly.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                Our account comes with automatic invoicing, tax management
                tools, and instant payment notifications. Track your income,
                manage multiple projects, and build a professional freelance
                profile - all from your EliteBank student dashboard.
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✨ Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BenefitCard
                  icon={<FaGlobe className="text-green-600" />}
                  title="International Payments"
                  desc="Receive in USD, EUR, GBP and more"
                />
                <BenefitCard
                  icon={<FaPaypal className="text-blue-600" />}
                  title="Platform Integration"
                  desc="Connect to Fiverr, Upwork, Freelancer"
                />
                <BenefitCard
                  icon={<FaWallet className="text-purple-600" />}
                  title="Instant Withdrawals"
                  desc="Access your earnings anytime"
                />
                <BenefitCard
                  icon={<FaUsers className="text-orange-600" />}
                  title="Client Management"
                  desc="Track all your clients and projects"
                />
                <BenefitCard
                  icon={<FaChartLine className="text-indigo-600" />}
                  title="Income Analytics"
                  desc="Visualize your earnings growth"
                />
                <BenefitCard
                  icon={<FaStar className="text-yellow-600" />}
                  title="Freelancer Profile"
                  desc="Build your professional presence"
                />
              </div>
            </div>

            {/* Platforms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                💼 Supported Platforms
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <PlatformCard name="Fiverr" color="text-green-600" />
                <PlatformCard name="Upwork" color="text-blue-600" />
                <PlatformCard name="Freelancer" color="text-orange-600" />
                <PlatformCard name="Toptal" color="text-purple-600" />
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
                  text="Open your Freelancer Student Account"
                />
                <StepItem
                  number="2"
                  text="Connect your freelancing platform accounts"
                />
                <StepItem
                  number="3"
                  text="Set up automatic payment receiving"
                />
                <StepItem
                  number="4"
                  text="Manage invoices and generate professional bills"
                />
                <StepItem number="5" text="Track your income and expenses" />
                <StepItem
                  number="6"
                  text="Withdraw earnings to your local bank account"
                />
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                💎 Exclusive Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BenefitItem text="Zero fees on international payments under $500" />
                <BenefitItem text="Free invoice generation and tracking" />
                <BenefitItem text="Tax management and financial reporting" />
                <BenefitItem text="Priority customer support for freelancers" />
                <BenefitItem text="Access to freelancer community and resources" />
                <BenefitItem text="Annual cashback on platform fees" />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Open to students with valid freelancing experience</li>
                <li>• International payments processed in major currencies</li>
                <li>• Transaction fees apply for amounts over $500</li>
                <li>• Tax reports generated automatically</li>
                <li>• 24/7 support for freelancer-related queries</li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-indigo-700 hover:to-blue-700">
              💻 Open Freelancer Account Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-indigo-200 group">
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

function PlatformCard({ name, color }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition hover:border-indigo-300">
      <div className={`text-3xl font-bold ${color} mb-2`}>{name.charAt(0)}</div>
      <p className="text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
}

function StepItem({ number, text }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition hover:border-indigo-200">
      <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
        {number}
      </div>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
}

function BenefitItem({ text }) {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-xl">
      <FaCheckCircle className="text-green-500 text-sm" />
      <span className="text-gray-700 text-sm">{text}</span>
    </div>
  );
}
