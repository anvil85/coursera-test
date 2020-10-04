(function() {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath', '$filter', '$q'];

    function MenuService($http, ApiPath, $filter, $q) {
        var service = this;

        service.getCategories = function() {
            return $http.get(ApiPath + '/categories.json').then(function(response) {
                return response.data;
            });
        };


        service.getMenuItems = function(category) {
            var config = {};
            if (category) {
                config.params = { 'category': category };
            }

            return $http.get(ApiPath + '/menu_items.json', config).then(function(response) {
                return response.data;
            });
        };

        service.checkMenuItem = function(item) {
            var deferred = $q.defer();

            if (item) {
                item = $filter('uppercase')(item);
            }

            $http.get(ApiPath + '/menu_items/' + item + '.json', true).success(function(response, status, headers, config) {
                    deferred.resolve(response);
                })
                .error(function(errResp) {
                    deferred.reject({ message: "No menu item!" });
                    //throw new Error('No menu item!');
                });
            /*
            .then(function(response) {
                if (response.data.short_name) {
                    return response.data;
                }
                throw new Error('No menu item!');
            });
            */
            return deferred.promise;
        };

    }



})();