const db = require('../../db/queries');


const insert_messages_post = async (req,res) => {
    const {author,messageText} = req.body;
    let recived = new Date();
    await db.insert_messages(author,messageText,recived);
    res.redirect('/message/');
}
const getAllMessages = async (req,res)=>{
    const message = await db.select_all_messages();
    res.render('index',{data:message});
}
const getById = async (req, res) => {
    try {
        const messageId = parseInt(req.params.id, 10); 
        if (isNaN(messageId) || messageId <= 0) { 
            return res.status(400).send('Invalid ID'); 
        }
        
        const row = await db.select_message_by_id(messageId);
        if (row) {
            res.render('message', { row });
        } else {
            res.status(404).send('Message not found'); 
        }
    } catch (error) {
        console.error('Error fetching message', error);
        res.status(500).send('Internal Server Error');
    }
};


module.exports={
    insert_messages_post,
    getAllMessages,
    getById
}