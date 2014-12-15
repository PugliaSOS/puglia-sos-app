angular.module('starter.filters', [])

.filter('authorName', function() {
    return function(author) {
        return /\(([^)]+)\)/.exec(author)[1];
    }
})
