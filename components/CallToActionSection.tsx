import { FaArrowRight } from "react-icons/fa6";
import { Button } from "./ui/button";

export const CallToActionSection = () => {
    return (
        <Button className="w-full px-2 md:w-fit md:gap-4 md:pl-4" size="lg">
            <div className="flex-1">Buy Now For $49</div>
            <div className="flex aspect-square items-center justify-center rounded bg-background p-1.5">
                {/* <FaCartShopping className="text-primary" /> */}
                <FaArrowRight className="text-primary" />
            </div>
        </Button>
    );
};
