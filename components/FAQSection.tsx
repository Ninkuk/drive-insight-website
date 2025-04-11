import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/faq";

export const FAQSection = () => {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-center">Frequently Asked Questions</h2>
                <p className="text-center">Learn more about our product.</p>
            </div>
            <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-3">
                {faqs.map((faq) => (
                    <AccordionItem key={faq.question} value={faq.question}>
                        <AccordionTrigger className="text-xl">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};
