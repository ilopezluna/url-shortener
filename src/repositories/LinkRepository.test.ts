import {LinkRepository} from "./LinkRepository";
import {Link} from "../models/Link";

const sut = new LinkRepository();

test('save', () => {
    const slug = '2663ghGgsd';
    expect(sut.get(slug)).toBeUndefined();

    const shortener1 = new Link('www.example1.com', slug, new Date());
    sut.save(shortener1);
    expect(sut.get(slug)).toBeDefined();
});

test('get', () => {
    expect(sut.get('any')).toBeUndefined();
    expect(sut.get(null)).toBeUndefined();
    expect(sut.get(undefined)).toBeUndefined();
});