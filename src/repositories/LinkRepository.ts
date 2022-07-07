import {Link} from "../models/Link";

export class LinkRepository {

    private collection = {};

    public save(link: Link) {
        this.collection[link.slug] = link;
    }

    public get(slug): Link | undefined {
        return this.collection[slug];
    }

}