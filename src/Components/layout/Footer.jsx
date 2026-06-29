import Container from "./Container";

const LINKS = [
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Privacy Policy", href: "/#contact" },
    { label: "Terms of Service", href: "/#contact" },
    { label: "Contact", href: "/#contact" },
];

export default function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer id="contact" className="scroll-mt-36 border-t bg-white">
            <div className="mx-auto max-w-4xl px-6">
                {/* Top Section */}
                <div className="flex flex-col gap-10 py-10 text-center lg:flex-row lg:items-start lg:justify-between lg:py-16 lg:text-left">
                    {/* Brand */}
                    <div className="max-w-md mx-auto lg:mx-0">
                        <h2 className="text-2xl font-bold text-[#00685f] sm:text-3xl">
                            NeedMet Digital
                        </h2>

                        <p className="mt-3 text-sm leading-relaxed text-[#216963] sm:text-base">
                            Helping businesses conquer the digital landscape since 2024.
                        </p>

                        <a
                            href="mailto:hello@needmetdigital.com"
                            className="mt-4 inline-block text-sm font-medium text-[#00685f] transition hover:underline"
                        >
                            hello@needmetdigital.com
                        </a>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 lg:max-w-md lg:justify-end">
                        {LINKS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-[#216963] transition hover:text-[#00685f]"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-100 py-6">
                    <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
                        <p className="text-sm text-[#216963]">
                            &copy; {date} NeedMet Digital. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}