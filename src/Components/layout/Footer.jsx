import Container from "./Container";

const LINKS = {
  Services: [
    { label: "SEO", href: "/#services" },
    { label: "Social Media", href: "/#services" },
    { label: "Performance Marketing", href: "/#services" },
    { label: "Content Marketing", href: "/#services" },
  ],
  Company: [
    { label: "About Us", href: "/#about" },
    { label: "Contact", href: "/#contact" },
    { label: "Careers", href: "/#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/#contact" },
    { label: "Terms of Service", href: "/#contact" },
    { label: "Refund Policy", href: "/#contact" },
  ],
};

const SOCIALS = [
  { icon: "fab fa-instagram", href: "https://www.instagram.com/needmet.digital/" },
  { icon: "fab fa-linkedin", href: "https://linkedin.com" },
  { icon: "fab fa-twitter", href: "https://twitter.com" },
];

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-36 bg-[#0a1f1a] text-white">
      {/* Main footer grid */}
      <Container>
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white">NeedMet Digital</h2>
            <p className="text-sm leading-relaxed text-white/60">
              Helping businesses conquer the digital landscape since 2025. From SEO to performance marketing — we get results.
            </p>
            {/* Socials */}
            <div className="flex gap-4 pt-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-primary hover:text-primary"
                >
                  <i className={`${s.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {group}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-white/40">
              © {date} NeedMet Digital. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Made with ❤️ in India
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}