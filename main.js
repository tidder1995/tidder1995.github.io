angular.module("redditSearch", [])
.controller("RedditSearchController", function($scope) {
	$scope.searchUrl = "http://www.independent.co.uk/news/world/americas/rare-fire-rainbow-spotted-in-sky-over-south-carolina-10462125.html";
	if (location.search.length > 0) {
		$scope.searchUrl = location.search.replace(/^(\?+)/, "");
	}
	$scope.searchClick = function() {
		$scope.loading = true;
		$scope.noPostsFound = false;
		$.ajax({
			url: "http://198.199.123.100/reversereddit/api/v1.0/search",
			type: "POST",
			data: JSON.stringify({url:$scope.searchUrl}),
			success: function(data) {
				console.log(data);
				$scope.links = data;
				$scope.loading = false;
				if (data.length === 0) {
					$scope.noPostsFound = true;
				} else {
					$scope.noPostsFound = false;
				}
				$scope.$digest();
			},
			failure: function(errorMsg) {
				console.log(errorMsg);
				$scope.loading = false;
				$scope.noPostsFound = true;
				$scope.$digest();
			},
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			async: true
		});
	}
	$scope.searchClick();
});