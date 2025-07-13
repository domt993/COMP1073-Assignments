// Smoothie Class
class Smoothie {
    // Properties for the smoothie
    firstFruit;
    secondFruit;
    thirdFruit;
    liquid;
    size;
    // Constructor to initialize smoothie properties
    constructor(firstFruit, secondFruit, thirdFruit, liquid, size) {
        this.firstFruit = firstFruit;
        this.secondFruit = secondFruit;
        this.thirdFruit = thirdFruit;
        this.liquid = liquid;
        this.size = size;
    }
    calculatePrice() {
        // Declare and Initialize the TotalPrice Variable
        let totalPrice = 0;
        // If the second and third fruit are selected as options
        if (this.firstFruit !== "None") {totalPrice += 0.99;}
        if (this.secondFruit !== "None") {totalPrice += 1.99;}
        if (this.thirdFruit !== "None") {totalPrice += 2.99;}
        
        switch (this.liquid) {
            case "water":
                totalPrice += 0.99;
                break;
            case "milk":
                totalPrice += 1.49;
                break;
            case "juice":
                totalPrice += 2.49;
                break;
            default:
                break;
        }

        switch (this.size) {
            case "small":
                totalPrice += 1.99;
                break;
            case "medium":
                totalPrice += 2.99;
                break;
            case "large":
                totalPrice += 3.99;
                break;
            default:
                break;
        }
    return totalPrice;
    }
}

// Storing the form elements in variables
const form = document.getElementById("smoothie-form");
const firstFruitSelect = document.getElementById("first-fruit-select");
const secondFruitSelect = document.getElementById("second-fruit-select");
const thirdFruitSelect = document.getElementById("third-fruit-select");
const liquidSelect = document.getElementById("liquid-select");
const sizeSelect = document.getElementById("size-select");
const smoothieSelect = document.getElementById("smoothie-select");
const smoothieDetails = document.getElementById("smoothie-details");
const totalPriceDisplay = document.getElementById("total-price");

// Smoothie Name Variable 
let smoothieName;

// Smoothie Object Variable
let smoothie;

// Smoothie Array to store all smoothies created by the user
let smoothies = [];