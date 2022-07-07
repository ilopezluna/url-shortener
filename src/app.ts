import express from "express";
import {linkController} from "./controllers/LinkController";
import bodyParser from "body-parser";

export const app = express()

app.use(bodyParser.json())

app.use('/links', linkController);