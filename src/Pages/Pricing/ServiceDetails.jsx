import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SERVICES_DATA from "../../data/services";
import { PLANS, FEATURES, TIMELINE } from "../../data/planDetails";

import usePricing from "../../hooks/usePricing";

import ServiceHero from "./Sections/ServiceHero";
import FeatureGrid from "./Sections/FeatureGrid";
import PlanSelector from "./Sections/PlanSelector";
import Timeline from "./Sections/Timeline";
import OrderSummary from "./Sections/OrderSummary";

const DEFAULT_PLAN = PLANS["6 Months"];

export default function ServiceDetails() {

    const { id } = useParams();

    const [selectedPlan, setSelectedPlan] = useState("6 Months");
    const [paymentMethod, setPaymentMethod] = useState("Full");
    const [couponDiscount, setCouponDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState("");

    const service = SERVICES_DATA.find(
        (item) => item.id === Number(id)
    );

    const currentPlan = PLANS[selectedPlan] || DEFAULT_PLAN;

    // Calculate base price dynamically from the selected service
    const parsePrice = (priceStr) => Number(priceStr.toString().replace(/[^\d]/g, ""));
    const basePrice = service ? parsePrice(service.price) : 0;

    const pricing = usePricing(currentPlan, basePrice, couponDiscount);

    if (!service) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
                <h1 className="text-3xl font-bold text-[#131b2e]">
                    Service Not Found
                </h1>
                <p className="text-[#216963]">
                    The service you are looking for does not exist.
                </p>
                <Link
                    to="/"
                    className="rounded-full bg-[#00685f] px-8 py-3 font-medium text-white transition hover:scale-105"
                >
                    Back to Home
                </Link>
            </div>
        );
    }

    const handleApplyCoupon = (code) => {
        const normalized = code.trim().toUpperCase();

        if (normalized === "SAVE10") {
            setCouponDiscount(Math.round(pricing.subtotal * 0.1));
            setCouponMessage("Coupon applied! 10% discount added.");
            return;
        }

        if (normalized === "NEEDMATE") {
            setCouponDiscount(500);
            setCouponMessage("Coupon applied! ₹500 off your order.");
            return;
        }

        setCouponDiscount(0);
        setCouponMessage("Invalid coupon code. Try SAVE10 or NEEDMATE.");
    };

    const handleCheckout = () => {
        window.alert(
            `Order confirmed!\n\nService: ${service.title}\nPlan: ${selectedPlan}\nPayment: ${paymentMethod}\nTotal: ₹${pricing.grand.toLocaleString("en-IN")}\n\nThank you for choosing NeedMet Digital!`
        );
    };

    return (
        <>
           {/* Main Layout */}

            <div className="mx-auto max-w-7xl px-6 py-10">

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

                    {/* Left */}

                    <main className="lg:col-span-8 space-y-12">

                        <ServiceHero service={service} />

                        <FeatureGrid features={FEATURES} />

                        <PlanSelector
                            plans={PLANS}
                            selectedPlan={selectedPlan}
                            onSelect={setSelectedPlan}
                        />

                        <Timeline timeline={TIMELINE} />

                    </main>

                    {/* Right */}

                    <aside className="hidden lg:block lg:col-span-4">

                        <div className="sticky top-24">
                            <OrderSummary
                                currentPlan={currentPlan}
                                pricing={pricing}
                                paymentMethod={paymentMethod}
                                setPaymentMethod={setPaymentMethod}
                                onApplyCoupon={handleApplyCoupon}
                                couponMessage={couponMessage}
                                onCheckout={handleCheckout}
                            />
                        </div>

                    </aside>

                </div>

            </div>

        </>
    );
}
