export enum Category {
    ALL = "All",
    TYPE2 = "Type 2",
    TYPE3 = "Type 3",
    TYPE4 = "Type 4",
}

export const faq: { title: string; description: string; category: Category }[] =
    [
        {
            title: "TYPE 2",
            description: "lorem ipsum",
            category: Category.TYPE2,
        },
        {
            title: "TYPE 2",
            description: "lorem ipsum",
            category: Category.TYPE2,
        },
        {
            title: "TYPE 3",
            description: "lorem ipsum",
            category: Category.TYPE3,
        },
        {
            title: "TYPE 4",
            description: "lorem ipsum",
            category: Category.TYPE4,
        },
        {
            title: "TYPE 4",
            description: "lorem ipsum",
            category: Category.TYPE4,
        },
        {
            title: "TYPE 2",
            description: "lorem ipsum",
            category: Category.TYPE2,
        },
    ];