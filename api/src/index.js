var dotenv = require('dotenv').config();
var express = require('express');
var cors = require('cors');

var app = express();
//dotenv.config({ path: '.env'});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/contact", require('./routes/index.routes').contactRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello World!"});
})

app.listen(process.env.API_PORT, () => {
  console.log(`Server port ${process.env.API_PORT}: \x1b[32m%s\x1b[0m`, "online");
});