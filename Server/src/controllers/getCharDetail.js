const axios = require("axios")


function getCharacterDetail(req, res) {
    const {id} = req.params;

   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
   .then((response) => {
    const { id, status, name, species, image , gender, origin } = response.data;
    res.status(200).json({ id, status, name, species, image, gender, origin})
   })
   .catch (error=> {
    res.status(500).json({error: error.message})
   })
}

module.exports = getCharacterDetail