const {Pool} = require('pg');
require('dotenv').config();


module.exports= new Pool({
    host:"localhost",
    user:'postgres',
    database:'message_store',
    password: 'BMB8DB4L9RQ',
    port:5432
})