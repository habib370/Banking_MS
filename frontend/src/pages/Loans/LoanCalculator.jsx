import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalculator,
  FaChartLine,
  FaRupeeSign,
  FaWallet,
  FaClock,
  FaCheckCircle,
  FaPercent,
} from "react-icons/fa";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(24);

  const calculateEMI = () => {
    const P = loanAmount;
    const R = interestRate / 12 / 100;
    const N = tenure;
    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return EMI || 0;
  };

  const monthlyEMI = calculateEMI();
  const totalPayment = monthlyEMI * tenure;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition font-medium"
        >
          <FaArrowLeft /> Back to Dashboard
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaCalculator size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Loan EMI Calculator
                </h1>
                <p className="text-orange-200 mt-1">
                  Estimate your monthly student repayments
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaChartLine className="text-orange-600" /> Plan Your Finances
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                Use our free Loan EMI Calculator to estimate your monthly
                payments and plan your financial future effectively. Simply
                input your loan amount, interest rate, and repayment tenure to
                instantly see your EMI, total payment, and interest breakdown.
                Make informed decisions about your student loans with our
                comprehensive calculator.
              </p>
            </div>

            {/* Calculator */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left - Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Loan Amount (৳)
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="1000000"
                    step="5000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">৳5,000</span>
                    <span className="text-sm font-bold text-orange-600">
                      ৳{loanAmount.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">৳1,000,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Interest Rate (% per annum)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">5%</span>
                    <span className="text-sm font-bold text-orange-600">
                      {interestRate}%
                    </span>
                    <span className="text-xs text-gray-500">20%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Repayment Tenure (Months)
                  </label>
                  <input
                    type="range"
                    min="6"
                    max="60"
                    step="3"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">6 months</span>
                    <span className="text-sm font-bold text-orange-600">
                      {tenure} months
                    </span>
                    <span className="text-xs text-gray-500">60 months</span>
                  </div>
                </div>
              </div>

              {/* Right - Results */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📊 Results
                </h3>
                <div className="space-y-4">
                  <ResultCard
                    icon={<FaWallet />}
                    label="Monthly EMI"
                    value={`৳${monthlyEMI.toFixed(2)}`}
                    color="text-orange-600"
                  />
                  <ResultCard
                    icon={<FaRupeeSign />}
                    label="Total Payment"
                    value={`৳${totalPayment.toFixed(2)}`}
                    color="text-red-600"
                  />
                  <ResultCard
                    icon={<FaPercent />}
                    label="Total Interest"
                    value={`৳${totalInterest.toFixed(2)}`}
                    color="text-blue-600"
                  />
                  <div className="bg-white rounded-xl p-3 mt-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Principal</span>
                      <span className="font-semibold text-gray-700">
                        ৳{loanAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-500">Interest</span>
                      <span className="font-semibold text-gray-700">
                        ৳{totalInterest.toFixed(0)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div
                        className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full"
                        style={{
                          width: `${(loanAmount / totalPayment) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 text-center">
                      <span className="text-green-600 font-semibold">
                        {((loanAmount / totalPayment) * 100).toFixed(0)}%
                      </span>{" "}
                      Principal •
                      <span className="text-orange-600 font-semibold">
                        {" "}
                        {((totalInterest / totalPayment) * 100).toFixed(0)}%
                      </span>{" "}
                      Interest
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Amortization Preview */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <h3 className="font-bold text-gray-700">
                  📋 Amortization Schedule Preview
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-600">
                        Month
                      </th>
                      <th className="px-4 py-2 text-right text-gray-600">
                        Payment
                      </th>
                      <th className="px-4 py-2 text-right text-gray-600">
                        Principal
                      </th>
                      <th className="px-4 py-2 text-right text-gray-600">
                        Interest
                      </th>
                      <th className="px-4 py-2 text-right text-gray-600">
                        Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((month) => (
                      <tr
                        key={month}
                        className="border-t border-gray-100 hover:bg-gray-50"
                      >
                        <td className="px-4 py-2 text-gray-600">{month}</td>
                        <td className="px-4 py-2 text-right font-semibold text-gray-800">
                          ৳{monthlyEMI.toFixed(2)}
                        </td>
                        <td className="px-4 py-2 text-right text-green-600">
                          ৳
                          {(
                            monthlyEMI -
                            loanAmount * (interestRate / 12 / 100)
                          ).toFixed(2)}
                        </td>
                        <td className="px-4 py-2 text-right text-red-600">
                          ৳{(loanAmount * (interestRate / 12 / 100)).toFixed(2)}
                        </td>
                        <td className="px-4 py-2 text-right text-gray-700">
                          ৳{(totalPayment - monthlyEMI * month).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td
                        colSpan="5"
                        className="px-4 py-2 text-center text-sm text-gray-500"
                      >
                        Showing first 5 months of {tenure} months total
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaCheckCircle className="text-yellow-600" /> Disclaimer
              </h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• This is an estimate based on the inputs provided</li>
                <li>• Actual EMI may vary based on bank policies</li>
                <li>
                  • Additional charges like processing fees are not included
                </li>
                <li>• Consult your bank for final loan terms</li>
              </ul>
            </div>

            <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              📊 Apply for Loan Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultCard({ icon, label, value, color }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-2xl text-orange-500">{icon}</span>
        <span className="text-gray-600 font-medium">{label}</span>
      </div>
      <span className={`text-2xl font-bold ${color}`}>{value}</span>
    </div>
  );
}
