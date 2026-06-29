export default function TimelineItem({
  title,
  description,
  isLast
}) {
  return (
    <div className="relative flex gap-5">
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 h-full w-[2px] bg-[#bcc9c6]" />
      )}

      {/* Circle */}
      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#00685f]">
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 leading-7 text-[#216963]">{description}</p>
      </div>
    </div>
  );
}