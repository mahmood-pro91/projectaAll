
import db from "./connect.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const PORT = 3002;

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello World! for Db API");
});

const apiUrl = "/api";
/* Get all Data from db */ 
app.get(apiUrl, (req, res) => {
        
        res.set("content-type","application/json")
        const queryall =`SELECT * FROM users`;
        let data = {users:[]}
    
        try{
            db.all(queryall,(err,rows)=>{
                if(err){
                    throw err ; /* throw err catch; */

                }
                    rows.forEach(row =>{
                        data.users.push({id:row.id, name:row.name, email:row.email,password:row.password})
                    });
                    let content = JSON.stringify(data);
                    res.send(`GET ALL DATA from Db throw API \n \n \n  ${content}`);
                    console.log(`Get All Data from Db throw API is successful`);  
            })
            
        }catch(err){
            console.log(`err : ${err.massage}`)
            res.status(460);
            res.send(`GET ALL DATA ERROR : ${err} \n\n  code : 460 `);
        }


    }
); 

app.post(apiUrl, (req, res) => {

    res.set("content-type","application/json")
    const insertUserQuery =`INSERT INTO users (name, email,password) VALUES (?,?,?)`;
    let newid;
    try{
        db.run(insertUserQuery,
            [req.body.name,req.body.email,req.body.password],function(err){
                if(err){
                    throw err ; /* throw err catch; */
                    
                } 
                newid = this.lastID;
                res.status(201);
                let data = {status:201, message:`User Added Successfully with ID : ${newid}`};
                res.send(JSON.stringify(data));   //res.send(JSON.stringify(data));
                console.log(`User Added Successfully with ID : ${newid}`);
            })
    }catch(err){
        console.log(`err : ${err.massage}`)
        res.status(461);
        res.send(`POST ERROR : ${err} \n\n  code : 461 `);
    }

});

app.delete(apiUrl, (req, res) => {
    res.set("content-type","application/json")
    const deleteUserQuery =`DELETE FROM users WHERE id = ?`;
    let id = req.query.id;

    try{
        db.run(deleteUserQuery,[id],function(err){
            if(err) throw err;

            if(this.changes === 1){
                res.status(200);
                res.send(`User Deleted Successfully with ID : ${id}`);
            }else{
                res.status(200);
                res.send(`massage : ${err.massage}`)
            }
        })



    }catch(err){

        console.log(`err : ${err.massage}`)
        res.status(461);
        res.send(`DELETE ERROR : ${err} \n\n  code : 461 \n\n massage : no such id in database was found `);

    }
})


app.listen(PORT, (err) => {
    try {
        console.log(`Server started on port : ${PORT}`);
    } catch (err) {
        console.log(`Error : ${err}`);
    }
});
