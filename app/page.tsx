import { BenefitsSection } from "@/components/BenefitsSection";
import { CallToActionButton } from "@/components/CallToActionButton";
import { CompatibilitySection } from "@/components/CompatibilitySection";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
    return (
        <div className="container flex flex-col gap-20 py-10">
            {/* PAGE SECTIONS */}
            <HeroSection />
            <BenefitsSection />
            {/* <FeaturesSection /> */}
            <CompatibilitySection />
            <FAQSection />
            <CallToActionButton />
        </div>
    );
}
