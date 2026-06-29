import { Link } from "react-router-dom";

export default function IconButton({
    icon,
    onClick,
    variant = "default",
    to
}) {

    const styles = {
        default:
            "bg-[#00685f]/5 text-[#00685f] hover:bg-[#00685f] hover:text-white",

        primary:
            "bg-gradient-to-br from-[#00685f] to-[#008378] text-white"
    };

    const className = `inline-flex rounded-2xl p-3 transition-all duration-300 ${styles[variant]}`;

    const content = (
        <span className="material-symbols-outlined">
            {icon}
        </span>
    );

    if (to) {
        return (
            <Link to={to} className={className} aria-label="View service">
                {content}
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={className}
        >
            {content}
        </button>
    );

}
