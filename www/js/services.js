angular.module('starter.services', [])

.factory('feed', function($http) {
    return function(success, error) {
        $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?' +
            'v=1.0&num=50&callback=JSON_CALLBACK&q=' + 
            'http://pugliasos.it/index.php?format=feed&type=rss'
        )
            .success(success)
            .error(error);
    };
});
