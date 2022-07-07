import {LinkRepository} from "../repositories/LinkRepository";
import {isValidUrl} from "../utils/Asserts";
import {Link} from "../models/Link";
import base62 from "base62-random";

export const SLUG_LENGTH = 7;

export class LinkService {
    private repository: LinkRepository;

    constructor(repository: LinkRepository) {
        this.repository = repository;
    }

    public shorten(url): Link {
        if (isValidUrl(url)) {
            const short = LinkService.getSlug();
            const shortener = new Link(url, short, new Date());
            this.repository.save(shortener);
            return shortener;
        }
        throw new Error('Invalid url');
    }

    private static getSlug() {
        return base62(SLUG_LENGTH);
    }

    public get(slug): Link | undefined {
        //TODO we could add a cache
        return this.repository.get(slug);
    }
}