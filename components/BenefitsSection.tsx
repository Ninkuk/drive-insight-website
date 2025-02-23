import { Car, ChartLine, Map, ShieldCheck } from "lucide-react";
import BenefitCard from "./BenefitCard";

export const BenefitsSection = () => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-center">Get more out of your drive</h2>
            <div className="flex flex-col flex-wrap gap-2 lg:flex-row">
                {[
                    {
                        title: "Discover trip insights and driving analysis",
                        icon: <Car className="h-10 w-10" />,
                        backgroundColor: "#40E517",
                    },
                    {
                        title: "Analyze every moment in both time and space",
                        icon: <Map className="h-10 w-10" />,
                        backgroundColor: "#93E517",
                    },
                    {
                        title: "Observe long-term trends for all your vehicles",
                        icon: <ChartLine className="h-10 w-10" />,
                        backgroundColor: "#e5d200",
                    },
                    {
                        title: "Track your journeys securely and seamlessly",
                        icon: <ShieldCheck className="h-10 w-10" />,
                        backgroundColor: "#E59317",
                    },
                    // {
                    //     title: "Review trips history for up to a month",
                    //     icon: <Calendar className="h-10 w-10" />,
                    //     backgroundColor: "#E54017",
                    // },
                ].map((item, index) => (
                    <BenefitCard
                        key={index}
                        title={item.title}
                        description=""
                        icon={item.icon}
                        backgroundColor={item.backgroundColor}
                    />
                ))}
            </div>
        </div>
    );
};
