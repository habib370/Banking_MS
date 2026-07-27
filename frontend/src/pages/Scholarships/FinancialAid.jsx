import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaHandsHelping,
  FaHeart,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaWallet,
  FaFileAlt,
  FaUserCheck,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function FinancialAid() {
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
          <div className="bg-gradient-to-r from-red-600 to-pink-700 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaHandsHelping size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Need-Based Financial Aid
                </h1>
                <p className="text-red-200 mt-1">
                  One-time grants for students facing financial hardship
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaHeart className="text-red-600" /> About Financial Aid
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                EliteBank's Need-Based Financial Aid program provides critical
                support to students facing unexpected financial challenges.
                Whether it's a family emergency, medical expenses, or sudden
                loss of income, we offer one-time grants to help you continue
                your education without interruption.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                Our financial aid is designed to be accessible and
                compassionate. We understand that life can be unpredictable, and
                we're here to help. The application process is straightforward,
                and decisions are made quickly to ensure you get the support you
                need when you need it most.
              </p>
            </div>

            {/* Aid Types */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🆘 Types of Aid Available
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <AidTypeCard
                  title="Emergency Grant"
                  desc="Immediate financial assistance for urgent needs"
                  amount="Up to ৳50,000"
                />
                <AidTypeCard
                  title="Medical Assistance"
                  desc="Support for unexpected medical expenses"
                  amount="Up to ৳30,000"
                />
                <AidTypeCard
                  title="Hardship Fund"
                  desc="Support during family financial crises"
                  amount="Up to ৳100,000"
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
                  icon={<FaClock className="text-green-600" />}
                  title="Quick Processing"
                  desc="Decisions made within 72 hours"
                />
                <BenefitCard
                  icon={<FaUsers className="text-blue-600" />}
                  title="Compassionate Support"
                  desc="Caring and understanding approach"
                />
                <BenefitCard
                  icon={<FaShieldAlt className="text-purple-600" />}
                  title="Confidential"
                  desc="Your privacy is protected"
                />
                <BenefitCard
                  icon={<FaWallet className="text-orange-600" />}
                  title="No Repayment Required"
                  desc="Grants, not loans"
                />
                <BenefitCard
                  icon={<FaUserCheck className="text-indigo-600" />}
                  title="Easy Application"
                  desc="Simple online application process"
                />
                <BenefitCard
                  icon={<FaPhone className="text-green-600" />}
                  title="Personal Support"
                  desc="Dedicated support throughout the process"
                />
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✅ Eligibility Criteria
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <EligibilityItem text="Enrolled in a recognized university or college" />
                <EligibilityItem text="Active EliteBank student account" />
                <EligibilityItem text="Documented financial hardship" />
                <EligibilityItem text="Good academic standing (CGPA 2.5+)" />
                <EligibilityItem text="Proof of income (family or personal)" />
                <EligibilityItem text="Completed financial aid application" />
                <EligibilityItem text="Supporting documentation for hardship" />
                <EligibilityItem text="Consent for verification" />
              </div>
            </div>

            {/* How to Apply */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📋 How to Apply
              </h2>
              <div className="space-y-3">
                <StepItem
                  number="1"
                  text="Login to your EliteBank student account"
                />
                <StepItem
                  number="2"
                  text="Navigate to Scholarships & Grants &gt; Financial Aid"
                />
                <StepItem
                  number="3"
                  text="Describe your situation and financial need"
                />
                <StepItem number="4" text="Upload supporting documents" />
                <StepItem number="5" text="Submit the application" />
                <StepItem
                  number="6"
                  text="Receive a decision within 72 hours"
                />
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📄 Required Documents
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <DocumentItem text="Valid Student ID" />
                <DocumentItem text="Family Income Statement" />
                <DocumentItem text="Medical Reports (if applicable)" />
                <DocumentItem text="Latest Academic Transcript" />
                <DocumentItem text="Bank Statement (last 3 months)" />
                <DocumentItem text="Supporting Evidence of Hardship" />
                <DocumentItem text="Character Reference" />
                <DocumentItem text="Personal Statement" />
              </ul>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• All information is kept strictly confidential</li>
                <li>• Grants are approved based on need and availability</li>
                <li>• Additional documentation may be requested</li>
                <li>• Contact us for immediate urgent assistance</li>
                <li>• We're here to help - don't hesitate to apply</li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-red-700 hover:to-pink-700">
                🤝 Apply for Financial Aid
              </button>
              <button className="flex-1 bg-white border-2 border-red-600 text-red-600 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300">
                <FaEnvelope className="inline mr-2" /> Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AidTypeCard({ title, desc, amount }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-lg transition hover:border-red-300">
      <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
      <p className="text-sm font-bold text-red-600 mt-2">{amount}</p>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-red-200 group">
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

function StepItem({ number, text }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition hover:border-red-200">
      <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
        {number}
      </div>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
}

function EligibilityItem({ text }) {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-xl">
      <FaCheckCircle className="text-green-500 text-sm" />
      <span className="text-gray-700 text-sm">{text}</span>
    </div>
  );
}

function DocumentItem({ text }) {
  return (
    <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100">
      <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
      <span className="text-gray-700 text-sm">{text}</span>
    </li>
  );
}
