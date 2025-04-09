import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "./ui/button";

export const CallToActionButton = () => {
    return (
        <Button className="w-xs self-center px-2 text-center" size="lg" asChild>
            <Link
                href="https://www.ebay.com/itm/396119923371"
                target="_blank"
                className="no-underline">
                <div className="flex-1">Buy Now For $49</div>
                <div className="bg-background flex aspect-square items-center justify-center rounded p-1.5">
                    {/* <FaCartShopping className="text-primary" /> */}
                    <FaArrowRight className="text-primary" />
                </div>
            </Link>
        </Button>
    );
};
