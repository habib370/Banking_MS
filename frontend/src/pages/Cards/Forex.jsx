import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaGlobe,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaWallet,
  FaFlag,
  FaPlane,
  FaPassport,
  FaUniversity,
} from "react-icons/fa";

export default function Forex() {
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
          <div className="bg-gradient-to-r from-green-700 to-emerald-800 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaExchangeAlt size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  International Student Forex
                </h1>
                <p className="text-green-200 mt-1">
                  Pay IELTS, GRE, visa fees & study abroad expenses
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaGlobe className="text-green-600" /> About Forex Services
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                EliteBank's International Forex services are tailored for
                students planning to study abroad or pay for international exams
                and applications. We offer competitive exchange rates, low
                transaction fees, and seamless international money transfers for
                all your education-related expenses.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                Whether you need to pay for IELTS, GRE, GMAT, TOEFL, visa
                application fees, or your first semester tuition abroad, our
                forex services ensure you get the best rates with complete
                transparency. Track your transactions in real-time and receive
                instant confirmation for every payment.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🌍 Forex Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ServiceCard
                  icon={<FaPassport />}
                  title="Visa Application Fees"
                  desc="Pay for visa processing in multiple currencies"
                />
                <ServiceCard
                  icon={<FaUniversity />}
                  title="Tuition Payments"
                  desc="Direct transfer to foreign universities"
                />
                <ServiceCard
                  icon={<FaPlane />}
                  title="Travel Expenses"
                  desc="Prepaid travel cards for student travelers"
                />
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✨ Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BenefitCard
                  icon={<FaExchangeAlt className="text-green-600" />}
                  title="Competitive Rates"
                  desc="Best exchange rates for students"
                />
                <BenefitCard
                  icon={<FaClock className="text-blue-600" />}
                  title="Quick Processing"
                  desc="Payments processed within 24 hours"
                />
                <BenefitCard
                  icon={<FaWallet className="text-purple-600" />}
                  title="No Hidden Fees"
                  desc="Transparent fee structure"
                />
                <BenefitCard
                  icon={<FaFlag className="text-orange-600" />}
                  title="100+ Currencies"
                  desc="Support for major world currencies"
                />
                <BenefitCard
                  icon={<FaShieldAlt className="text-indigo-600" />}
                  title="Secure Transfers"
                  desc="Bank-level encryption and security"
                />
                <BenefitCard
                  icon={<FaCheckCircle className="text-green-600" />}
                  title="Real-time Tracking"
                  desc="Track your transactions instantly"
                />
              </div>
            </div>

            {/* Exchange Rates */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                💰 Live Exchange Rates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RateCard
                  currency="USD"
                  rate="1 USD = 110.50 BDT"
                  change="+0.5%"
                />
                <RateCard
                  currency="EUR"
                  rate="1 EUR = 120.25 BDT"
                  change="-0.2%"
                />
                <RateCard
                  currency="GBP"
                  rate="1 GBP = 140.75 BDT"
                  change="+0.8%"
                />
              </div>
            </div>

            {/* How to Use */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📋 How to Use
              </h2>
              <div className="space-y-3">
                <StepItem
                  number="1"
                  text="Login to your EliteBank student account"
                />
                <StepItem
                  number="2"
                  text="Navigate to Cards & Forex &gt; Forex Services"
                />
                <StepItem
                  number="3"
                  text="Select the currency and enter the amount"
                />
                <StepItem
                  number="4"
                  text="Provide recipient details and purpose of payment"
                />
                <StepItem
                  number="5"
                  text="Review and confirm the transaction"
                />
                <StepItem
                  number="6"
                  text="Receive confirmation and tracking ID"
                />
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📄 Required Documents
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <DocumentItem text="Valid Passport" />
                <DocumentItem text="Student Visa (if applicable)" />
                <DocumentItem text="University Offer Letter" />
                <DocumentItem text="Forex Application Form" />
                <DocumentItem text="Purpose of Payment Details" />
                <DocumentItem text="Bank Account Details (foreign)" />
              </ul>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Forex rates update daily at 10:00 AM</li>
                <li>• International transfers take 1-3 business days</li>
                <li>• Maximum forex limit: $10,000 per transaction</li>
                <li>
                  • Additional documentation may be required for large transfers
                </li>
                <li>• 24/7 support for forex-related queries</li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-green-700 hover:to-emerald-700">
              🌍 Exchange Currency Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-lg transition hover:border-green-300">
      <div className="text-4xl text-green-600 mb-3">{icon}</div>
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-green-200 group">
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

function RateCard({ currency, rate, change }) {
  const isPositive = change.startsWith("+");
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition">
      <p className="text-2xl font-bold text-gray-800">{currency}</p>
      <p className="text-sm text-gray-600 mt-1">{rate}</p>
      <p
        className={`text-sm font-semibold mt-1 ${isPositive ? "text-green-600" : "text-red-600"}`}
      >
        {change}
      </p>
    </div>
  );
}

function StepItem({ number, text }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition hover:border-green-200">
      <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
        {number}
      </div>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
}

function DocumentItem({ text }) {
  return (
    <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100">
      <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
      <span className="text-gray-700 text-sm">{text}</span>
    </li>
  );
}
