import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaAward,
  FaTrophy,
  FaStar,
  FaMedal,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaWallet,
  FaGraduationCap,
  FaUsers,
  FaBook,
  FaChartLine,
} from "react-icons/fa";

export default function MeritScholarship() {
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
          <div className="bg-gradient-to-r from-yellow-600 to-amber-700 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaTrophy size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Merit Scholarship Schemes
                </h1>
                <p className="text-yellow-200 mt-1">
                  Bank-sponsored academic rewards for top performers
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaAward className="text-yellow-600" /> About Merit Scholarships
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                EliteBank's Merit Scholarship Program recognizes and rewards
                academic excellence among our student account holders. We
                believe in celebrating outstanding achievements and supporting
                bright minds in their educational journey. Scholarships are
                awarded based on academic performance, extracurricular
                involvement, and leadership potential.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                From full tuition coverage to monthly stipends, our merit
                scholarships are designed to reduce financial burden and
                motivate students to achieve their full potential. We offer
                multiple scholarship tiers to accommodate different academic
                levels and achievements.
              </p>
            </div>

            {/* Scholarship Tiers */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🏆 Scholarship Tiers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TierCard
                  icon={<FaStar className="text-yellow-500" />}
                  title="Gold Scholar"
                  amount="৳200,000"
                  benefits="Full tuition + Monthly stipend"
                  requirement="CGPA 3.8+"
                />
                <TierCard
                  icon={<FaMedal className="text-blue-500" />}
                  title="Silver Scholar"
                  amount="৳100,000"
                  benefits="50% tuition + Book allowance"
                  requirement="CGPA 3.5+"
                />
                <TierCard
                  icon={<FaAward className="text-bronze-500" />}
                  title="Bronze Scholar"
                  amount="৳50,000"
                  benefits="25% tuition + Academic resources"
                  requirement="CGPA 3.0+"
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
                  icon={<FaWallet className="text-green-600" />}
                  title="Financial Support"
                  desc="Tuition fee coverage and monthly stipends"
                />
                <BenefitCard
                  icon={<FaGraduationCap className="text-blue-600" />}
                  title="Academic Recognition"
                  desc="Official certification and recognition"
                />
                <BenefitCard
                  icon={<FaUsers className="text-purple-600" />}
                  title="Networking Opportunities"
                  desc="Connect with fellow scholars and mentors"
                />
                <BenefitCard
                  icon={<FaBook className="text-orange-600" />}
                  title="Resource Access"
                  desc="Premium academic resources and tools"
                />
                <BenefitCard
                  icon={<FaChartLine className="text-indigo-600" />}
                  title="Career Development"
                  desc="Internship and career guidance"
                />
                <BenefitCard
                  icon={<FaShieldAlt className="text-green-600" />}
                  title="Renewable Award"
                  desc="Scholarship renews each semester"
                />
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✅ Eligibility Criteria
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <EligibilityItem text="Enrolled in a recognized university or college" />
                <EligibilityItem text="Minimum CGPA of 3.0 on a 4.0 scale" />
                <EligibilityItem text="Active EliteBank student account for 6+ months" />
                <EligibilityItem text="Demonstrated leadership in extracurricular activities" />
                <EligibilityItem text="No academic or disciplinary issues" />
                <EligibilityItem text="Submission of required academic documents" />
                <EligibilityItem text="Letter of recommendation from a faculty member" />
                <EligibilityItem text="Personal statement of academic goals" />
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
                  text="Navigate to Scholarships & Grants &gt; Merit Scholarship"
                />
                <StepItem
                  number="3"
                  text="Fill in the application form with academic details"
                />
                <StepItem
                  number="4"
                  text="Upload required documents (transcripts, recommendation letter)"
                />
                <StepItem
                  number="5"
                  text="Write a personal statement (500 words)"
                />
                <StepItem
                  number="6"
                  text="Submit the application before the deadline"
                />
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📅 Important Dates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl text-center">
                  <p className="text-gray-500 text-sm">Application Opens</p>
                  <p className="text-xl font-bold text-blue-600">January 15</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <p className="text-gray-500 text-sm">Application Deadline</p>
                  <p className="text-xl font-bold text-red-600">March 15</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <p className="text-gray-500 text-sm">Results Announced</p>
                  <p className="text-xl font-bold text-green-600">April 30</p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>
                  • Scholarships are awarded based on merit and availability
                </li>
                <li>• Maintain the required CGPA to renew the scholarship</li>
                <li>
                  • Recipients may be required to participate in mentorship
                  programs
                </li>
                <li>
                  • Scholarship funds are disbursed directly to the university
                </li>
                <li>
                  • Multiple scholarships can be combined (subject to terms)
                </li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-yellow-700 hover:to-amber-700">
              🏆 Apply for Merit Scholarship
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TierCard({ icon, title, amount, benefits, requirement }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-lg transition hover:border-yellow-300">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-bold text-gray-800 text-xl">{title}</h3>
      <p className="text-2xl font-bold text-yellow-600 my-2">{amount}</p>
      <p className="text-sm text-gray-600">{benefits}</p>
      <p className="text-xs text-gray-400 mt-2">Requirement: {requirement}</p>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-yellow-200 group">
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
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition hover:border-yellow-200">
      <div className="w-8 h-8 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
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
