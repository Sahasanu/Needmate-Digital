export default function CategoryTabs({
    categories,
    activeCategory,
    onCategoryChange,
    mobile = false,
}) {
    if (mobile) {
        return (
            <select
                value={activeCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="h-12 w-full rounded-xl border border-[#bcc9c6]/30 bg-[#f2f3ff] px-4 text-sm text-[#216963] outline-none"
            >
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        );
    }

    return (
        <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`rounded-full px-5 py-2.5 text-sm font-medium transition
    ${activeCategory === category
                            ? "bg-[#00685f] text-white shadow"
                            : "bg-[#f2f3ff] text-[#216963] hover:bg-[#e2e7ff]"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}