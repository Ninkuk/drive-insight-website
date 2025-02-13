import { Fuel, KeyRound, ShieldCheck } from "lucide-react";
import BenefitCard from "./BenefitCard";

export const BenefitsSection = () => {
    return (
        <div className="mt-5 flex flex-col gap-5">
            <h2 className="mb-5 text-center text-4xl font-bold">
                Get more out of your drive
            </h2>
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-8">
                <BenefitCard
                    title="Fuel Consumption and Cost"
                    description="Track your fuel usage and expenses in real-time to help you drive more efficiently and save money."
                    icon={<Fuel className="h-10 w-10" />}
                    darkMode={false}
                    // imgPath={"/benefit_fuel_2.webp"}
                />
                <BenefitCard
                    title="Safety and Awareness"
                    description=" Stay alert with driving insights designed to enhance road awareness and reduce risks."
                    icon={<ShieldCheck className="h-10 w-10" />}
                    // imgPath={"/benefit_safety_1.webp"}
                    darkMode={false}
                />
                <BenefitCard
                    title="Privacy Control"
                    description="Enjoy full control over your driving data with customizable privacy settings that prioritize your security and peace of mind."
                    icon={<KeyRound className="h-10 w-10" />}
                    // imgPath={"/benefit_safety_2.webp"}
                    darkMode={false}
                />
            </div>
        </div>
    );
};
