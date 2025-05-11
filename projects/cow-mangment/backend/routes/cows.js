const express = require("express");
const Cow = require("../models/Cow");
const router = express.Router();

//Add a new cow
router.post("/",async (req,res) => {
    try{
        const cow = new Cow(req.body);
        await cow.save();
        res.status(201).json(cow); 
    }catch(err){
        res.status(400).json({ error:err.message });
    }
});

//Get all cows
router.get("/", async (req,res) => {
    try {
        const cows = await Cow.find();
        res.json(cows);
    }catch (err){
        res.status(500).json({error:err.message})
    }
})

//Update a cow handle the route to go id of cow 
router.put('/:id', async (req,res) => {
    try {
        const cow = await Cow.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(cow);

    }catch (err){
        res.status(400).json({ error: err.message });
    }
});

//Delete a cow 

router.delete("/:id",async (req,res) => {
    try {
        await Cow.findByIdAndDelete(req.params.id);
        res.json({ message: "Cow deleted successfully"});
    } catch (err) {
        res.status(400).json({error:err.message});
    }
});

module.exports = router;