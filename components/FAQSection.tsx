import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const FAQSection = () => {
    return (
        <div style={{ padding: "20px" }}>
            {/* <h1 style={{ textAlign: "center", fontSize: 35 }}>FAQs</h1> */}
            <br />

            <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-3">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Where can I find the OBD port in my car?
                    </AccordionTrigger>
                    <AccordionContent>
                        The OBD port is typically located beneath the dashboard
                        on the driver`&apos;s side, near the steering column or
                        around the fuse box in the footwell area. It can also be
                        found near the pedals or sometimes in the center console
                        or glove compartment, depending on the car model. If you
                        can`&apos;t locate it, checking the car`&apos;s manual
                        can provide the exact position.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        How do I know if the device is working properly?
                    </AccordionTrigger>
                    <AccordionContent>
                        To ensure the OBD device is working properly, insert it
                        firmly into the OBD port, making sure it fits snugly.
                        Check the LED lights on the device—typically, a steady
                        or flashing light indicates a proper connection. If the
                        lights aren`&apos;t behaving as expected, try unplugging
                        and re-plugging the device to ensure it`&apos;s aligned
                        correctly.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Can I use 1 device with 2 cars?
                    </AccordionTrigger>
                    <AccordionContent>No. Please buy another.</AccordionContent>
                </AccordionItem>
            </Accordion>

            <Link href="/faq">
                <h6 style={{ textAlign: "right", color: "blue" }}>
                    Click here for more information
                </h6>
            </Link>
        </div>
    );
};
