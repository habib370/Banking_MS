import React from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowLeft, FaGraduationCap, FaClock, FaShieldAlt, 
  FaCheckCircle, FaPercent, FaWallet, FaBuilding,
  FaChartLine, FaHandHoldingUsd
} from "react-icons/fa";

export default function PostGrad() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link to="/home" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition font-medium">
          <FaArrowLeft /> Back to Dashboard
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-700 to-purple-800 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaGraduationCap size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Post-Grad Repayment</h1>
                <p className="text-indigo-200 mt-1">Deferred repayment starting after graduation</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaHandHoldingUsd className="text-indigo-600" /> About This Program
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The Post-Grad Repayment program offers graduates a flexible and stress-free way to manage 
                their student loan repayments after completing their education. With a deferred repayment 
                period of 6-12 months after graduation, you can focus on finding the right job and settling 
                into your career without immediate financial pressure.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                We offer multiple repayment plans tailored to your income level, interest-only payment options, 
                and even the ability to pause payments during unexpected financial challenges. Our goal is to 
                make your transition from student to professional smooth and financially manageable.
              </p>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">✨ Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BenefitCard 
                  icon={<FaClock className="text-green-600" />}
                  title="Deferred Payments"
                  desc="6-12 months grace period after graduation"
                />
                <BenefitCard 
                  icon={<FaPercent className="text-blue-600" />}
                  title="Income-Based Repayment"
                  desc="Pay based on your current income level"
                />
                <BenefitCard 
                  icon={<FaShieldAlt className="text-purple-600" />}
                  title="Payment Protection"
                  desc="Pause payments during financial hardship"
                />
                <BenefitCard 
                  icon={<FaCheckCircle className="text-green-600" />}
                  title="No Pre-payment Penalty"
                  desc="Pay off your loan early without fees"
                />
                <BenefitCard 
                  icon={<FaWallet className="text-orange-600" />}
                  title="Interest Subsidy"
                  desc="Government interest subsidy during moratorium"
                />
                <BenefitCard 
                  icon={<FaChartLine className="text-indigo-600" />}
                  title="Financial Counseling"
                  desc="Free financial planning support"
                />
              </div>
            </div>

            {/* Repayment Options */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Repayment Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <OptionCard 
                  title="Standard Plan"
                  desc="Fixed monthly payments over 10-15 years"
                  bestFor="Best for stable income"
                />
                <OptionCard 
                  title="Graduated Plan"
                  desc="Payments increase every 2 years"
                  bestFor="Best for career growth"
                />
                <OptionCard 
                  title="Income-Based Plan"
                  desc="Payment adjusted to your income"
                  bestFor="Best for flexible income"
                />
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 How It Works</h2>
              <div className="space-y-3">
                <StepItem number="1" text="Apply for Post-Grad Repayment during your final semester" />
                <StepItem number="2" text="Submit graduation proof and job details" />
                <StepItem number="3" text="Choose your repayment plan" />
                <StepItem number="4" text="Enjoy a 6-12 month moratorium period" />
                <StepItem number="5" text="Start repayments based on your selected plan" />
                <StepItem number="6" text="Get ongoing support and plan adjustments" />
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Eligibility Criteria</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <EligibilityItem text="Recent graduate (within 6 months)" />
                <EligibilityItem text="Valid EliteBank student loan account" />
                <EligibilityItem text="Successfully completed degree program" />
                <EligibilityItem text="Good academic standing" />
                <EligibilityItem text="No default on previous payments" />
                <EligibilityItem text="Registered with relevant professional body (if applicable)" />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Interest continues to accrue during the moratorium period</li>
                <li>• Income-based plans require annual income verification</li>
                <li>• Late payments may affect your credit score</li>
                <li>• Contact support for plan adjustments</li>
                <li>• International students have additional options</li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-indigo-700 hover:to-purple-700">
              🎓 Apply for Post-Grad Repayment
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
        <div className="text-2xl mt-1 group-hover:scale-110 transition-transform">{icon}</div>
        <div>
          <h3 className="font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function OptionCard({ title, desc, bestFor }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-lg transition hover:border-indigo-300">
      <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
      <div className="mt-3 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full inline-block">
        {bestFor}
      </div>
    </div>
  );
}

function StepItem({ number, text }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition hover:border-indigo-200">
      <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
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