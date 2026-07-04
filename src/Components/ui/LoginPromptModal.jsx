import { useNavigate, useLocation } from "react-router-dom";

export default function LoginPromptModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  if (!isOpen) return null;

  const handleLoginRedirect = () => {
    // Redirect to local login page and pass current location to return after login
    navigate("/login", { state: { from: location.pathname } });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <span className="material-symbols-outlined text-3xl text-primary">
              lock
            </span>
          </div>

          <h3 className="mb-2 text-2xl font-bold text-gray-900">
            Authentication Required
          </h3>
          <p className="mb-6 text-gray-600">
            You must be logged in to proceed with the payment. Please login to continue.
          </p>

          <button
            onClick={handleLoginRedirect}
            className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition hover:bg-primary-dark"
          >
            Click here to Login
          </button>
        </div>
      </div>
    </div>
  );
}
