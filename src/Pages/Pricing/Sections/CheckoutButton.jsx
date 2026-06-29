export default function CheckoutButton({ onClick }) {

    return (

        <button
            type="button"
            onClick={onClick}
            className="
            w-full
            rounded-xl
            bg-gradient-to-r
            from-[#00685f]
            to-[#008378]
            py-4
            font-semibold
            text-white
            transition-transform
            hover:scale-[1.02]
            "
        >

            Proceed to Payment

        </button>

    );

}
