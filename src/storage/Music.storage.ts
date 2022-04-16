import { nanoid } from "nanoid";
import cors from "cors";
import Music from "../model/Music.model";

const musics: Music[] = [];




function add(music: Music){
  musics.push(music)
}

function findAll() {
return musics
}

function remove (id: string) {
  let i = musics.findIndex( music => music.id === id)
  musics.splice(i, 1)
}

function find ( genre:string ){
  // let ms: Music[] = []
  // for (const music of musics) {
  //   if (music.genre === genre)
  //   ms.push(music)
  // }
  let ms = musics.filter( music => music.genre === genre);
  return ms
}

function update(id: string, newMusic: Music){
  let i = musics.findIndex( music => music.id === id)
  newMusic.id = id
  musics[i] = newMusic
}


export default {
  add,
  findAll,
  remove,
  find,
  update
}