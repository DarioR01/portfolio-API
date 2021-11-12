const express = require('express');
const router = express.Router();
const Post = require('../models/Articles');
const { application } = require('express');
const Article = require('../models/Articles');

//Get all Articles
router.get('/', async (req, res) =>{
    try{
        const articles = await Article.find();
        res.status(200).json(articles)
    }catch(err){
        res.json({message:err});
    }
})

//Post articles
router.post('/', async (req, res) =>{
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        author:req.body.author,
        date:req.body.date,
        article:req.body.article,
    })

    try{
        const savedPost = await article.save();
        res.status(200).send({message: 'article saved sucessfully'});
    }catch(err){
        res.json({message: err})
    }
})

router.get('/:articleId', async (req, res) => {
    try{
        const article = await Article.findById(req.params.articleId);
        res.status(200).json(article)
    }catch(err){
        res.json({message:err})
    }
})

module.exports = router;