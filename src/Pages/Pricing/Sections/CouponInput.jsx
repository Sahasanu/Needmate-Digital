import { useState } from "react";

export default function CouponInput({ onApply, message }) {
  const [coupon, setCoupon] = useState("");

  const handleApply = () => {
    if (onApply) {
      onApply(coupon);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-3">
        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleApply();
          }}
          placeholder="Coupon Code"
          className="flex-1 rounded-xl border border-[#bcc9c6] bg-[#f2f3ff] px-4 py-2 outline-none focus:border-[#00685f]"
        />

        <button
          type="button"
          onClick={handleApply}
          className="rounded-xl bg-[#216963] px-3 text-white transition hover:bg-[#00685f]"
        >
          Apply
        </button>
      </div>

      {message && (
        <p className={`text-sm ${message.includes("Invalid") ? "text-red-600" : "text-[#00685f]"}`}>
          {message}
        </p>
      )}
    </div>
  );
}