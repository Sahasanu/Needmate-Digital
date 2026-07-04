const icons = [
    { name: "Digital Plan",             icon: "star" },
    { name: "SEO",                      icon: "search" },
    { name: "Search Engine",            icon: "manage_search" },
    { name: "Social Media",             icon: "groups" },
    { name: "Performance Marketing",    icon: "trending_up" },
    { name: "Content Marketing",        icon: "edit_note" },
    { name: "Email Marketing",          icon: "mark_email_read" },
    { name: "Branding",                 icon: "brush" },
    { name: "Web Design",               icon: "web" },
    { name: "Web Development",          icon: "code" },
    { name: "Graphic Design",           icon: "palette" },
    { name: "Video Marketing",          icon: "videocam" },
    { name: "Paid Ads",                 icon: "ads_click" },
    { name: "Google Ads",               icon: "ads_click" },
    { name: "Analytics",                icon: "analytics" },
    { name: "Reputation Management",    icon: "verified_user" },
    { name: "E-commerce",               icon: "storefront" },
];

/**
 * Returns a Material Symbols icon name for a given service title.
 * Matches by checking if the title contains any known keyword (case-insensitive).
 * Falls back to "rocket_launch" if no match is found.
 */
export function getIconForTitle(title = "") {
    const lower = title.toLowerCase();
    const match = icons.find((item) => lower.includes(item.name.toLowerCase()));
    return match ? match.icon : "rocket_launch";
}

export default icons;