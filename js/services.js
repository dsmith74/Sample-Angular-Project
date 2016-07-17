var apiLocation = 'http://localhost:4000/api';

angular.module('sampleServices', [])
    .factory('SeasonService', function($http){
        return {
            getSeason: function(onSuccess, onError){
                $http.get(apiLocation + '/seasons/' + seasonId)
                .success(function(data, status, headers, config){
                    onSuccess(data["data"]);
                })
                .error(function(data, status, headers, config) {
                    onError(data);
                });
            },
            getSeasons: function(seasonIds, onSuccess, onError){
                console.log(apiLocation + '/seasons?where={"_id": {"$in": ['+seasonIds.join()+']}}');
                $http.get(apiLocation + '/seasons?where={"_id": {"$in": ['+seasonIds.join()+']}}')
                    .success(function(data, status, headers, config){
                        onSuccess(data["data"]);
                    })
                    .error(function(data, status, headers, config) {
                        onError(data);
                    });
            }
        }
    });