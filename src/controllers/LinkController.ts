import {Router} from "express";
import {LinkRepository} from "../repositories/LinkRepository";
import {LinkService} from "../services/LinkService";
import {hasField, validate} from "../utils/Asserts";

export const linkController = Router();

//TODO use IoC as Inversify
const repository = new LinkRepository();
const service = new LinkService(repository);

linkController.get('/:slug', (req, res) => {
    const link = service.get(req.params.slug);
    if (link) {
        res.redirect(link.url);
    } else {
        res.status(404).send('Not found')
    }
});

linkController.post('/', (req, res) => {

    validate(() => hasField(req.body, 'url'));
    try {
        const link = service.shorten(req.body.url);
        res.status(200).send(JSON.stringify(link));
    } catch (e) {
        //TODO use logger
        console.log(e);
        res.status(400).send('Bad request')
    }
});
