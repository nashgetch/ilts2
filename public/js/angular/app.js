
(function(){
    var app = angular.module(myApp,[]);
    app.controller('storeController',function(){
    this.product = gem;
    });
});
var gem = {
    name: 'Nash',
    price: 'Infinity',
    description: 'Priceless'
};
