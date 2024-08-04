const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetPath = path.join(__dirname, 'public');
app.use(express.static(assetPath));

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date()
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date()
    }
];

app.get('/new', (req, res) => {
    res.render('form');
});

app.post('/new', (req, res) => {
    const { author, messageText } = req.body;
    messages.push({ text: messageText, user: author, added: new Date() });
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages: messages });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
