import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaLaptop,
  FaMobile,
  FaTablet,
  FaHeadphones,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaPercent,
  FaWallet,
  FaShoppingCart,
  FaCreditCard,
  FaGift,
  FaStar,
} from "react-icons/fa";
// FaCalculator doesn't exist in react-icons/fa
// Use this alternative or remove it

export default function TechEMI() {
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
                <FaLaptop size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Laptop & Tech Financing
                </h1>
                <p className="text-purple-200 mt-1">
                  0% EMI on laptops, tablets, and lab equipment
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaShoppingCart className="text-purple-600" /> About This
                Financing
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The Laptop & Tech Financing program offers students an
                affordable way to purchase essential technology for their
                studies. With our exclusive 0% EMI offer on laptops, tablets,
                and lab equipment, you can get the tech you need without
                financial burden. Partnered with leading brands like Apple,
                Dell, HP, and Lenovo, we provide competitive pricing and
                flexible payment plans.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                Whether you need a high-performance laptop for programming, a
                tablet for note-taking, or specialized lab equipment, our tech
                financing covers it all. Choose repayment periods from 3 to 24
                months with zero interest charges.
              </p>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✨ Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BenefitCard
                  icon={<FaPercent className="text-green-600" />}
                  title="0% EMI Available"
                  desc="No interest charges on select tech products"
                />
                <BenefitCard
                  icon={<FaClock className="text-blue-600" />}
                  title="Flexible Terms"
                  desc="Choose 3, 6, 12, or 24 months repayment"
                />
                <BenefitCard
                  icon={<FaShoppingCart className="text-purple-600" />}
                  title="Top Brands"
                  desc="Apple, Dell, HP, Lenovo, and more"
                />
                <BenefitCard
                  icon={<FaWallet className="text-orange-600" />}
                  title="No Down Payment"
                  desc="Start with zero down payment options"
                />
                <BenefitCard
                  icon={<FaGift className="text-red-600" />}
                  title="Student Discounts"
                  desc="Additional 10% off on select products"
                />
                <BenefitCard
                  icon={<FaShieldAlt className="text-green-600" />}
                  title="Extended Warranty"
                  desc="2-year extended warranty included"
                />
              </div>
            </div>

            {/* Product Categories */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🛒 Product Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <CategoryCard
                  icon={<FaLaptop />}
                  title="Laptops"
                  desc="From ৳30,000"
                />
                <CategoryCard
                  icon={<FaTablet />}
                  title="Tablets"
                  desc="From ৳15,000"
                />
                <CategoryCard
                  icon={<FaMobile />}
                  title="Smartphones"
                  desc="From ৳20,000"
                />
                <CategoryCard
                  icon={<FaHeadphones />}
                  title="Accessories"
                  desc="From ৳5,000"
                />
              </div>
            </div>

            {/* EMI Calculator Preview - REMOVED FaCalculator */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📊</span> EMI Calculator
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-gray-500 text-sm">Product Price</p>
                  <p className="text-2xl font-bold text-gray-800">৳85,000</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-gray-500 text-sm">Monthly EMI</p>
                  <p className="text-2xl font-bold text-green-600">৳3,542</p>
                  <p className="text-xs text-gray-400">
                    24 months • 0% interest
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-gray-500 text-sm">Total Payment</p>
                  <p className="text-2xl font-bold text-gray-800">৳85,000</p>
                  <p className="text-xs text-green-600">
                    Save ৳12,000 vs market
                  </p>
                </div>
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
                  text="Browse our tech catalog and select your product"
                />
                <StepItem
                  number="2"
                  text="Choose your preferred repayment term"
                />
                <StepItem
                  number="3"
                  text="Upload a valid student ID for verification"
                />
                <StepItem
                  number="4"
                  text="Complete the application and e-sign agreement"
                />
                <StepItem
                  number="5"
                  text="Get approval and receive your product within 2-3 days"
                />
                <StepItem number="6" text="Start your monthly EMI payments" />
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✅ Eligibility Criteria
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <EligibilityItem text="Enrolled in a recognized university" />
                <EligibilityItem text="Minimum age: 18 years" />
                <EligibilityItem text="Valid student ID card" />
                <EligibilityItem text="Active EliteBank account" />
                <EligibilityItem text="Good credit standing" />
                <EligibilityItem text="Minimum monthly income: ৳15,000 (for co-signer)" />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• 0% EMI available on select products only</li>
                <li>• Credit limit depends on student's academic record</li>
                <li>
                  • Products can be returned within 7 days (conditions apply)
                </li>
                <li>• Late payment may attract a fee of 2% per month</li>
                <li>• Complete payment closure is allowed anytime</li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-purple-700 hover:to-pink-700">
              💻 Apply for Tech Financing
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

function CategoryCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-all hover:border-purple-300 group">
      <div className="text-4xl text-purple-600 mb-2 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-500 mt-1">{desc}</p>
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

function EligibilityItem({ text }) {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-xl">
      <FaCheckCircle className="text-green-500 text-sm" />
      <span className="text-gray-700 text-sm">{text}</span>
    </div>
  );
}
