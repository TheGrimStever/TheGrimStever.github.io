angular.module('partySupply')
    .service('productService', function() {

        this.getTest = function() {
            return data;
        };

        this.getProduct = function() {
            return productData;
        }

        this.getProductById = function(id) {
            for (var i = 0; i < productData.length; i++) {
                if (productData[i].id === parseInt(id)) {
                    return productData[i];
                }
            }
        }

        var data = "I'm a string, making sure this works!";

        var productData = [{
            id: 111,
            title: 'batman',
            price: 25,
            description: 'Lorem Ipsum set dolor consecutor',
            image: '../assets/img/batman-filled-party-favor-box.jpg'
        }, {
            id: 222,
            title: 'spider-man',
            price: 52,
            description: 'Ut enim ad minim veniam, quis nostrud',
            image: '../assets/img/spider-man-pinata-kit.jpg'
        }, {
            id: 333,
            title: 'Iron Man',
            price: 25,
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
            image: '../assets/img/iron-man-kids-gloves.jpg'
        }]

    });
