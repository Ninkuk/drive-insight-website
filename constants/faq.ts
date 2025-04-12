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
            question: "Where can I find the OBD port in my car?",
            answer: "The OBD port is typically located beneath the dashboard on the driver's side, near the steering column or around the fuse box in the footwell area. It can also be found near the pedals or sometimes in the center console or glove compartment, depending on the car model. If you can't locate it, checking the car's manual can provide the exact position.",
            category: Category.ALL,
        },
        {
            question: "How do I register my car?",
            answer: "Plug the device into the OBD port and turn on the car. Then setup the device using the instructions on the app.",
            category: Category.ALL,
        },
        {
            question: "How do I know if the device is installed properly?",
            answer: "To ensure the OBD device is installed properly, insert it firmly into the OBD port, making sure it fits snugly. Check the LED lights on the device—typically, a steady or flashing light indicates a proper connection. If the lights aren't behaving as expected, try unplugging and re-plugging the device to ensure it's aligned correctly.",
            category: Category.ALL,
        },
    ];
