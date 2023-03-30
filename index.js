const express = require('express');

const app = express();

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/index'));

app.listen(5000, (err)=>{
    if (err) { console.log('can run on port 5000'); return; }
    console.log('running on 5000');
})