var pg = require('pg'); 
const connection_url = "postgres://steven@localhost:5432/cs411"; 

var client = new pg.Client(connection_url); 

client.connect().then( 
    console.log("Connected.") 
);