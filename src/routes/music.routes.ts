import { resolve } from "dns";
import { Router } from "express";
import Music from "../model/Music.model";
import musicStorage  from "../storage/Music.storage"

const router = Router()


router.post('/', (req, res) => {
  
  let music:Music = {
    id: req.body.name,
    name: req.body.name,
    author: req.body.author,
    duration: req.body.duration,
    genre: req.body.genre,
    pic: req.body.pic,
  }

  musicStorage.add(music)
  res.json(music)
})

//all music
router.get('/', (req, res) => {
  let music = musicStorage.findAll()
  res.json(music)
})

//genre
router.get('/:genre', (req, res) => {
  let music = musicStorage.find(req.params.genre)
  res.json(music)
})



export default router