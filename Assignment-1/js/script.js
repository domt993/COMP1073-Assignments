let nounSelector, placeSelector, verbSelector, adjSelector, secondNounSelector;
// click counter variable initialization and declaration
let nounClick = 1;
let verbClick = 1;
let adjClick = 1;
let secondNounClick = 1;
let placeClick = 1;

//button element variable initialization and declaration 
const head = document.querySelector("head");
const noun = document.querySelector("#noun");
const verb = document.querySelector("#verb");
const adj = document.querySelector("#adjective");
const secondNoun = document.querySelector("#secondNoun");
const place = document.querySelector("#place");
const sentence = document.querySelector("#finalSentence")
const surprise = document.querySelector("#randomize");

// creating style element to be able to the selected words
const styleElement = document.createElement("style");
//append the style element to the head
head.append(styleElement);

//calling update function to update the selected words
update();

// noun button event listeners
noun.addEventListener("click", function () {
    // calling clicks function to handle the click variable and reset it if it exceeds the maximum number of rows
    nounClick = clicks(nounClick, 5);
    // calling the update function to show the new selected word
    update("noun");
});

// verb button event listener
verb.addEventListener("click", function () {
    // calling clicks function to handle the click variable and reset it if it exceeds the maximum number of rows
    verbClick = clicks(verbClick, 5);
    // calling the update function to show the new selected word
    update("verb");
});

// adjective button event listener
adj.addEventListener("click", function () {
    // calling clicks function to handle the click variable and reset it if it exceeds the maximum number of rows
    adjClick = clicks(adjClick, 5);
    // calling the update function to show the new selected word
    update("adj");
});

// second noun button event listener
secondNoun.addEventListener("click", function () {
    // calling clicks function to handle the click variable and reset it if it exceeds the maximum number of rows
    secondNounClick = clicks(secondNounClick, 6);
    // calling the update function to show the new selected word
    update("secondNoun");
});

// place button event listener
place.addEventListener("click", function () {
    // calling clicks function to handle the click variable and reset it if it exceeds the maximum number of rows
    placeClick = clicks(placeClick, 5);
    // calling the update function to show the new selected word
    update("place");
});

// surprise button event listener
surprise.addEventListener("click", function() {
    // randomizing the click variables to move the selector down the table
    // each number is randomized to a number between 1 and the number of rows in the table
    nounClick = Math.floor(Math.random() * 6) + 1;
    verbClick = Math.floor(Math.random() * 5) + 1;
    adjClick = Math.floor(Math.random() * 5) + 1;
    secondNounClick = Math.floor(Math.random() * 6) + 1;
    placeClick = Math.floor(Math.random() * 5) + 1;
    // calling the update function to show the new selected word
    update();
});

// update function
// allows for easy updating of selections whilst also removing reduncdancy of large code blocks and size of the code
function update(element) {
    // updating the style element to show the selected noun
    styleElement.innerHTML = `
    tbody tr:nth-of-type(${nounClick}) td:nth-of-type(1) {
        background-color: rgb(141, 0, 141);
    }
    tbody tr:nth-of-type(${verbClick}) td:nth-of-type(2) {
        background-color: aqua;
    }
    tbody tr:nth-of-type(${adjClick}) td:nth-of-type(3) {
        background-color: green;
    }
    tbody tr:nth-of-type(${secondNounClick}) td:nth-of-type(4) {
        background-color: orange;
    }
    tbody tr:nth-of-type(${placeClick}) td:nth-of-type(5) {
        background-color: rgb(219, 63, 219);
    }
    `;
    // switch to only update the clicked element
    switch (element) {
        case "noun":
            // updating the nounSelector variable to show the selected noun
            nounSelector = document.querySelector(`tbody tr:nth-of-type(${nounClick}) td:nth-of-type(1)`);
            break;
        case "verb":
            // updating the verbSelector variable to show the selected noun
            verbSelector = document.querySelector(`tbody tr:nth-of-type(${verbClick}) td:nth-of-type(2)`);
            break;
        case "adj":
            // updating the adjSelector variable to show the selected noun
            adjSelector = document.querySelector(`tbody tr:nth-of-type(${adjClick}) td:nth-of-type(3)`);
            break;
        case "secondNoun":
             // updating the secondNounSelector variable to show the selected noun
            secondNounSelector = document.querySelector(`tbody tr:nth-of-type(${secondNounClick}) td:nth-of-type(4)`);
            break;
        case "place":
            // updating the placeSelector variable to show the selected noun
            placeSelector = document.querySelector(`tbody tr:nth-of-type(${placeClick}) td:nth-of-type(5)`);
            break;
        default:
            // updating the nounSelector variable to show the selected noun
            nounSelector = document.querySelector(`tbody tr:nth-of-type(${nounClick}) td:nth-of-type(1)`);
            // updating the verbSelector variable to show the selected noun
            verbSelector = document.querySelector(`tbody tr:nth-of-type(${verbClick}) td:nth-of-type(2)`);
            // updating the adjSelector variable to show the selected noun
            adjSelector = document.querySelector(`tbody tr:nth-of-type(${adjClick}) td:nth-of-type(3)`);
            // updating the secondNounSelector variable to show the selected noun
            secondNounSelector = document.querySelector(`tbody tr:nth-of-type(${secondNounClick}) td:nth-of-type(4)`);
            // updating the placeSelector variable to show the selected noun
            placeSelector = document.querySelector(`tbody tr:nth-of-type(${placeClick}) td:nth-of-type(5)`);
            break;
    }
    
    // updating the sentence variable to show the the complete sentence
    sentence.textContent = `${nounSelector.textContent} ${verbSelector.textContent} ${adjSelector.textContent} ${secondNounSelector.textContent} ${placeSelector.textContent}` ;
}

// clicks function
// function to handle the click variables and reset them if they exceed the maximum number of rows
function clicks(clickVar, max) {
    // if the click variable is greater than the maximum number of rows, reset it to 1
    return clickVar > max ? 1 : clickVar + 1;
}