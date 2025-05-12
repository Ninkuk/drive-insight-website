import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Drive Insight | Beta",
    description: "Join the Drive Insight beta program",
    // openGraph: {
    //     title: "Drive Insight",
    //     description: "Smart Insights for Smarter Driving",
    //     url: "https://mydriveinsight.com/",
    //     siteName: "Drive Insight",
    //     locale: "en_US",
    //     type: "website",
    // },
};

const BetaInfo = () => {
    redirect("https://forms.gle/Q5SxeuiwTiu6jK2f6");
};

export default BetaInfo;
