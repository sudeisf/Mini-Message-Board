const express = require('express');
const path = require('path');
const router = require('./route/message_route');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetPath = path.join(__dirname, 'public');
app.use(express.static(assetPath));
app.use('/message',router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
