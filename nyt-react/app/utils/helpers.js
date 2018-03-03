var axios = require('axios');
var NYT_API_KEY = '176de61bd1f04794991a645a9eb27720';

var helpers = {

	runQuery: function(term, start, end) {
		var params = {
			'term': term,
			'start': start,
			'end': end
		};
 
		var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + NYT_API_KEY + "&q=" + term;
		console.log(queryURLBase);
		return axios.get(queryURLBase, params)
			.then(function (response) {
			    return response.data.response.docs;
			 })
			.catch(function (error) {

				console.log(error);
				return[];
			});
	},



	getSaved: function() {

		return axios.get('/api/saved').then( function (results){
			console.log(results);
			return results.data;
		});
		
	},

	postSaved: function(title, date, url) {
		var newArticle = { title: title, date: date, url: url };

		return axios.post('/api/saved', newArticle)
					.then(function(results) {
						return results.data;
					});
	}

};

module.exports = helpers;