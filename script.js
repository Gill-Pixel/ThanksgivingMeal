const thanksgivingMeal = {
    starter: {
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180,
    },
    entree: {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables: {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio",
        },
        sides: {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese",
        },
        calories: 450,
    },
    dessert: {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300,
    },
    total_cost: 25.0,
    senior_discount: 0.10,
    prettyPrint: function () {
        // Collate the menu here
        let menuStr = `<br>`;
        menuStr += `Starter: ${this.starter.fruit}, ${this.starter.wine}<br>`;
        menuStr += `Entree: ${this.entree.meat}, ${this.entree.alt}<br>`;
        menuStr += `Vegetables: ${this.entree.vegetables.potatoes}, ${this.entree.vegetables.greens}, ${this.entree.vegetables.salad}<br>`;
        menuStr += `Sides: ${this.entree.sides.bread}, ${this.entree.sides.pasta}<br>`;
        menuStr += `Dessert: ${this.dessert.ice_cream}, ${this.dessert.cake}<br>`;

        document.getElementById("fullMeal").innerHTML = menuStr;
    },
    totalPrice: function (isSenior) {
        // Display the total price, given the indicator isSenior - true or false
        let price = this.total_cost;
        if (isSenior) {
            price *= 1 - this.senior_discount;
        }

        document.getElementById("totalPrice").textContent = `$${price.toFixed(2)}`;
    },
    totalCalories: function () {
        // Add the total calories
        const totalCalories =
            this.starter.calories +
            this.entree.calories +
            this.dessert.calories;

        document.getElementById("totalCalories").textContent = totalCalories;
    },
    caloriesFrom: function (indicator) {
        // Get the total calories for the indicator
        // 1 - starter, 2 - entree, 3 - dessert
        let calories;
        switch (indicator) {
            case 1:
                calories = this.starter.calories;
                break;
            case 2:
                calories = this.entree.calories;
                break;
            case 3:
                calories = this.dessert.calories;
                break;
            default:
                calories = 0;
        }

        document.getElementById("calorieInfo").textContent = `Calories from ${indicator}: ${calories}`;
    },
};

// Call the methods and display the results
thanksgivingMeal.prettyPrint();
thanksgivingMeal.totalPrice(false); //true for senior discount
thanksgivingMeal.totalCalories();
thanksgivingMeal.caloriesFrom(1); //indicator as needed
