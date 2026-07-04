export default function CheckoutButton({ onClick, isLoading }) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={isLoading}
            className={`
            w-full
            rounded-xl
            bg-gradient-to-r
            from-primary
            to-primary-light
            py-4
            font-semibold
            text-white
            transition-transform
            ${isLoading ? "opacity-75 cursor-not-allowed" : "hover:scale-[1.02]"}
            `}
        >
            {isLoading ? "Processing..." : "Proceed to Payment"}
        </button>

    );

}
