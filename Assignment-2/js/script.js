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
        if (this.secondFruit !== "None") {totalPrice += 1.99;}
        if (this.thirdFruit !== "None") {totalPrice += 2.99;}
        
        switch (this.liquid) {
            case "Water":
                totalPrice += 0; // Free
                break;
            case "Milk":
                totalPrice += 1.49;
                break;
            case "Juice":
                totalPrice += 2.49;
                break;
            default:
                break;
        }

        switch (this.size) {
            case "Small":
                totalPrice += 0; // Free
                break;
            case "Medium":
                totalPrice += 1.99;
                break;
            case "Large":
                totalPrice += 2.99;
                break;
            default:
                break;
        }
    return totalPrice;
    }
}