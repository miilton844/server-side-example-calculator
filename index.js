const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());

app.listen(3001)
app.get('/', function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname+"/calculator.html");
})

app.post('/', function (req, res) {
  console.log(req.body);
  res.send('<h1>result is '+Number(req.body.number1)*Number(req.body.number2)+'</h1>');
})
