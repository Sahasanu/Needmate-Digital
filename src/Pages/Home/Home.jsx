import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "./Sections/HeroSection";
import FilterBar from "../../Components/services/Filterbar";
import ServiceGrid from "../../Components/services/ServiceGrid";
import CTASection from "../../Components/cta/CTASection";
import ReviewSection from "../../Components/reviews/ReviewSection";

import SERVICES_DATA from "../../data/services";
import REVIEWS_DATA from "../../data/reviews";
import CATEGORIES from "../../data/categories";

import useParallax from "../../hooks/useParallax";
import { scrollToSection } from "../../utils/scrollTo";

const parsePrice = (price) => Number(price.replace(/[^\d]/g, ""));

const SORT_OPTIONS = ["default", "price-asc", "price-desc", "title"];

export default function Home() {

    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("default");

    const parallax = useParallax();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", "");
            requestAnimationFrame(() => scrollToSection(sectionId));
        }
    }, [location]);

    const featuredService = SERVICES_DATA.find((service) => service.featured);

    const filteredServices = useMemo(() => {
        let result = SERVICES_DATA.filter((service) => {
            if (service.featured) return false;

            const matchesCategory =
                activeCategory === "All" ||
                (service.tags && service.tags.includes(activeCategory));

            const query = searchQuery.toLowerCase();
            const matchesSearch =
                service.title.toLowerCase().includes(query) ||
                (service.desc && service.desc.toLowerCase().includes(query));

            return matchesCategory && matchesSearch;
        });

        if (sortBy === "price-asc") {
            result = [...result].sort(
                (a, b) => parsePrice(a.price) - parsePrice(b.price)
            );
        } else if (sortBy === "price-desc") {
            result = [...result].sort(
                (a, b) => parsePrice(b.price) - parsePrice(a.price)
            );
        } else if (sortBy === "title") {
            result = [...result].sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }

        return result;
    }, [activeCategory, searchQuery, sortBy]);

    const handleSort = () => {
        const currentIndex = SORT_OPTIONS.indexOf(sortBy);
        const nextIndex = (currentIndex + 1) % SORT_OPTIONS.length;
        setSortBy(SORT_OPTIONS[nextIndex]);
    };

    return (
        <>
            <main>
                <HeroSection
                    parallax={parallax}
                />

                <FilterBar
                    categories={CATEGORIES}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onSort={handleSort}
                    sortBy={sortBy}
                />

                <ServiceGrid
                    services={filteredServices}
                    featuredService={featuredService}
                />

                <CTASection />
            </main>

            <ReviewSection
                reviews={REVIEWS_DATA}
            />
        </>
    );

}
