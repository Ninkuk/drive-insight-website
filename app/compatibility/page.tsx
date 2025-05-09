import CompatibilityForm from "@/components/CompatibilityForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Drive Insight | Compatibility",
    description: "Check if your car is compatible with Drive Insight",
    // openGraph: {
    //     title: "Drive Insight",
    //     description: "Smart Insights for Smarter Driving",
    //     url: "https://mydriveinsight.com/",
    //     siteName: "Drive Insight",
    //     locale: "en_US",
    //     type: "website",
    // },
};

const Compatibility = () => {
    return (
        <div className="container flex flex-col gap-5 lg:px-60">
            <div className="flex flex-col items-center gap-2">
                <h1>Ready to get started?</h1>
                <p>Check here if your car is compatible with our device.</p>
            </div>
            <CompatibilityForm />
        </div>
    );
};

export default Compatibility;
