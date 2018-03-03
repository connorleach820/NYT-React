var Article = require ('../models/article-schema');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var methodOverride = require("method-override");

// // * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles
router.get('/api/saved', function (request, response){
	Article.find({}).then(function (results){
		response.json(results);

	});
});

router.post('/api/saved', function(request, response){
	console.log(request.body);
	var newArticle = new Article(request.body);

	newArticle.save(function(err, doc) {
		if(err) throw err; 
		response.send(doc);
	});

});

router.delete('/api/:id', function(req, res) {
	Article.find({ _id : req.params.id})
	.remove()
	.then(function () {
		console.log('here');
		res.json({
			
		});
	});
	
});

router.get('*', function (req, res){
	res.sendFile(__dirname + "/public/index.html");
});

module.exports = router;