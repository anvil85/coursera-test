(function() {
    "use strict";

    angular.module('common')
        .service('MyInfoService', MyInfoService);


    MyInfoService.$inject = ['$http', 'ApiPath', '$filter', 'MenuService'];

    function MyInfoService($http, ApiPath, $filter, MenuService) {
        var service = this;
        service.user = {};
        service.menuItem = {};
        service.saved = false;

        service.getUserInfo = function() {
            return service.user;
        };

        service.saveUserInfo = function(user) {
            service.user = user;
        };

        service.checkMenuItem = function(user) {
            var item = MenuService.checkMenuItem(user.favmenuitem);
            //console.log('service.checkMenuItem:', $filter('uppercase')(item));
        };

        service.getMenuItem = function() {
            return service.menuItem;
        };
        service.isSaved = function() {

            return service.saved;

        };
    }
})();