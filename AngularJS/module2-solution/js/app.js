(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    var toBuyList=[
        {name:"Sugary drinks", quantity: 8},
        {name:"Cookies", quantity: 10},
        {name:"Chocolates", quantity: 2},
        {name:"Pizzas", quantity: 4},
        {name:"Snacks", quantity: 3}
    ];
    
    var alreadyBoughtList=[];

    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl=this;
        toBuyCtrl.items=ShoppingListCheckOffService.getItemsToBuy();
        toBuyCtrl.bought=function(index){
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
        function AlreadyBoughtController(ShoppingListCheckOffService) {
            var boughtCtrl=this;  
            boughtCtrl.items=ShoppingListCheckOffService.getBougthItems();
        }

        function ShoppingListCheckOffService(){
        var service=this;
        
        var itemsToBuy=toBuyList;
        var alredyBoughtItems=alreadyBoughtList;
        
        service.buyItem=function(itemIndex){
            var item=itemsToBuy[itemIndex];
            service.addBoughtItem(item);
            removeFromItemsToBuy(itemIndex);
        };

        service.getItemsToBuy=function(){
            return itemsToBuy;
        };
        
        service.getBougthItems=function(){
            return alredyBoughtItems;
        };
        
        service.addBoughtItem=function(item){
            alredyBoughtItems.push(item);
        };
        
        function removeFromItemsToBuy(itemIndex){
            itemsToBuy.splice(itemIndex,1);
        }
    }

})();