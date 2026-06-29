import Container from "../layout/Container";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid({
    services,
    featuredService
}) {

    return (

        <section id="services" className="py-20 scroll-mt-36">

            <Container>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {services.map((service) => (

                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            description={service.desc}
                            image={service.imgUrl}
                            icon={service.icon}
                            price={service.price}
                            tags={service.tags}
                            badge={service.badge}
                            badgeColor={service.badgeColor}
                        />

                    ))}

                    {featuredService && (

                        <ServiceCard
                            id={featuredService.id}
                            featured
                            title={featuredService.title}
                            description={featuredService.desc}
                            image={featuredService.imgUrl}
                            icon={featuredService.icon}
                            price={featuredService.price}
                            tags={featuredService.tags}
                            badge={featuredService.badge}
                            badgeColor={featuredService.badgeColor}
                            buttonIcon="shopping_bag"
                        />

                    )}

                </div>

            </Container>

        </section>

    );

}
