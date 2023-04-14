const axios = require("axios")



function getCharacterById(req, res) {
    const {id} = req.params;

   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
   .then((response) => {
    const { id, status, name, species, image , gender } = response.data;
    res.status(200).json({ id, status, name, species, image, gender})
   })
   .catch (error=> {
    res.status(500).json({error: error.message})
   })
}

module.exports = getCharacterById