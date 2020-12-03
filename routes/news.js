const express = require("express");
const router = express.Router();
const { default: Axios } = require("axios");

router.get("/", (req, res) => {
    res.render('new.ejs');
})

router.post("/", (req, res) => {
    // await fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(response => {
    //     response.json()
    //     console.log(response)
    //     })
    //     .then(data => {
    //         console.log(data)
    //         res.json(data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(data => {
            res.json(data.data)
        })
        .catch(err => {
            console.log(err)
        })
})


module.exports = router;