"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musics = [];
function add(music) {
    musics.push(music);
}
function findAll() {
    return musics;
}
function remove(id) {
    let i = musics.findIndex(music => music.id === id);
    musics.splice(i, 1);
}
function find(genre) {
    // let ms: Music[] = []
    // for (const music of musics) {
    //   if (music.genre === genre)
    //   ms.push(music)
    // }
    let ms = musics.filter(music => music.genre === genre);
    return ms;
}
function update(id, newMusic) {
    let i = musics.findIndex(music => music.id === id);
    newMusic.id = id;
    musics[i] = newMusic;
}
exports.default = {
    add,
    findAll,
    remove,
    find,
    update
};
