"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Button from "./Button";
import { ManagerLogin_url } from "@/lib/apiRoutes";

export default function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${ManagerLogin_url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userId, // API ka "username" key
          password: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid credentials");
        setLoading(false);
        return;
      }
      // Token ya data save karo
      localStorage.setItem("manager_token", data.token);
      localStorage.setItem("manager_data", JSON.stringify(data));
      // OTP page par bhej do
      router.push("/manager/otpform");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-1">
      <div className="border p-7 border-gray-400 rounded-[2rem] w-full max-w-md">
        <h1 className="text-center text-2xl font-bold mb-2">
          Welcome to Manager Portal
        </h1>
        <p className="text-center text-gray-500 mb-6">To Access Your Account</p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          {/* User ID */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">User ID</label>
            <input
              type="text"
              placeholder="Enter User Id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <div className="text-right mt-1">
              <a href="#" className="text-red-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Login Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md w-full"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// "email":"umesh.kumar@example.com",
//     "password":"test@1234"
// "email":"umesh.kumar@example.com",
//     "password":"test@1234"