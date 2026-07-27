import React, { useState } from "react";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    nid: "",
    dateOfBirth: "",
    gender: "Male",
    address: "",
    occupation: "",
    accountType: "Savings",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Sending clean data to backend:", formData);

    const response = await register(formData);
    console.log("Response back from backend:", response);

    if (response.ok) {
      const accountInfo = response.data;
      alert(
        `Registration Successful!\n\n` +
        `Account Number: ${accountInfo.accountNumber || "Generated"}\n` +
        `Temporary Secure PIN: ${accountInfo.pinNumber || "Generated"}\n\n` +
        `Please note down these credentials to Log In.`
      );
      navigate("/login");
    } else {
      alert(response.message || "Registration failed.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-700 p-6 text-white text-center">
          <h2 className="text-2xl font-bold">Open Bank Account</h2>
          <p className="opacity-80 text-sm">Provide required information</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                name="fullName"
                placeholder="e.g. turjoy banik"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="e.g. name@student.cuet.ac.bd"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                name="phoneNumber"
                placeholder="e.g. 01332793886"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">NID Number</label>
              <input
                name="nid"
                placeholder="e.g. 1095123456789"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select
                name="gender"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Occupation</label>
              <input
                name="occupation"
                placeholder="e.g. Software Engineer"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Account Type</label>
              <select
                name="accountType"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.accountType}
              >
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
                <option value="Salary">Salary</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              name="address"
              placeholder="e.g. Cumilla, Bangladesh"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Create Account"}
          </button>
        </form>

        <div className="text-center text-sm pb-6">
          <span className="text-gray-500">Already have an account? </span>
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};