export default function PaymentOption({
  icon,
  label,
  selected,
  onClick
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl border-2 p-2 transition-all text-center ${
        selected
          ? "border-[#00685f]"
          : "border-[#bcc9c6]/30 hover:border-[#00685f]/40"
      }`}
    >
      <span
        className={`material-symbols-outlined ${
          selected ? "text-[#00685f]" : "text-[#216963]"
        }`}
      >
        {icon}
      </span>

      <p className="mt-1 text-sm font-semibold">
        {label}
      </p>
    </div>
  );
}