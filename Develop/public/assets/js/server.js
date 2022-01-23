const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.listen(3001, () => {
    console.log('API server now on port 3001!')
});
