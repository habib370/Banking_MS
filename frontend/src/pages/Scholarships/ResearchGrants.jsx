import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaFlask,
  FaMicroscope,
  FaBookOpen,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaWallet,
  FaUsers,
  FaFileAlt,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

export default function ResearchGrants() {
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
          <div className="bg-gradient-to-r from-teal-700 to-cyan-700 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaMicroscope size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Research & Thesis Grants
                </h1>
                <p className="text-teal-200 mt-1">
                  Funding for university research projects
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaLightbulb className="text-teal-600" /> About Research Grants
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                EliteBank's Research & Thesis Grants program supports students
                pursuing groundbreaking research in various fields. From
                undergraduate research projects to doctoral theses, we provide
                financial support to help you bring your ideas to life. We
                believe in the power of research to drive innovation and solve
                real-world problems.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                Our grants cover research materials, travel expenses,
                publication fees, and even a monthly stipend for full-time
                researchers. We partner with leading universities and research
                institutions to ensure your work gets the recognition it
                deserves.
              </p>
            </div>

            {/* Grant Categories */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🔬 Grant Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <GrantCategoryCard
                  icon={<FaFlask />}
                  title="STEM Research"
                  desc="Science, Technology, Engineering, Mathematics"
                  amount="Up to ৳200,000"
                />
                <GrantCategoryCard
                  icon={<FaBookOpen />}
                  title="Arts & Humanities"
                  desc="Literature, History, Philosophy, Arts"
                  amount="Up to ৳100,000"
                />
                <GrantCategoryCard
                  icon={<FaUsers />}
                  title="Social Sciences"
                  desc="Sociology, Psychology, Economics, Politics"
                  amount="Up to ৳150,000"
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
                  title="Full Funding"
                  desc="Complete coverage of research expenses"
                />
                <BenefitCard
                  icon={<FaUsers className="text-blue-600" />}
                  title="Research Mentorship"
                  desc="Access to experienced researchers"
                />
                <BenefitCard
                  icon={<FaFileAlt className="text-purple-600" />}
                  title="Publication Support"
                  desc="Help with journal submissions"
                />
                <BenefitCard
                  icon={<FaChartLine className="text-orange-600" />}
                  title="Conference Attendance"
                  desc="International conference sponsorship"
                />
                <BenefitCard
                  icon={<FaClock className="text-indigo-600" />}
                  title="Flexible Timeline"
                  desc="Adaptable research schedule"
                />
                <BenefitCard
                  icon={<FaShieldAlt className="text-green-600" />}
                  title="Intellectual Property"
                  desc="IP and patent support"
                />
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✅ Eligibility Criteria
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <EligibilityItem text="Enrolled in a recognized university research program" />
                <EligibilityItem text="Active EliteBank student account" />
                <EligibilityItem text="Approved research proposal" />
                <EligibilityItem text="Minimum CGPA of 3.0 on a 4.0 scale" />
                <EligibilityItem text="Faculty advisor or supervisor" />
                <EligibilityItem text="Commitment to full-time research" />
                <EligibilityItem text="Research ethics approval (if required)" />
                <EligibilityItem text="Previous research experience (preferred)" />
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
                  text="Navigate to Scholarships & Grants &gt; Research Grants"
                />
                <StepItem number="3" text="Upload your research proposal" />
                <StepItem
                  number="4"
                  text="Submit faculty advisor endorsement"
                />
                <StepItem number="5" text="Provide budget breakdown" />
                <StepItem number="6" text="Submit application for review" />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>
                  • Grants are awarded based on research merit and feasibility
                </li>
                <li>• Regular progress reports are required</li>
                <li>• Research findings must be published or presented</li>
                <li>• Fund recipients become part of our research network</li>
                <li>
                  • Flexibility available for exceptional research proposals
                </li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-teal-700 hover:to-cyan-700">
              🔬 Apply for Research Grant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function GrantCategoryCard({ icon, title, desc, amount }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-lg transition hover:border-teal-300">
      <div className="text-4xl text-teal-600 mb-2">{icon}</div>
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
      <p className="text-sm font-bold text-teal-600 mt-2">{amount}</p>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-teal-200 group">
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
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition hover:border-teal-200">
      <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
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
