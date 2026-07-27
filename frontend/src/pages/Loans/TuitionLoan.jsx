import React from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowLeft, FaHandHoldingUsd, FaUniversity, FaCalculator, 
  FaShieldAlt, FaClock, FaCheckCircle, FaPercent, FaWallet,
  FaChartLine, FaBuilding, FaGraduationCap
} from "react-icons/fa";

export default function TuitionLoan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link to="/home" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition font-medium">
          <FaArrowLeft /> Back to Dashboard
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaHandHoldingUsd size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Tuition Assistance Loan</h1>
                <p className="text-blue-200 mt-1">Low-interest loans designed for your semester fees</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaUniversity className="text-blue-600" /> About This Loan
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The Tuition Assistance Loan is specially designed for students who need financial support 
                to pay their semester fees. With competitive interest rates starting from just 7% per annum, 
                flexible repayment options, and a simple application process, we make education accessible 
                to every deserving student.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                This loan covers full semester tuition fees, including any additional charges like lab fees, 
                exam fees, and library dues. You can apply online through your EliteBank student account and 
                receive approval within 24-48 hours.
              </p>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">✨ Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BenefitCard 
                  icon={<FaPercent className="text-green-600" />}
                  title="Low Interest Rate"
                  desc="Starting from 7% per annum, significantly lower than standard education loans"
                />
                <BenefitCard 
                  icon={<FaClock className="text-blue-600" />}
                  title="Flexible Tenure"
                  desc="Choose repayment periods from 12 to 48 months based on your comfort"
                />
                <BenefitCard 
                  icon={<FaShieldAlt className="text-purple-600" />}
                  title="No Collateral"
                  desc="Zero collateral required for loans up to ৳500,000"
                />
                <BenefitCard 
                  icon={<FaCheckCircle className="text-green-600" />}
                  title="Quick Approval"
                  desc="Get approval within 24-48 hours after application submission"
                />
                <BenefitCard 
                  icon={<FaWallet className="text-orange-600" />}
                  title="Direct Disbursement"
                  desc="Funds directly sent to your university's account"
                />
                <BenefitCard 
                  icon={<FaGraduationCap className="text-indigo-600" />}
                  title="No Payment During Study"
                  desc="Interest-only payments during your academic period"
                />
              </div>
            </div>

            {/* Loan Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Loan Features</h2>
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <FeatureItem label="Maximum Loan Amount" value="৳500,000" />
                  <FeatureItem label="Minimum Loan Amount" value="৳50,000" />
                  <FeatureItem label="Interest Rate" value="7% - 12% per annum" />
                  <FeatureItem label="Repayment Period" value="12 - 48 months" />
                  <FeatureItem label="Processing Fee" value="1% of loan amount" />
                  <FeatureItem label="Late Payment Fee" value="2% per month" />
                  <FeatureItem label="Moratorium Period" value="6 months after graduation" />
                  <FeatureItem label="Pre-payment Charges" value="No charges for early closure" />
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Eligibility Criteria</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <EligibilityItem text="Enrolled in a recognized university or college" />
                <EligibilityItem text="Minimum GPA of 2.5 in last academic year" />
                <EligibilityItem text="Valid student ID and university enrollment letter" />
                <EligibilityItem text="Active EliteBank student account" />
                <EligibilityItem text="No existing default on any loan" />
                <EligibilityItem text="Co-signer required for loans above ৳200,000" />
              </div>
            </div>

            {/* How to Apply */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 How to Apply</h2>
              <div className="space-y-3">
                <StepItem number="1" text="Log in to your EliteBank student account" />
                <StepItem number="2" text="Navigate to Loans &gt; Tuition Assistance Loan" />
                <StepItem number="3" text="Fill in your university details and semester information" />
                <StepItem number="4" text="Upload required documents (ID, enrollment letter, previous transcripts)" />
                <StepItem number="5" text="Submit the application and wait for approval" />
                <StepItem number="6" text="Accept the loan offer and complete the agreement" />
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📄 Documents Required</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <DocumentItem text="Valid National ID or Passport" />
                <DocumentItem text="University Enrollment Letter" />
                <DocumentItem text="Previous Semester Transcript" />
                <DocumentItem text="2 Passport-size Photographs" />
                <DocumentItem text="Co-signer's ID (if applicable)" />
                <DocumentItem text="Bank Account Statement (last 3 months)" />
              </ul>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• All loans are subject to credit assessment and approval</li>
                <li>• Interest rate is determined based on academic record</li>
                <li>• Early repayment is encouraged with zero penalty</li>
                <li>• Late payments may affect your credit score</li>
                <li>• Contact support for hardship assistance</li>
              </ul>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-indigo-700">
              Apply for Tuition Loan Now
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
        <div className="text-2xl mt-1 group-hover:scale-110 transition-transform">{icon}</div>
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

function EligibilityItem({ text }) {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-xl">
      <FaCheckCircle className="text-green-500 text-sm" />
      <span className="text-gray-700 text-sm">{text}</span>
    </div>
  );
}

function StepItem({ number, text }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition hover:border-blue-200">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
        {number}
      </div>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
}

function DocumentItem({ text }) {
  return (
    <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100">
      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
      <span className="text-gray-700 text-sm">{text}</span>
    </li>
  );
}