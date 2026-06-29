export default function FeatureCard({
  icon,
  title,
  description
}) {
  return (
    <div className="rounded-[24px] border border-[#bcc9c6]/30 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-xl bg-[#00685f]/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#00685f]">
            {icon}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#216963]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}