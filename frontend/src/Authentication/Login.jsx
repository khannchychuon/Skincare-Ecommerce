<<<<<<< HEAD
import React from "react";

const Login = () => {
  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          class="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          Or
          <a
            href="#"
            class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            login to your account
          </a>
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form method="POST" action="#">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-5  text-gray-700"
              >
                Name
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  required=""
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    class="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <label
                for="username"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Username
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <span class="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  iworkedon.com/
                </span>
                <input
                  id="username"
                  name="username"
                  placeholder="john"
                  type="text"
                  required=""
                  class="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6">
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  required=""
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    class="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <label
                for="password"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required=""
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6">
              <label
                for="password_confirmation"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Confirm Password
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required=""
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Create account
                </button>
              </span>
            </div>
          </form>
        </div>
=======
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
>>>>>>> 2b39d7ac21912006748069076795ab8d0dd52040
      </div>
    </div>
  );
};

export default Login;
