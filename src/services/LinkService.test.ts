import {LinkRepository} from "../repositories/LinkRepository";
import {LinkService, SLUG_LENGTH} from "./LinkService";
import base62 from "base62-random";

const repository = new LinkRepository();
const sut = new LinkService(repository);

test('shorten invalid url', () => {
    expect(() => sut.shorten('')).toThrow();
    expect(() => sut.shorten('www.example.com')).toThrow();
    expect(() => sut.shorten('@')).toThrow();
});

test('shorten valid url', () => {
    const url = 'https://www.example.com';
    const link = sut.shorten(url);
    expect(link.slug).toBeDefined();
    expect(link.slug.length).toBe(SLUG_LENGTH);
    expect(base62.test(link.slug)).toBeTruthy();
    expect(link.createdOn).toBeDefined();
    expect(link.url).toEqual(url);
});

