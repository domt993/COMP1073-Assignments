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
let smoothies = [
    {
        Name: "Groovy Smoothie", 
        Smoothie: new Smoothie("apple", "banana", "strawberry", "water", "Medium")
    },
    {
        Name: "Berry Blast",
        Smoothie: new Smoothie("blueberry", "raspberry", "blackberry", "juice", "Large")
    }
];


// Form submission event listener
// Creates a new smoothie object and adds it to the smoothies array
form.addEventListener("submit", (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the smoothie name from the user
    smoothieName = prompt("What would you like to name your smoothie?");
    
    // Create a new Smoothie instance with the values from the form
    smoothie = new Smoothie(firstFruitSelect.value, secondFruitSelect.value, thirdFruitSelect.value, liquidSelect.value, sizeSelect.value);
    totalPriceDisplay.textContent = smoothie.calculatePrice().toFixed(2); // Calculate the price of the smoothie
    // Add the smoothie to the smoothies array
    smoothies.push({Name: smoothieName, Smoothie: smoothie});
    // Display the smoothie Name in the dropdown list
    const option = document.createElement("option");
    option.value = smoothieName;
    option.textContent = smoothieName;
    smoothieSelect.appendChild(option);
    // Reset the form
    form.reset();
});

smoothieSelect.addEventListener("change", (e) => {
    // Show the smoothie details when a smoothie is selected from the dropdown
    const selectedSmoothieName = e.target.value;

    // for each smoothie in the smoothies array, find the one that matches the selected smoothie name
    for (const smoothieObj of smoothies) {
        if (smoothieObj.Name === selectedSmoothieName) {
            selectedSmoothie = smoothieObj;
            break;
        }
    }
    // If the selected smoothie is found, display its details
    if (selectedSmoothie) {
        smoothieDetails.innerHTML = `
            <h2>Smoothie Details</h2>
            <p>Smoothie Name: ${selectedSmoothie.Name}</p>
            <p>First Fruit: ${selectedSmoothie.Smoothie.firstFruit.replace(selectedSmoothie.Smoothie.firstFruit[0], selectedSmoothie.Smoothie.firstFruit[0].toUpperCase())}</p>
            <p>Second Fruit: ${selectedSmoothie.Smoothie.secondFruit.replace(selectedSmoothie.Smoothie.secondFruit[0], selectedSmoothie.Smoothie.secondFruit[0].toUpperCase())}</p>
            <p>Third Fruit: ${selectedSmoothie.Smoothie.thirdFruit.replace(selectedSmoothie.Smoothie.thirdFruit[0], selectedSmoothie.Smoothie.thirdFruit[0].toUpperCase())}</p>
            <p>Liquid: ${selectedSmoothie.Smoothie.liquid.replace(selectedSmoothie.Smoothie.liquid[0], selectedSmoothie.Smoothie.liquid[0].toUpperCase())}</p>
            <p>Size: ${selectedSmoothie.Smoothie.size.replace(selectedSmoothie.Smoothie.size[0], selectedSmoothie.Smoothie.size[0].toUpperCase())}</p>
            <p>Total Price: $${selectedSmoothie.Smoothie.calculatePrice().toFixed(2)}</p>
        `;
    }
});