export const links = {
    about: { href: "/about", label: "About" },
    faq: { href: "/faq", label: "FAQ" },
    guides: { href: "/guides", label: "Guides" },
    support: { href: "/support", label: "Support" },
    store: {
        href: "https://www.ebay.com/itm/396119923371",
        label: "Store",
        newTab: true,
    },
};

export const navLinks: { href: string; label: string }[] = [
    links.about,
    links.faq,
    links.guides,
    links.support,
];

export const footerLinks: {
    category: string;
    links: { href: string; label: string; newTab?: boolean }[];
}[] = [
    {
        category: "Company",
        links: [links.about, links.store],
    },
    {
        category: "Resources",
        links: [links.faq, links.guides, links.support],
    },
];
