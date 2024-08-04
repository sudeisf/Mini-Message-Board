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

// Assuming messages are indexed by a unique id or position
app.get('/message/:id', (req, res) => {
    const messageId = parseInt(req.params.id, 10);
    const message = messages[messageId];
    if (message) {
        res.render('message', { message });
    } else {
        res.status(404).send('Message not found');
    }
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
