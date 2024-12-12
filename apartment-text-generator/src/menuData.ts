interface MenuItem {
    emoji: string;
    label: string;
    route: string;
}

export const getMenuItems = (t: (key: string) => string): MenuItem[] => [
    {
        emoji: "💬",
        label: t("header.generateMessage"),
        route: "/home-finder/generate-message",
    },
    {
        emoji: "📋",
        label: t("header.createListing"),
        route: "/home-finder/generate-inserat",
    },
    {
        emoji: "🤖",
        label: t("header.chatbot"),
        route: "/home-finder/chat-bot",
    },
    {
        emoji: "✅",
        label: t("header.checklist"),
        route: "/home-finder/checklist",
    },
    {
        emoji: "🏠",
        label: t("header.myListings"),
        route: "/home-finder/listings/",
    },
    {
        emoji: "👤",
        label: t("header.profile"),
        route: "/home-finder/user",
    },

];
