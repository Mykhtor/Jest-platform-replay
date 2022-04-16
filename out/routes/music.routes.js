"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Music_storage_1 = __importDefault(require("../storage/Music.storage"));
const router = (0, express_1.Router)();
router.post('/', (req, res) => {
    let music = {
        id: req.body.name,
        name: req.body.name,
        author: req.body.author,
        duration: req.body.duration,
        genre: req.body.genre,
        pic: req.body.pic,
    };
    Music_storage_1.default.add(music);
    res.json(music);
});
//all music
router.get('/', (req, res) => {
    let music = Music_storage_1.default.findAll();
    res.json(music);
});
//genre
router.get('/:genre', (req, res) => {
    let music = Music_storage_1.default.find(req.params.genre);
    res.json(music);
});
exports.default = router;
