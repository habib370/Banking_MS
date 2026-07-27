import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaPlane,
  FaPassport,
  FaUniversity,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaPercent,
  FaWallet,
  FaGlobe,
  FaBuilding,
  FaGraduationCap,
  FaExchangeAlt,
} from "react-icons/fa";

export default function StudyAbroad() {
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
          <div className="bg-gradient-to-r from-green-700 to-teal-700 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaPlane size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Study Abroad Financing
                </h1>
                <p className="text-green-200 mt-1">
                  Visa proof of funds & international education loans
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaGlobe className="text-green-600" /> About This Program
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                Study Abroad Financing helps students achieve their
                international education dreams by providing comprehensive
                financial support for tuition fees, living expenses, and visa
                requirements. We offer specialized loans for students planning
                to study in the USA, UK, Canada, Australia, Germany, and other
                top study destinations.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                Our program includes visa-proof-of-funds documentation,
                competitive exchange rates, and hassle-free disbursement
                directly to foreign universities. We also provide pre-departure
                support and post-arrival assistance to ensure a smooth
                transition.
              </p>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✨ Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BenefitCard
                  icon={<FaPassport className="text-green-600" />}
                  title="Visa Support"
                  desc="Complete documentation for visa application"
                />
                <BenefitCard
                  icon={<FaExchangeAlt className="text-blue-600" />}
                  title="Competitive Rates"
                  desc="Best exchange rates for international transfers"
                />
                <BenefitCard
                  icon={<FaUniversity className="text-purple-600" />}
                  title="Direct University Transfer"
                  desc="Funds sent directly to your university"
                />
                <BenefitCard
                  icon={<FaShieldAlt className="text-green-600" />}
                  title="No Collateral Required"
                  desc="Unsecured loans up to ৳1,000,000"
                />
                <BenefitCard
                  icon={<FaClock className="text-orange-600" />}
                  title="Quick Processing"
                  desc="Approval within 72 hours"
                />
                <BenefitCard
                  icon={<FaGraduationCap className="text-indigo-600" />}
                  title="Moratorium Period"
                  desc="Repayment starts after course completion"
                />
              </div>
            </div>

            {/* Loan Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📋 Loan Features
              </h2>
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <FeatureItem label="Maximum Loan Amount" value="৳1,000,000" />
                  <FeatureItem label="Minimum Loan Amount" value="৳200,000" />
                  <FeatureItem
                    label="Interest Rate"
                    value="8% - 14% per annum"
                  />
                  <FeatureItem label="Repayment Period" value="5 - 15 years" />
                  <FeatureItem
                    label="Processing Fee"
                    value="1.5% of loan amount"
                  />
                  <FeatureItem
                    label="Moratorium Period"
                    value="Until 6 months after graduation"
                  />
                  <FeatureItem
                    label="Available Countries"
                    value="USA, UK, Canada, Australia, Germany"
                  />
                  <FeatureItem
                    label="Pre-payment Charges"
                    value="No charges for early closure"
                  />
                </div>
              </div>
            </div>

            {/* Universities Covered */}
            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🏛️ Partner Universities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <UniversityBadge name="Harvard University" />
                <UniversityBadge name="Oxford University" />
                <UniversityBadge name="Cambridge" />
                <UniversityBadge name="MIT" />
                <UniversityBadge name="Stanford" />
                <UniversityBadge name="UCL" />
                <UniversityBadge name="University of Toronto" />
                <UniversityBadge name="University of Sydney" />
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
                  text="Apply with your university offer letter"
                />
                <StepItem
                  number="2"
                  text="Submit required documents (passport, visa, academic records)"
                />
                <StepItem
                  number="3"
                  text="Get loan approval and visa documentation"
                />
                <StepItem
                  number="4"
                  text="Transfer funds to your university and personal account"
                />
                <StepItem
                  number="5"
                  text="Start your course and focus on studies"
                />
                <StepItem
                  number="6"
                  text="Begin repayment after completing your course"
                />
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📄 Documents Required
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <DocumentItem text="Valid Passport" />
                <DocumentItem text="University Offer Letter" />
                <DocumentItem text="Visa Application Documents" />
                <DocumentItem text="Academic Transcripts" />
                <DocumentItem text="Financial Documents" />
                <DocumentItem text="IELTS/TOEFL Score (if applicable)" />
                <DocumentItem text="Work Experience (if required)" />
                <DocumentItem text="Co-signer Documents" />
              </ul>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>
                  • Loans are subject to university accreditation and visa
                  approval
                </li>
                <li>• Interest rate depends on the course and country</li>
                <li>
                  • Additional support for language tests and application fees
                  available
                </li>
                <li>• Flexible repayment options after graduation</li>
                <li>
                  • Contact our study abroad advisors for personalized guidance
                </li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-green-700 hover:to-teal-700">
              ✈️ Apply for Study Abroad Loan
            </button>
          </div>
        </div>
      </div>
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

function FeatureItem({ label, value }) {
  return (
    <div className="p-4 flex justify-between items-center">
      <span className="text-gray-600 font-medium">{label}</span>
      <span className="text-gray-800 font-bold">{value}</span>
    </div>
  );
}

function UniversityBadge({ name }) {
  return (
    <div className="bg-white p-3 rounded-xl text-center border border-gray-200 hover:shadow-md transition hover:border-teal-300">
      <p className="text-sm font-semibold text-gray-700">{name}</p>
    </div>
  );
}

function StepItem({ number, text }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition hover:border-green-200">
      <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
        {number}
      </div>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
}

function DocumentItem({ text }) {
  return (
    <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100">
      <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
      <span className="text-gray-700 text-sm">{text}</span>
    </li>
  );
}
