angular.module('starter.filters', [])

.filter('authorName', function() {
    return function(author) {
        return /\(([^)]+)\)/.exec(author)[1];
    }
})

.filter('dateFormat', function() {
    return function(dateString) {
        var itMonths = [
            'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
            'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
        ];
        var itDays = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
        var d = new Date(dateString);
        return itDays[d.getDay()] + ', ' +
            d.getDate() + ' ' +
            itMonths[d.getMonth()] + ' ' +
            d.getFullYear() + ' - ' +
            d.toLocaleTimeString();
    }
});
