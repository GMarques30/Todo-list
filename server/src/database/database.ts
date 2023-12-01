import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const database = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

export default database;