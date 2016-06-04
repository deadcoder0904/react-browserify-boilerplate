require('whatwg-fetch');
var baseUrl = "http://localhost:3000";
var fetchDataFromUrl = {
	get: function(url) {
		url = baseUrl + url;
		return fetch(url).then(function(res){
			return res.json();
		});
	}
};

module.exports = fetchDataFromUrl;
