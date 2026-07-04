import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../config/firebase";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();

  // Redirect to home (or previous page) if already logged in
  useEffect(() => {
    if (currentUser) {
      const from = location.state?.from || "/";
      navigate(from, { replace: true });
    }
  }, [currentUser, navigate, location]);

  useEffect(() => {
    // Setup recaptcha
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved
        },
      });
    }
  }, []);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);
    setError("");

    // Standardize to Indian +91 format if they just typed 10 digits
    const formattedNumber = phoneNumber.startsWith("+") 
      ? phoneNumber 
      : `+91${phoneNumber}`;

    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, formattedNumber, appVerifier);
      setConfirmationResult(confirmation);
      setOtpSent(true);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp || otp.length < 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await confirmationResult.confirm(otp);
      // Success! User is authenticated via AuthContext automatically
      
      // Navigate back to where they came from, or home
      const from = location.state?.from || "/";
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      setError("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-10 shadow-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <span className="material-symbols-outlined text-4xl text-primary">
            lock
          </span>
        </div>
        
        <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
          Login Required
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          {otpSent ? "Enter the 6-digit OTP sent to your phone" : "Please enter your phone number to continue"}
        </p>

        {/* This invisible container is required by Firebase Recaptcha */}
        <div id="recaptcha-container"></div>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="mt-8 space-y-6">
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">+91</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Enter 10-digit number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none disabled:opacity-70"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              ) : (
                "Send OTP"
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="mt-8 space-y-6">
            <div>
              <label htmlFor="otp" className="sr-only">OTP</label>
              <input
                type="text"
                name="otp"
                id="otp"
                className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-center tracking-widest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                required
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none disabled:opacity-70"
              >
                {loading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                ) : (
                  "Verify & Login"
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setOtpSent(false);
                  setError("");
                }}
                className="text-sm font-medium text-primary hover:text-primary-dark"
              >
                Change Phone Number
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
