export class Str {
    static random(length: number = 10): string {
        return [...Array(length)]
            .map(() => (~~(Math.random() * 36)).toString(36))
            .join("");
    }

    static ucWords(text: string): string {
        return text.toLowerCase().replace(/^([a-z])|\s+([a-z])/g, ($1) => {
            return $1.toUpperCase();
        });
    }

    static toSlug(text: string): string {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
    }

    static slugToWord(slug: string): string {
        return slug
            .toLowerCase()
            .replace(/-+/g, " ")
            .replace(/^([a-z])|\s+([a-z])/g, ($1) => {
                return $1.toUpperCase();
            });
    }

    static toSnakeCase(text: string): string {
        const toMap = text.match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z][0-9]+/g,
        );

        if (!toMap) {
            return "";
        }

        return toMap.map((c) => c.toLowerCase()).join("_");
    }

    static snakeToWord(text: string): string {
        const word = text.toLowerCase().replace(/_+/g, " ");

        return Str.ucWords(word);
    }
}
