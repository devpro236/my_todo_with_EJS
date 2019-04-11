const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
const items = ['Buy Food', 'Cook Food', 'Eat Food'];
const workItems = [];

app.get('/', (req, res) => {
  let day = date.mDate();
  res.render('list', { listTitle: day, newItems: items });
});
app.post('/', (req, res) => {
  var item = req.body.newItem;
  if (req.body.list === 'work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});
app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'work list', newItems: workItems });
});
app.post('/work', (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(8000, () => console.log('serser is running on port 8000'));
