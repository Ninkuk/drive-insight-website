export enum Category {
    ALL = "all",
    TYPE2 = "device",
    TYPE3 = "app",
    TYPE4 = "shipping",
}

export const faqs: { question: string; answer: string; category: Category }[] =
    [
        {
            question: "Is my car compatible?",
            answer: "Please check the compatibility section for more information.",
            category: Category.ALL,
        },
        {
            question: "Where do I find the OBD port?",
            answer: "The OBD port is usually located on the driver's side of the car. Please refer to your car manual for more information.",
            category: Category.ALL,
        },
        {
            question: "How do I connect my car?",
            answer: "Plug the device into the OBD port and turn on the car. Then setup the device using the instructions on the app.",
            category: Category.ALL,
        },
    ];
