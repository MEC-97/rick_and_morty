const express = require('express');
const router = require('./routes/index2.');
const server = express();
const PORT = 3001;

server.use(express.json())
server.use("/",router)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
