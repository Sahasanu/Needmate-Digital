import { formatNumber } from "../../../utils/Formatters";

export default function RatingBar({
  rating,
  reviews,
  clients = 0,
  verified = true
}) {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <div className="flex items-center gap-1">
        <span
          className="material-symbols-outlined text-[#00685f]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
        <span className="text-2xl font-bold">{rating}</span>
        <span className="text-[#216963]">({reviews} Reviews)</span>
      </div>

      <div className="h-1 w-1 rounded-full bg-gray-400" />

      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[#00685f]">groups</span>
        <span>{formatNumber(clients)}+ Served</span>
      </div>

      {verified && (
        <>
          <div className="h-1 w-1 rounded-full bg-gray-400" />
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#00685f]">verified</span>
            <span>Pro Verified</span>
          </div>
        </>
      )}
    </div>
  );
}