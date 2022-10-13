const express = require("express");
const app = express();

const port = 3001;
app.use(express.urlencoded({ extended: true }));

app.use(express.static('client'))

app.get('/', (req, res) => {
    res.json({status: 'success'})
  })

app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`)
  })

