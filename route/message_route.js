const {Router} = require('express');
const  contoller =require('../controller/DB_controller/message_controller');
const useRouter = Router();

useRouter.get('/new', (req, res) => {
    res.render('form');
});

// Assuming messages are indexed by a unique id or position
useRouter.get('/message/:id',contoller.getById);

useRouter.post('/new',contoller.insert_messages_post);

useRouter.get('/',contoller.getAllMessages);


module.exports = useRouter;