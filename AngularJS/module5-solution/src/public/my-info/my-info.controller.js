(function() {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MyInfoService'];

    function MyInfoController(MyInfoService) {
        var $ctrl = this;
        $ctrl.user = MyInfoService.user;
        $ctrl.menuItem = MyInfoService.menuItem;
        $ctrl.saved = MyInfoService.saved;
    }


})();