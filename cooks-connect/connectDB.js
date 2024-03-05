import dotenv from 'dotenv';
import pg from "pg" 
dotenv.config();

const user = process.env.USERNAME
const use = 'postgres'
const port = process.env.LOCAL_HOST
const db = process.env.DATABASE
const pass = process.env.PASSWORD

var conString = `postgres://${use}:${pass}@localhost:${port}/${db}`;
const connection_url = `postgres://${user}@localhost:${port}/${db}`; 

const client = new pg.Client(conString); 

client.connect().then( 
    console.log("Connected.") 
);
