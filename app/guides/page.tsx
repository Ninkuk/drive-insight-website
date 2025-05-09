import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Drive Insight | Guides",
    description: "Learn how to use Drive Insight",
    // openGraph: {
    //     title: "Drive Insight",
    //     description: "Smart Insights for Smarter Driving",
    //     url: "https://mydriveinsight.com/",
    //     siteName: "Drive Insight",
    //     locale: "en_US",
    //     type: "website",
    // },
};

export default function Guide() {
    return (
        <div>
            <h1 className="text-4xl font-bold">Guides</h1>
            <p>How-tos</p>
        </div>
    );
}
