import { useState } from "react";
import { FaTelegram, FaPhone, FaLock, FaArrowLeft } from "react-icons/fa";

const API_BASE = "http://127.0.0.1:8000/api";

export default function AuthForm() {
  const [mode, setMode] = useState("login"); // login | register | forgot | verify
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const phoneWithCode = `+855${phone}`;

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // Helper to parse JSON safely
  async function parseJSONSafe(response) {
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch {
      // If response is not JSON, return text for debugging
      return { message: text || "Unknown error" };
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers,
        body: JSON.stringify({ phone: phoneWithCode, password }),
      });

      const data = await parseJSONSafe(res);
      if (res.ok) {
        alert("Login successful");
        console.log(data);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Login error occurred.");
    }
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert("Passwords do not match");
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          phone: phoneWithCode,
          password,
          first_name: firstName,
          last_name: lastName,
        }),
      });

      const data = await parseJSONSafe(res);
      if (res.ok) {
        alert("Registration successful!");
        setMode("login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      alert("Error during registration.");
    }
    setLoading(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/forgot-password`, {
        method: "POST",
        headers,
        body: JSON.stringify({ phone: phoneWithCode }),
      });
      const data = await parseJSONSafe(res);
      if (res.ok) {
        alert("Verification code sent!");
        setCodeSent(true);
        setMode("verify");
      } else {
        alert(data.message || "Failed to send code");
      }
    } catch (err) {
      alert("Error sending code.");
    }
    setLoading(false);
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/verify-code`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          phone: phoneWithCode,
          code: verificationCode,
        }),
      });
      const data = await parseJSONSafe(res);
      if (res.ok) {
        alert("Code verified! You may now reset your password.");
      } else {
        alert(data.message || "Invalid code");
      }
    } catch (err) {
      alert("Verification failed.");
    }
    setLoading(false);
  };

  const handleTelegramLogin = () => {
    window.open(`${API_BASE}/telegram-login`, "_blank");
  };

  const renderPhoneInput = () => (
    <div>
      <label className="block text-sm mb-1 text-gray-700">Phone Number</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          +855
        </div>
        <div className="absolute inset-y-0 left-12 flex items-center pl-3 pointer-events-none">
          <FaPhone className="text-gray-400" />
        </div>
        <input
          type="tel"
          required
          pattern="[1-9][0-9]{7,8}"
          className="pl-24 pr-3 py-2 w-full border rounded-md"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f8f9fa]">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-[#2f4f4f]">
            {mode === "register"
              ? "Create Account"
              : mode === "forgot"
              ? "Forgot Password"
              : mode === "verify"
              ? "Verify Code"
              : "Welcome Back"}
          </h2>
          <p className="text-gray-500">
            {mode === "register"
              ? "Start your journey"
              : mode === "login"
              ? "Sign in to your account"
              : "We’ll send a code to verify your number"}
          </p>
        </div>

        <form
          className="space-y-4"
          onSubmit={
            mode === "register"
              ? handleRegister
              : mode === "forgot"
              ? handleForgotPassword
              : mode === "verify"
              ? handleVerifyCode
              : handleLogin
          }
        >
          {renderPhoneInput()}

          {(mode === "login" || mode === "register") && (
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="password"
                  required
                  className="pl-10 pr-3 py-2 w-full border rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={
                    mode === "login" ? "Your password" : "Create password"
                  }
                />
              </div>
            </div>
          )}

          {mode === "register" && (
            <>
              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full border px-4 py-2 rounded-md"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border px-4 py-2 rounded-md"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border px-4 py-2 rounded-md"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </>
          )}

          {mode === "verify" && (
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Verification Code
              </label>
              <input
                type="text"
                maxLength={6}
                required
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Enter code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2f4f4f] text-white py-2 rounded-md font-bold hover:bg-[#3b5f5f]"
          >
            {loading
              ? "Processing..."
              : mode === "login"
              ? "Login"
              : mode === "register"
              ? "Register"
              : mode === "forgot"
              ? "Send Code"
              : "Verify Code"}
          </button>
        </form>

        <div className="text-sm text-center mt-4 text-gray-600">
          {mode === "login" && (
            <>
              <p>
                Don't have an account?{" "}
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => setMode("register")}
                >
                  Register
                </button>
              </p>
              <p>
                <button
                  className="text-blue-600 hover:underline mt-1"
                  onClick={() => setMode("forgot")}
                >
                  Forgot password?
                </button>
              </p>
            </>
          )}

          {(mode === "register" || mode === "forgot" || mode === "verify") && (
            <p className="mt-2">
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setMode("login")}
              >
                <FaArrowLeft className="inline mr-1" />
                Back to Login
              </button>
            </p>
          )}

          <button
            className="mt-4 flex items-center justify-center w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100"
            onClick={handleTelegramLogin}
          >
            <FaTelegram className="mr-2 text-blue-500" />
            Login with Telegram
          </button>
        </div>
      </div>
    </div>
  );
}
