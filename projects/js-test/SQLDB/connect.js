import  sqlite3 from 'sqlite3';
const sql = sqlite3.verbose();

const db = new sql.Database('./database.db',sqlite3.OPEN_READWRITE,connected);



function connected(err){
    if(err){
        console.log(err);
    }else{
        console.log('Connected to database');
    }
}

let sqlQuery = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
)`;
db.run(sqlQuery,[],()=>{
    // callback function
    console.log('Query executed')
}  )


export default db;