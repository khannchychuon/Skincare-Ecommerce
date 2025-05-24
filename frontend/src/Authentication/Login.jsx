import { useState } from "react";
import {
  FaTelegram,
  FaPhone,
  FaLock,
  FaUser,
  FaArrowLeft,
} from "react-icons/fa";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Existing user login:", { phone, password });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("New user registration:", {
      phone,
      password,
      firstName,
      lastName,
    });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Sending verification code to:", phone);
    setCodeSent(true);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    console.log("Verifying code:", verificationCode);
  };

  const handleTelegramLogin = () => {
    console.log("Login with Telegram");
    // Here you would typically integrate with Telegram's OAuth or bot API
    // For example: window.open('https://oauth.telegram.org/auth?...')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        {forgotPassword ? (
          <>
            <button
              onClick={() => setForgotPassword(false)}
              className="flex items-center text-[#2f4f4f] mb-4"
            >
              <FaArrowLeft className="mr-2" />
              Back to login
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium text-[#2f4f4f] font-bold">
                Reset Password
              </h2>
              <p className="text-gray-500 mt-1">
                Enter your phone number to receive a verification code
              </p>
            </div>
            {!codeSent ? (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#2f4f4f] mb-1">
                    Phone Number
                  </label>
                  <div className="relative rounded-md bg-gray-100 shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">+855</span>
                    </div>
                    <div className="absolute inset-y-0 left-12 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="block w-full pl-24 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2f4f4f] focus:border-teal-500"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2f4f4f] hover:bg-[#3b5f5f] text-white py-2 px-4 rounded-md transition duration-200 font-bold"
                >
                  Send Verification Code
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyCode} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#2f4f4f] mb-1">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter 6-digit code"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2f4f4f] focus:border-teal-500"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                    maxLength={6}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    We sent a code to +855{phone}
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2f4f4f] hover:bg-[#3b5f5f] text-white py-2 px-4 rounded-md transition duration-200 font-bold"
                >
                  Verify Code
                </button>
              </form>
            )}
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium text-[#2f4f4f] font-bold">
                {isNewUser ? "Create Account" : "Welcome Back"}
              </h2>
              <p className="text-gray-500 mt-1">
                {isNewUser ? "Start your journey" : "Sign in to your account"}
              </p>
            </div>
            <form
              className="space-y-4"
              onSubmit={isNewUser ? handleSignIn : handleLogin}
            >
              <div>
                <label className="block text-sm font-medium text-[#2f4f4f] mb-1">
                  Phone Number
                </label>
                <div className="relative rounded-md bg-gray-100 shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">+855</span>
                  </div>
                  <div className="absolute inset-y-0 left-12 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="block w-full pl-24 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2f4f4f] focus:border-teal-500"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2f4f4f] mb-1">
                  Password
                </label>
                <div className="relative rounded-md bg-gray-100 shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    placeholder={
                      isNewUser ? "Create password" : "Enter your password"
                    }
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2f4f4f] focus:border-[#2f4f4f]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {!isNewUser && (
                  <button
                    type="button"
                    onClick={() => setForgotPassword(true)}
                    className="text-xs text-blue-600 hover:underline mt-1 float-right"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              {isNewUser && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[#2f4f4f] mb-1">
                      Confirm Password
                    </label>
                    <div className="relative rounded-md bg-gray-100 shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2f4f4f] focus:border-[#2f4f4f]"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2f4f4f] mb-1">
                      First Name
                    </label>
                    <div className="relative rounded-md bg-gray-100 shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Your first name"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2f4f4f] focus:border-[#2f4f4f]"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2f4f4f] mb-1">
                      Last Name
                    </label>
                    <div className="relative rounded-md bg-gray-100 shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Your last name"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2f4f4f] focus:border-[#2f4f4f]"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="grid grid-cols-2 gap-3">
                {!isNewUser ? (
                  <>
                    <button
                      type="submit"
                      className="w-full bg-[#2f4f4f] hover:bg-[#3b5f5f] text-white py-2 px-4 rounded-md transition duration-200 font-bold"
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsNewUser(true)}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition duration-200 font-bold"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="w-full bg-[#2f4f4f] hover:bg-[#3b5f5f] text-white py-2 px-4 rounded-md transition duration-200 font-bold"
                    >
                      Sign Up
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsNewUser(false)}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition duration-200 font-bold"
                    >
                      Back to Login
                    </button>
                  </>
                )}
              </div>
            </form>

            {!isNewUser && (
              <div className="mt-6">
                <div className="flex items-center my-4">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-500">OR</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <button
                  onClick={handleTelegramLogin}
                  className="w-full bg-[#0088cc] hover:bg-[#0077aa] text-white py-2 px-4 rounded-md transition duration-200 font-bold flex items-center justify-center"
                >
                  <FaTelegram className="mr-2" />
                  Login with Telegram
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
