const pool = require('./pool');


const insert_messages = async (user,messgae, recived) => {
    await pool.query('INSERT INTO messages (user_name,message_text,recived) values ($1,$2,$3)',[user,messgae,recived]);
}

const select_all_messages = async ()=> {
     const {rows}= await pool.query('SELECT * FROM messages');
     return rows;
}
const select_message_by_id = async (id) => {
    try {
        const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
        console.log('Query result:', rows); 
        return rows[0]; 
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};



module.exports ={
    insert_messages,
    select_all_messages,
    select_message_by_id
}