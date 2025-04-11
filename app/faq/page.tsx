import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/faq";

export default function FAQ() {
    return (
        <div className="container mx-auto flex h-full flex-col gap-10 py-5 lg:py-10">
            <div>
                <h2 className="text-center">Frequently Asked Questions</h2>
                <p className="text-center">
                    Quick answers to questions you may have about our app and
                    device. For further information, check out our guide.
                </p>
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
}
