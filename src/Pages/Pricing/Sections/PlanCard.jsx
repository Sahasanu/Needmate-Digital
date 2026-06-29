import { formatCurrency } from "../../../utils/Formatters";

export default function PlanCard({
  title,
  plan,
  basePrice,
  selected,
  onSelect
}) {
  return (
    <div
      onClick={() => onSelect(title)}
      className={`relative cursor-pointer rounded-[24px] border-2 bg-white p-6 transition-all duration-300 ${
        selected
          ? "border-[#00685f] ring-2 ring-[#00685f]/20"
          : "border-[#bcc9c6]/30 hover:border-[#00685f]/40"
      }`}
    >
      {plan.tag && (
        <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl bg-[#00685f] px-4 py-1 text-xs font-medium text-white">
          {plan.tag}
        </div>
      )}

      <h3 className="text-3xl font-bold">{title}</h3>

      <div className="mt-3 flex items-end gap-1">
        <span className="text-3xl font-bold text-[#00685f]">
          ₹{basePrice ? basePrice.toLocaleString() : 0}
        </span>
        <span className="pb-1 text-sm text-[#216963]">/month</span>
      </div>

      {plan.discount > 0 && (
        <p className="mt-2 text-sm font-semibold text-[#216963]">
          Save {formatCurrency(plan.discount)}
        </p>
      )}

      <p className="mt-5 text-sm text-[#216963]">{plan.description}</p>
    </div>
  );
}