export type Category = "allBooks" | "programing" | "design" | "selfHelp"

export interface Book {
    id: string;
    name: string;
    author: string;
    category: Category;
    copies: number;
    available: number
}
