const express = require("express");
const router = express.Router();
const { default: Axios } = require("axios");

router.get("/", (req, res) => {
    Axios.get("http://newsapi.org/v2/top-headlines?country=in&apiKey=5a9e99af783440558fbe459cad866e31")
        .then(news => {
            res.render('news.ejs', { news: news.data });
        })
        .catch(err => {
            res.render('news.ejs', { err });
        })
})



module.exports = router;