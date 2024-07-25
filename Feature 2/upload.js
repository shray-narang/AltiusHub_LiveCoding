const express = require('express')
const app = express()
const port = 3000
const path = require("path");
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("index");
})

app.post('/upload-file', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})