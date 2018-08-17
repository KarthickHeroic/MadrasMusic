const express = require('express');
const router = express.Router();
const axios = require('axios')

const postAPI = 'https://service.madrasmusic.com/MMService.svc/GetNewReleases'
router.get('/',(req, res)=>{
    axios.get(`${postAPI}`).then(posts=>
    {
        // res.writeHead(200, { "Content-Type": "application/json" });
        // res.end(JSON.stringify(posts.data));

        console.log(posts.data);
        res.json(posts.data)
        console.log(posts.data);
    }).catch(error=>{
        res.status(500).send(error);
    })
    res.send('POST WORKS')
});
module.exports = router;