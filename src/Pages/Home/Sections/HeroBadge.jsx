export default function HeroBadge({
    icon = "verified",
    text
}) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00685f]/20 bg-[#00685f]/10 px-4 py-2">

            <span className="material-symbols-outlined text-[#00685f] text-lg">
                {icon}
            </span>

            <span className="text-xs font-semibold uppercase tracking-widest text-[#00685f]">
                {text}
            </span>

        </div>
    );
}