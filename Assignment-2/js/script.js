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
        
        // Add the price of the first, second, and third fruits chosen by the user to the total price
        if (this.firstFruit !== "None") {totalPrice += 0.99;}
        if (this.secondFruit !== "None") {totalPrice += 1.99;}
        if (this.thirdFruit !== "None") {totalPrice += 2.99;}
        
        // Add the price of the liquid chosen by the user to the total price
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

        // Add the price of the size chosen by the user to the total price
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
const smoothieMessage = document.getElementById("smoothie-message");

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

    // Create a message to display the smoothie creation
    smoothieMessage.textContent = `Your smoothie "${smoothieName}" has been created! Enjoy!`;

    // Set the ID for the smoothie message
    smoothieMessage.id = "smoothie-message-display";

    // Add the smoothie to the smoothies array
    smoothies.push({Name: smoothieName, Smoothie: smoothie});

    // Display the smoothie Name in the dropdown list
    const option = document.createElement("option");

    // Set the value and text content of the option to the smoothie name
    option.value = smoothieName;
    option.textContent = smoothieName;

    // Append the option to the smoothie select dropdown
    smoothieSelect.appendChild(option);
    // Display the smoothie name in the Details Section
    smoothieSelect.value = smoothieName;
    smoothieDetails.innerHTML = `
        <h2>Smoothie Details</h2>
        <p>Smoothie Name: ${smoothieName}</p>
        <p>First Fruit: ${titleCase(smoothie.firstFruit)}</p>
        <p>Second Fruit: ${titleCase(smoothie.secondFruit)}</p>
        <p>Third Fruit: ${titleCase(smoothie.thirdFruit)}</p>
        <p>Liquid: ${titleCase(smoothie.liquid)}</p>
        <p>Size: ${titleCase(smoothie.size)}</p>
        <p>Total Price: $${smoothie.calculatePrice().toFixed(2)}</p>
    `;
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
            <p>First Fruit: ${titleCase(selectedSmoothie.Smoothie.firstFruit)}</p>
            <p>Second Fruit: ${titleCase(selectedSmoothie.Smoothie.secondFruit)}</p>
            <p>Third Fruit: ${titleCase(selectedSmoothie.Smoothie.thirdFruit)}</p>
            <p>Liquid: ${titleCase(selectedSmoothie.Smoothie.liquid)}</p>
            <p>Size: ${titleCase(selectedSmoothie.Smoothie.size)}</p>
            <p>Total Price: $${selectedSmoothie.Smoothie.calculatePrice().toFixed(2)}</p>
        `;
    }
});

// Function to Title Case the Smoothie Details
function titleCase(str) {
    return str.replace(str[0], str[0].toUpperCase());
}