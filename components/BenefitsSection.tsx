import Image from "next/image";
import {
    FaCalendarWeek,
    FaChartSimple,
    FaMap,
    FaRoad,
    FaShieldHalved,
    FaStreetView,
} from "react-icons/fa6";
import { Card } from "./ui/card";

const cards: {
    title: string;
    icon: React.ReactNode;
    img: string;
    backgroundColor: string;
}[] = [
    {
        title: "Discover trip insights and driving analysis",
        icon: <FaRoad className="size-12" />,
        img: "/screenshots/trip_frame.png",
        backgroundColor: "#53E52E",
    },
    {
        title: "Analyze every moment in both time and space",
        icon: <FaMap className="size-12" />,
        img: "/screenshots/trip_map_frame.png",
        backgroundColor: "#9CE52E",
    },
    {
        title: "Observe long-term trends for all your vehicles",
        icon: <FaChartSimple className="size-12" />,
        img: "/screenshots/stats_frame.png",
        backgroundColor: "#E5D62E",
    },
    {
        title: "Track your journeys securely and seamlessly",
        icon: <FaShieldHalved className="size-12" />,
        img: "/screenshots/device_recording_frame.png",
        backgroundColor: "#E59C2E",
    },
    {
        title: "Every drive has a story, revisit yours anytime",
        icon: <FaCalendarWeek className="size-12" />,
        img: "/screenshots/trips_frame.png",
        backgroundColor: "#E5772E",
    },
    {
        title: "Reliably capture every trip with geofencing",
        icon: <FaStreetView className="size-12" />,
        img: "/screenshots/geofence_frame.png",
        backgroundColor: "#E5532E",
    },
];

export const BenefitsSection = () => {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-center">Get more out of your drive</h2>
                <p className="text-center">
                    Discover the benefits of Drive Insight
                </p>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        className="flex gap-5 p-5 text-slate-800 lg:flex-row"
                        style={{ backgroundColor: card.backgroundColor }}>
                        <div className="flex flex-1 flex-col gap-2 md:gap-5">
                            {card.icon}
                            <h2 className="text-inherit">{card.title}</h2>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={card.img}
                                alt={card.title}
                                width={175}
                                height={175}
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
