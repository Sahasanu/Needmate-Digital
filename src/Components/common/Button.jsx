const variants = {
  primary:
    "bg-gradient-to-br from-[#00685f] to-[#008378] text-white shadow-lg hover:scale-105",

  secondary:
    "bg-white border border-[#bcc9c6] hover:bg-[#dae2fd]/20 text-[#131b2e]",

  outline:
    "border border-[#00685f] text-[#00685f] hover:bg-[#00685f] hover:text-white",

  ghost:
    "text-[#216963] hover:text-[#00685f]"
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`
      rounded-full
      transition-all
      duration-300
      font-medium
      ${variants[variant]}
      ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}