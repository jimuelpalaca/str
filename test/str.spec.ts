import { Str } from "../src";

describe("Str Helper Class", () => {
    it("should return a random string with a length of 15", () => {
        const random = Str.random(15);

        expect(random).not.toBeNull();
    });

    it("should transform each word first letter to uppercase.", () => {
        const text = Str.ucWords("normal text");

        expect(text).toStrictEqual("Normal Text");
    });

    it("should transform text to slug form", () => {
        const title = "The Trading Code Blog";
        const slug = Str.toSlug(title);

        expect(slug).toStrictEqual("the-trading-code-blog");
    });

    it('should convert slug to text form', () => {
        const slug = "the-trading-code-blog";
        const title = Str.slugToWord(slug);

        expect(title).toStrictEqual('The Trading Code Blog')
    });

    it('should convert test to snake case', () => {
        const title = "This should be in snake";
        const snakeCase = Str.toSnakeCase(title);

        expect(snakeCase).toStrictEqual('this_should_be_in_snake');
    });

    it('should convert snake case to words', () => {
        const snake = "this_should_be_in_words";
        const words = Str.snakeToWord(snake);

        expect(words).toStrictEqual('This Should Be In Words');
    });
});
