const service = {
    serviceId: "SEO001",
    title: "Search Engine Optimization",
    description:
        "Improve your website rankings and drive organic traffic with our professional SEO services.",
    imageUrl: "https://yourdomain.com/images/services/seo.jpg",
    plans: [
        {
            planId: "SEO001-PLAN1",
            name: "Starter-3M",
            description: "Best for small businesses getting started with SEO.",
            tag: "Popular",
            price: 14999,
            duration: "3 Months",
            durationDays: 92,
            imageUrl: [],
            features: [

                {
                    icon: "analytics",
                    title: "Weekly Reports",
                    desc: "Performance reports every week."
                },
                {
                    icon: "calendar_month",
                    title: "30-Day Content Calendar",
                    desc: "Planned social media calendar."
                },

            ],
            isActive: true,
        },
        {
            planId: "SEO001-PLAN2",
            name: "Growth-6M",
            description: "Best value for growing businesses.",
            tag: "Best Value",
            features: [
                {
                    icon: "analytics",
                    title: "Weekly Reports",
                    desc: "Performance reports every week."
                },
                {
                    icon: "calendar_month",
                    title: "30-Day Content Calendar",
                    desc: "Planned social media calendar."
                },
                {
                    icon: "brush",
                    title: "Creative Designs",
                    desc: "Custom graphics and reels."
                }
            ],
            imageUrl: [],
            price: 27999,
            duration: "6 Months",
            durationDays: 184,
            isActive: true,
        },
        {
            planId: "SEO001-PLAN3",
            name: "Scale-12M",
            description: "Complete SEO solution for long-term growth.",
            tag: "Saver",
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
                    icon: "calendar_month",
                    title: "30-Day Content Calendar",
                    desc: "Planned social media calendar."
                },
                {
                    icon: "brush",
                    title: "Creative Designs",
                    desc: "Custom graphics and reels."
                }
            ],
            imageUrl: [],
            price: 51999,
            duration: "12 Months",
            durationDays: 365,
            isActive: true,
        },
    ],

    tags: ["Branding"],
    category: "Branding",
    badge: "CREATIVE",
    createdAt: new Date(),
    updatedAt: new Date(),
};