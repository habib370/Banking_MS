import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaSearch,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaHourglassHalf,
  FaShieldAlt,
  FaFileAlt,
  FaUserCheck,
  FaEnvelope,
} from "react-icons/fa";

export default function GrantStatus() {
  const [applicationId, setApplicationId] = useState("");
  const [searched, setSearched] = useState(false);

  // Sample status data (would come from API in real app)
  const sampleStatus = {
    id: "GRANT-2024-001",
    status: "Under Review",
    progress: 65,
    submittedDate: "January 20, 2024",
    lastUpdated: "January 28, 2024",
    nextStep: "Document Verification",
    estimatedDecision: "February 15, 2024",
    steps: [
      {
        step: "Application Submitted",
        completed: true,
        date: "January 20, 2024",
      },
      { step: "Preliminary Review", completed: true, date: "January 22, 2024" },
      { step: "Document Verification", completed: false, date: "In Progress" },
      { step: "Committee Review", completed: false, date: "Pending" },
      { step: "Final Decision", completed: false, date: "Pending" },
    ],
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (applicationId.trim()) {
      setSearched(true);
    }
  };

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
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 md:p-10 text-white">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <FaSearch size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Application Status Tracker
                </h1>
                <p className="text-blue-200 mt-1">
                  Check real-time status of your applied aid
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Description */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaFileAlt className="text-blue-600" /> Track Your Application
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                Enter your application ID to track the real-time status of your
                scholarship, grant, or financial aid application. Our status
                tracker provides detailed information about each stage of the
                review process, including estimated timelines and next steps.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mt-3">
                You'll receive email notifications for every update, but you can
                always check here for the most current status. Keep your
                application ID handy for quick access.
              </p>
            </div>

            {/* Search Box */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <form
                onSubmit={handleSearch}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Application ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., GRANT-2024-001"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={applicationId}
                    onChange={(e) => setApplicationId(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <FaSearch className="inline mr-2" /> Track Application
                  </button>
                </div>
              </form>
            </div>

            {/* Status Display */}
            {searched && (
              <div className="space-y-6 animate-fade-in">
                {/* Status Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">Application ID</p>
                      <p className="text-xl font-bold text-gray-800">
                        {sampleStatus.id}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">Current Status</p>
                      <StatusBadge status={sampleStatus.status} />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-semibold">
                        {sampleStatus.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${sampleStatus.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-gray-500 text-xs">Submitted</p>
                      <p className="text-sm font-medium">
                        {sampleStatus.submittedDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Last Updated</p>
                      <p className="text-sm font-medium">
                        {sampleStatus.lastUpdated}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">
                        Estimated Decision
                      </p>
                      <p className="text-sm font-medium">
                        {sampleStatus.estimatedDecision}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4">
                    📋 Application Timeline
                  </h3>
                  <div className="relative">
                    {sampleStatus.steps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 mb-4 last:mb-0"
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              step.completed
                                ? "bg-green-500 text-white"
                                : step.date === "In Progress"
                                  ? "bg-blue-500 text-white animate-pulse"
                                  : "bg-gray-200 text-gray-500"
                            }`}
                          >
                            {step.completed ? <FaCheckCircle /> : index + 1}
                          </div>
                          {index < sampleStatus.steps.length - 1 && (
                            <div
                              className={`w-0.5 h-8 ${
                                step.completed ? "bg-green-500" : "bg-gray-200"
                              }`}
                            ></div>
                          )}
                        </div>
                        <div className="flex-1 pt-1">
                          <p
                            className={`font-medium ${
                              step.completed ? "text-gray-800" : "text-gray-500"
                            }`}
                          >
                            {step.step}
                          </p>
                          <p className="text-xs text-gray-400">{step.date}</p>
                        </div>
                        {step.completed && (
                          <FaCheckCircle className="text-green-500 mt-1" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="font-bold text-gray-800 mb-2">
                    📌 Next Steps
                  </h3>
                  <p className="text-gray-700">
                    Your application is currently:{" "}
                    <strong>{sampleStatus.nextStep}</strong>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    You will receive an email notification when your application
                    moves to the next stage.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                    <FaEnvelope className="inline mr-2" /> Contact Support
                  </button>
                  <button className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition">
                    <FaFileAlt className="inline mr-2" /> Download Status
                  </button>
                </div>
              </div>
            )}

            {/* No Results Message */}
            {searched && !applicationId && (
              <div className="text-center py-8">
                <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-700">
                  No Application Found
                </h3>
                <p className="text-gray-500 mt-2">
                  Please check your application ID and try again.
                </p>
              </div>
            )}

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-yellow-600" /> Important Notes
              </h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Status updates are in real-time</li>
                <li>• You'll receive email notifications for each update</li>
                <li>• Contact support for urgent inquiries</li>
                <li>• Keep your application ID secure</li>
                <li>• Status may take 24-48 hours to update</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

function StatusBadge({ status }) {
  const getStatusStyles = () => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "Approved":
        return <FaCheckCircle className="inline mr-1" />;
      case "Under Review":
        return <FaHourglassHalf className="inline mr-1" />;
      case "Rejected":
        return <FaTimesCircle className="inline mr-1" />;
      default:
        return <FaClock className="inline mr-1" />;
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyles()}`}
    >
      {getStatusIcon()} {status}
    </span>
  );
}
