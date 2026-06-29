export default function Badge({
    children,
    className = ""
}) {
    return (
        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${className}`}
        >
            {children}
        </span>
    );
}