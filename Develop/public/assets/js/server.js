const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('Routes/apiRoutes');
const htmlRoutes = require('Routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming Json data
app.use(express.json());
// takes incoiming POST data and converts to key/value pairing that can accessed in req.body
app.use(express.static('public'));


app.listen(3001, () => {
    console.log('API server now on port 3001!')
});
