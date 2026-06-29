export default function HelpCard() {
  return (
    <div className="rounded-3xl shadow-2xl bg-white px-4 py-3">
      <h3 className="font-bold">Need Help?</h3>
      
      <p className=" text-sm text-[#216963]">
        Our experts are available 24/7.
      </p>

      <button
        type="button"
        onClick={() => window.location.href = "mailto:hello@needmetdigital.com?subject=Schedule%20a%20Call"}
        className="mt-2 w-full rounded-xl border border-[#00685f] py-1 text-[#00685f] transition hover:bg-[#00685f] hover:text-white"
      >
        Schedule Call
      </button>
    </div>
  );
}