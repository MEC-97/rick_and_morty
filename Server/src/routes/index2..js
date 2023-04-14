const { Router } = require("express")
const getCharacterById = require("../controllers/getCharById")
const getCharacterDetail = require("../controllers/getCharDetail");
const fav = require("../utils/favs");
const router = Router();

router.get("onsearch/:id", getCharacterById)

router.get("detail/:id", getCharacterDetail)

router.post("/rickandmorty/favs", (req, res) => {
    fav.push(req.body);
    res.status(200).json({status: "ok"})
})

router.get("/rickandmorty/favs", (req, res) => {
    res.status(200).json(fav)
})

module.exports = router