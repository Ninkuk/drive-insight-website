import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Drive Insight | Survey",
    description: "Take the Drive Insight Survey",
    // openGraph: {
    //     title: "Drive Insight",
    //     description: "Smart Insights for Smarter Driving",
    //     url: "https://mydriveinsight.com/",
    //     siteName: "Drive Insight",
    //     locale: "en_US",
    //     type: "website",
    // },
};

const Beta = () => {
    redirect("https://forms.gle/ktnNmfiMYNj1xG478");
};

export default Beta;
