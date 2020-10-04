(function() {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MyInfoService', 'MenuService'];

    function SignUpController(MyInfoService, MenuService) {
        var $ctrl = this;
        $ctrl.user = {};
        $ctrl.menuItem = null;
        $ctrl.saved = false;

        $ctrl.submit = function() {
            MenuService.checkMenuItem($ctrl.user.favmenuitem).then(function(response) {
                //console.log("chkMenuItem:", response);
                $ctrl.menuItem = response;
                MyInfoService.user = $ctrl.user;
                MyInfoService.user = $ctrl.user;
                MyInfoService.menuItem = $ctrl.menuItem;
                $ctrl.saved = true;
                MyInfoService.saved = $ctrl.saved;
            }, function error(response) {
                // no menu item
                console.error("No menu item found!");
            });
        };
    }


})();