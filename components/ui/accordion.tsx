import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = (
    {
        ref,
        className,
        ...props
    }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
        ref: React.RefObject<React.ElementRef<typeof AccordionPrimitive.Item>>;
    }
) => (<AccordionPrimitive.Item
    ref={ref}
    className={cn(
        "rounded-lg p-4 data-[state=closed]:bg-slate-900 data-[state=open]:bg-slate-800",
        className,
    )}
    {...props}
/>);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = (
    {
        ref,
        className,
        children,
        ...props
    }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
        ref: React.RefObject<React.ElementRef<typeof AccordionPrimitive.Trigger>>;
    }
) => (<AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
            "flex flex-1 items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            className,
        )}
        {...props}>
        {children}
        <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = (
    {
        ref,
        className,
        children,
        ...props
    }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
        ref: React.RefObject<React.ElementRef<typeof AccordionPrimitive.Content>>;
    }
) => (<AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden pt-2 text-sm text-slate-300 transition-all"
    {...props}>
    <div className={cn(className)}>{children}</div>
</AccordionPrimitive.Content>);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
