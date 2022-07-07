export class Link {
    constructor(private _url: string, private _slug: string, private _createdOn: Date) {
    }

    get url(): string {
        return this._url;
    }

    get slug(): string {
        return this._slug;
    }

    get createdOn(): Date {
        return this._createdOn;
    }
}