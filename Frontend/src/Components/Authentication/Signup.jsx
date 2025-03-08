import { useEffect, useState } from "react";
import HiveImage from '../../Images/Hive.png'


const SignupPage = () => {
  const [typingText, setTypingText] = useState("");
  const fullText = "Create Your Account";
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setTypingText(fullText.substring(0, index + 1));
        index++;
        setTimeout(type, 60);
      }
    };
    type();
  }, []);

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl -z-10 rounded-3xl"></div>
        
        {/* Signup Container */}
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 relative z-10 border border-gray-800">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {typingText}
              <span className="animate-blink ml-1">|</span>
            </h2>
            <p className="mt-2 text-gray-400">Join us to start your investment journey</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={handleNameChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                placeholder="Create a strong password"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                required
                className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-700 rounded bg-gray-800/50"
              />
              <label className="ml-2 block text-sm text-gray-400">
                I agree to the{" "}
                <a href="#" className="text-cyan-500 hover:text-cyan-400">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200"
            >
              Create Account
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or sign up with</span>
              </div>
            </div>

            {/* Hive Signup Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg shadow-sm bg-gray-800/50 hover:bg-gray-800 transition-all duration-200"
            >
              <img src={HiveImage} className="w-5 h-5 mr-2" alt="Hive Logo" />
              <span className="text-white">Sign up with Hive</span>
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-cyan-500 hover:text-cyan-400 transition-colors">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;