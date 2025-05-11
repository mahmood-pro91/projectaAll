import sqlite3 from 'sqlite3'


const sql =sqlite3.verbose();
const PORT = import.meta.env.DB_PORT
const db = new sql.Database("./Clients.db",sqlite3.OPEN_READWRITE,connected);

function connected(err){

    if(err){
        console.log(`Massage : ${err}`)
    }else{
        console.log("Connected to Database")
    }
}

let sqlQuery = `CREATE TABLE IF NOT EXISTS Clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    position TEXT NOT NULL,
    socialNumber TEXT NOT NULL,
    phone TEXT NOT NULL,
    paymentDate TEXT NOT NULL,
    )`;
    db.run(sqlQuery,[],() => {
        // CallBack Function 
        console.log(` Database is Running at Port : ${PORT} `)
    })

export default db ;