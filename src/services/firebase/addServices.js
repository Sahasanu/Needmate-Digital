import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import serviceAccount from "../../config/serviceAccountKey.json" with { type: "json" };

initializeApp({
    credential: cert(serviceAccount),
});

const db = getFirestore();

const service = {
    serviceId: "SEO001",
    title: "Search Engine Optimization",
    description: "Improve your website rankings and drive organic traffic with our professional SEO services.",
    imageUrl: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "search",
    basePrice: 14999,
    plans: [
        {
            planId: "SEO001-PLAN1",
            name: "Starter - 3M",
            description: "Best for small businesses getting started with SEO.",
            tag: "Popular",
            price: 14999,
            discount: 0,
            duration: "3 Months",
            durationDays: 92,
            isActive: true,
            features: [
                {
                    icon: "analytics",
                    title: "Weekly Reports",
                    desc: "Performance reports every week."
                },
                {
                    icon: "manage_search",
                    title: "Keyword Tracking",
                    desc: "Monitor your core keyword rankings."
                }
            ]
        },
        {
            planId: "SEO001-PLAN2",
            name: "Growth - 6M",
            description: "Best value for growing businesses.",
            tag: "Best Value",
            price: 27999,
            discount: 1200,
            duration: "6 Months",
            durationDays: 184,
            isActive: true,
            features: [
                {
                    icon: "analytics",
                    title: "Weekly Reports",
                    desc: "Performance reports every week."
                },
                {
                    icon: "manage_search",
                    title: "Keyword Tracking",
                    desc: "Monitor your core keyword rankings."
                },
                {
                    icon: "gavel",
                    title: "Technical SEO Audit",
                    desc: "Fix broken links and site speed issues."
                }
            ]
        },
        {
            planId: "SEO001-PLAN3",
            name: "Scale - 12M",
            description: "Complete SEO solution for long-term growth.",
            tag: "Saver",
            price: 51999,
            discount: 1500,
            duration: "12 Months",
            durationDays: 365,
            isActive: true,
            features: [
                {
                    icon: "person_check",
                    title: "Dedicated Account Manager",
                    desc: "One point of contact for your business."
                },
                {
                    icon: "analytics",
                    title: "Weekly Reports",
                    desc: "Performance reports every week."
                },
                {
                    icon: "manage_search",
                    title: "Keyword Tracking",
                    desc: "Monitor your core keyword rankings."
                },
                {
                    icon: "link",
                    title: "Backlink Building",
                    desc: "High-quality monthly authority links."
                }
            ]
        }
    ],
    tags: ["SEO", "Marketing"], 
    category: "Digital Marketing", 
    badge: "GROWTH", 
    badgeColor: "bg-blue-600 text-white", 
    rating: 4.9,
    reviews: 482,
    clients: 890,
    createdAt: new Date(),
    updatedAt: new Date()
};

async function createServicesCollection() {
    try {
        await db.collection("services").doc(service.serviceId).set(service);

        console.log("✅ Service created successfully.");
    } catch (err) {
        console.error("❌ Error:", err);
    }
}

createServicesCollection();