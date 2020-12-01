const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render('new.ejs');
})

router.post("/", (req, res) => {
    res.json([{
        name: 'Arjun Porwal',
        age: 18
    },{
        name: 'Arjun',
        age: 19
    }])
})


module.exports = router;