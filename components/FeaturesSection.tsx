import FeatureCard from "./FeatureCard";


export const FeaturesSection = () => {
    const features = [
        {
            title: "Trip Recording",
            icon: "🚗",
            description: "Auto start/stop for seamless trip recording.",
        },
        {
            title: "Seamless OBD-II Connectivity",
            icon: "📶",
            description: "Fast, reliable and simple OBD-II connectivity with Bluetooth 5.0 .",
        },
        {
            title: "Trip Analysis & Charts",
            icon: "🗺️",
            description: "View your trip route with performance charts.",
        },
        {
            title: "Driving Behavior Insights",
            icon: "📊",
            description:
                "Monitor braking, acceleration, speed, and distance across your trip.",
        },
        {
            title: "Long-Term Trip Data Storage",
            icon: "🗄️",
            description:
                "Store aggregated data forever, with a month of detailed logs.",
        },
        {
            title: "Multiple Vehicle Support",
            icon: "🚘",
            description:
                "Easily switch and track multiple vehicles through the app.",
        },
        {
            title: "Customizable Units & Fuel Pricing",
            icon: "⛽",
            description: "Set fuel costs and unit preferences for expenses.",
        },
    ];

    return (
        <div>
            <div className="mx-auto mt-5 grid max-w-4xl grid-cols-1 gap-4 p-6 lg:grid-cols-3">
            {features.slice(0, 6).map((feature, index) => (
                <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
            <div className="col-span-1 lg:col-span-3">
                <FeatureCard title={features[6].title} description={features[6].description} icon={features[6].icon} />
            </div>
        </div>
        </div>
    );
};
