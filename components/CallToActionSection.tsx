import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "./ui/button";

export const CallToActionSection = () => {
    return (
        <div>
            {/* <h1>Call To Action Section</h1> */}
            <div className="flex flex-col items-center justify-center gap-4">
                <Image src="obd.svg" height={300} width={300} alt="obd" />
                <Link
                    href="https://www.ebay.com/itm/396119923371"
                    target="_blank">
                    <Button
                        className="w-full px-2 md:w-fit md:gap-4 md:pl-4"
                        size="lg">
                        <div className="flex-1">Buy Now</div>
                        <div className="flex aspect-square items-center justify-center rounded bg-background p-1.5">
                            <FaArrowRight className="text-primary" />
                        </div>
                    </Button>
                </Link>
            </div>
        </div>
    );
};
