const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/:id', express.static('public'));



app.listen(port, () => { 
  console.log(`carousel service listening on port ${port}`);
})
