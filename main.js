angular.module("redditSearch", [])
.controller("RedditSearchController", function() {
	this.text = "Nijkl text";
	$.ajax({
		url: "http://localhost:5000/reversereddit/api/v1.0/search",
		type: "POST",
		data: JSON.stringify({url:"www.nytimes.com/2015/08/16/technology/inside-amazon-wrestling-big-ideas-in-a-bruising-workplace.html"}),
		success: function(data) {
			console.log(data);
		},
		failure: function(errorMsg) {
			console.log(errorMsg);
		},
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		async: false
	});
});