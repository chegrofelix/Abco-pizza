//declaring objects
function pizza(name) {
    this.pizzaName = name;
}

pizza.prototype.nameSize = function() {
    if (this.pizzaName === "Hawaiian BBQ pizza.") {
        return "Hawaiian BBQ pizza.";
    }else if(this.pizzaName === "Cheese Burger.") {
        return "Cheese Burger.";
    }else if(this.pizzaName === "Meat Deluxe.") {
        return "Meat Deluxe.";
    }else if(this.pizzaName === "Chicken Macon BBQ.") {
        return "Chicken Macon BBQ.";
    }else if(this.pizzaName === "Chicken & Beef Pepperoni.") {
        return "Chicken & Beef Pepperoni.";
    }else if(this.pizzaName === "Vegeterian pizza.") {
        return "Vegeterian pizza.";
    }else if(this.pizzaName === "Mozarella cheese pizza.") {
        return "Mozarella cheese pizza.";
    }else if(this.pizzaName === "Spicy Boerewors.") {
        return "Spicy Boerewors.";
    }else {
        //alert("Please select a pizza type to continue");
    };
}
function size(name) {
    this.sizeName = name;
}
size.prototype.priceSize = function() {
    if (this.sizeName === "large") {
        return 1200;
    } else if(this.sizeName === "medium") {
        return 850;
    } else if(this.sizeName === "small") {
        return 500;
    } else {
        //alert("Please select a pizza size");
    }
}
function crust(name) {
    this.crustName = name;
}
crust.prototype.crustPrice = function() {
    if (this.crustName === "stuffed") {
        return 130;
    } else if (this.crustName === "crispy") {
        return 70;
    } else if (this.crustName === "gluten free") {
        return 150;
    } else {
        //alert("Please select a prefferable crust to continue");
    }
}
function topping(name) {
    this.toppingName = name;
}
topping.prototype.toppingPrice = function() {
    if (this.toppingName === "Pepperoni") {
        return 40;
    } else if (this.toppingName === "Mushrooms") {
        return 80;
    } else if (this.toppingName === "Onions") {
        return 25;
    } else if (this.toppingName === "Sausage") {
        return 60;
    } else if (this.toppingName === "Bacon") {
        return 45;
    } else if (this.toppingName === "Extra-cheese") {
        return 70;
    } else if (this.toppingName === "Black-olives") {
        return 85;
    } else if (this.toppingName === "Green-peppers") {
        return 20;
    } else {
        //alert("Please choose topping(s) of your choice");
    }
}
function quantity(name) {
    this.quantityName = name;
}
quantity.prototype.quantityPrice = function() {

}

var pizzaInput = $("#type").val();

pizzaSelect = new pizza(pizzaInput);
pizzaSelect.nameSize();
// alert(pizzaSelect.nameSize());

var sizeInput = $("#size").val();

var pizzaSize = new size(sizeInput);
pizzaSize.priceSize();
// alert(pizzaSize.priceSize());

var crustInput = $("#crust").val();

var crustSize = new crust(crustInput);
crustSize.crustPrice();
// alert(crustSize.crustPrice());


var toppingInput = $("#toppings").val();

var toppingSize = new topping(toppingInput);
toppingSize.toppingPrice();
// alert(toppingSize.toppingPrice());


var quantityInput = $("quantity").val();

var  quantitySize = new quantity (quantityInput);
 quantitySize.quantityPrice();
//  alert(quantitySize.quantityPrice());

// calcTotal to calculate the total pizza summation

var pizzaPrice = (parseInt(parseInt(pizzaSize.priceSize()) + parseInt(crustSize.crustPrice()) + parseInt(toppingSize.toppingPrice())));
$("#summation").append(pizzaPrice);

// S-size, C-crust, T-toppings N-name

var pizzaS = (pizzaSize.priceSize());
$("#psize").append(pizzaS);

var pizzaC = (crustSize.crustPrice());
$("#cprice").append(pizzaC);

var pizzaT = (toppingSize.toppingPrice());
$("#tprice").append(pizzaT);

var pizzaN = (pizzaSelect.nameSize());
$("#ptype").append(pizzaN);
event.preventDefault();


$(document).ready(function() {
    $("#delivery").click(function() {
        alert("For to door deliveries. Please confirm by pressing ok to continue");
        prompt("Please Enter your mobile number");
        prompt("Enter your current location");
    });
});
$(document).ready(function() {
    $("#checkout").click(function() {
        event.preventDefault();
    });
});
