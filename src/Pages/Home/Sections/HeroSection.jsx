import Button from "../../../Components/common/Button";
import Container from "../../../Components/layout/Container";
import HeroBadge from "./HeroBadge";
import HeroStatsCard from "./HeroStatsCard";
import { scrollToSection } from "../../../utils/scrollTo";

const heroImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAXEAE2Z3D-pHIaH1Aj1h-I_8wdU-hoXTvgqRihEDViEsJnxiRwQpTIxFLHUoDIVeQkwmefHO2B-LnumcRzgsAYvW_NG3tZjJAlWkMM4oBRiOXBddrWYPkXpV-Ux3njaitycca5M0nepXCHRYKTL5zaP6bX5ubWL7d64g3WktyfIQO5jZn5rajckFYZMzptfTgWCzpAuQgion_zklorWuQB7tr4SXUFXSREmwxaezQ50oK6TxELd08CTkHYoKsCIg3bT0nZj6E2BOk";

export default function HeroSection({
    parallax,
    badge = "Premium Service Marketplace",
    title = "Grow Your Business",
    highlight = "Digitally",
    description = "Accelerate your growth with professionally managed digital services. From SEO to social media, we deliver measurable results through data-driven strategies.",
    image = heroImage
}) {
    return (
        <section id="about" className="relative overflow-hidden py-24 scroll-mt-36 px-5">
            <div
                className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#00685f] to-[#008378] opacity-10 blur-3xl transition-transform duration-150"
                style={{
                    transform: `translate(${parallax.x}px, ${parallax.y}px)`
                }}
            />

            <div className="flex flex-col items-center gap-16 lg:flex-row">

                <div className="flex-1 space-y-8">

                    <HeroBadge
                        text={badge}
                    />

                    <div>

                        <h1 className="text-5xl font-bold leading-tight text-[#131b2e] lg:text-7xl">

                            {title}

                            <br />

                            <span className="font-normal italic text-[#00685f]">
                                {highlight}
                            </span>

                        </h1>

                    </div>

                    <p className="max-w-xl text-lg leading-relaxed text-[#216963]">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-5">

                        <Button
                            className="px-12 py-4"
                            onClick={() => scrollToSection("services")}
                        >
                            Browse Plans
                        </Button>

                        <Button
                            variant="secondary"
                            className="px-12 py-4"
                            onClick={() => scrollToSection("reviews")}
                        >
                            View Portfolio
                        </Button>

                    </div>

                </div>

                <div className="relative hidden flex-1 lg:block">

                    <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">

                        <div className="absolute inset-0 bg-gradient-to-br from-[#00685f] to-[#008378] opacity-10" />

                        <img
                            src={image}
                            alt="Hero"
                            className="h-full w-full object-cover"
                        />

                    </div>

                    <HeroStatsCard
                        title="Avg. Growth"
                        value="142%"
                        progress={75}
                    />

                </div>

            </div>

        </section>
    );
}
