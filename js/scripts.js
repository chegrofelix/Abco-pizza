//declaring objects
function pizza(name) {
    this.pizzaName = name;
}

pizza.prototype.nameSize = function() {
    if (this.pizzaName === "Chicken Hawaiian.") {
        return "Chicken Hawaiian.";
    }else if(this.pizzaName === "Cheese Burger.") {
        return "Cheese Burger.";
    }else if(this.pizzaName === "Meat Deluxe.") {
        return "Meat Deluxe.";
    }else if(this.pizzaName === "Chicken Macon BBQ.") {
        return "Chicken Macon BBQ.";
    }else if(this.pizzaName === "Chicken & Beef Pepperoni.") {
        return "Chicken & Beef Pepperoni.";
    }else if(this.pizzaName === "Veg Feast.") {
        return "Veg Feast.";
    }else if(this.pizzaName === "Roast Veg & Feta.") {
        return "Roast Veg & Feta.";
    }else if(this.pizzaName === "Spicy Boerewors.") {
        return "Spicy Boerewors.";
    }else {
        alert("Please select a pizza type to continue");
    };
}
function size(name) {
    this.sizeName = name;
}