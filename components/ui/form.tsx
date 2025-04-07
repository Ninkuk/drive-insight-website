"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import {
    Controller,
    ControllerProps,
    FieldPath,
    FieldValues,
    FormProvider,
    useFormContext,
} from "react-hook-form";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Form = FormProvider;

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue,
);

const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
}: ControllerProps<TFieldValues, TName>) => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    );
};

const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();

    const fieldState = getFieldState(fieldContext.name, formState);

    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }

    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};

type FormItemContextValue = {
    id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
    {} as FormItemContextValue,
);

const FormItem = (
    {
        ref,
        className,
        ...props
    }: React.HTMLAttributes<HTMLDivElement> & {
        ref: React.RefObject<HTMLDivElement>;
    }
) => {
    const id = React.useId();

    return (
        <FormItemContext.Provider value={{ id }}>
            <div
                ref={ref}
                className={cn("flex-1 space-y-2", className)}
                {...props}
            />
        </FormItemContext.Provider>
    );
};
FormItem.displayName = "FormItem";

const FormLabel = (
    {
        ref,
        className,
        ...props
    }: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
        ref: React.RefObject<React.ElementRef<typeof LabelPrimitive.Root>>;
    }
) => {
    const { error, formItemId } = useFormField();

    return (
        <Label
            ref={ref}
            className={cn(error && "text-destructive", className)}
            htmlFor={formItemId}
            {...props}
        />
    );
};
FormLabel.displayName = "FormLabel";

const FormControl = (
    {
        ref,
        ...props
    }: React.ComponentPropsWithoutRef<typeof Slot> & {
        ref: React.RefObject<React.ElementRef<typeof Slot>>;
    }
) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
        useFormField();

    return (
        <Slot
            ref={ref}
            id={formItemId}
            aria-describedby={
                !error
                    ? `${formDescriptionId}`
                    : `${formDescriptionId} ${formMessageId}`
            }
            aria-invalid={!!error}
            {...props}
        />
    );
};
FormControl.displayName = "FormControl";

const FormDescription = (
    {
        ref,
        className,
        ...props
    }: React.HTMLAttributes<HTMLParagraphElement> & {
        ref: React.RefObject<HTMLParagraphElement>;
    }
) => {
    const { formDescriptionId } = useFormField();

    return (
        <p
            ref={ref}
            id={formDescriptionId}
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    );
};
FormDescription.displayName = "FormDescription";

const FormMessage = (
    {
        ref,
        className,
        children,
        ...props
    }: React.HTMLAttributes<HTMLParagraphElement> & {
        ref: React.RefObject<HTMLParagraphElement>;
    }
) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
        return null;
    }

    return (
        <p
            ref={ref}
            id={formMessageId}
            className={cn("text-sm font-medium text-destructive", className)}
            {...props}>
            {body}
        </p>
    );
};
FormMessage.displayName = "FormMessage";

export {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    useFormField,
};
