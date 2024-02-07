const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.json({ message : "Hello World!" });
});


router.post("/", (req, res) => {
    res.json({ message : req.body.message });
});


router.put('/:id', (req, res) => {
    res.json({ messageID : req.params.id });
});


router.delete('/:id', (req, res) => {
    res.json({ messageID : req.params.id });
});


router.patch('/like-post/:id', (req, res) => {
    res.json({ messageID : req.params.id });
});


router.patch('/dislike-post/:id', (req, res) => {
    res.json({ messageID : req.params.id });
});



module.exports = router;