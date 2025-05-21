
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

//the content that will be selected to be apart of the sentence selectors
//initialization and declaration
let nounSelector = document.querySelector(`tbody tr:nth-of-type(${nounClick}) td:nth-of-type(1)`);
let verbSelector = document.querySelector(`tbody tr:nth-of-type(${verbClick}) td:nth-of-type(2)`);
let adjSelector = document.querySelector(`tbody tr:nth-of-type(${adjClick}) td:nth-of-type(3)`);
let secondNounSelector = document.querySelector(`tbody tr:nth-of-type(${nounClick}) td:nth-of-type(4)`);
let placeSelector = document.querySelector(`tbody tr:nth-of-type(${nounClick}) td:nth-of-type(5)`);
// creating a style element to show what is selected when the button is clicked
const styleElement = document.createElement("style");
// css styling that corresponds to button clicks
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
//append the style element to the head
head.append(styleElement);
// creating the sentence with the selectors to display on the page
sentence.textContent = `${nounSelector.textContent} ${verbSelector.textContent} ${adjSelector.textContent} ${secondNounSelector.textContent} ${placeSelector.textContent}` ;
// button event listeners
noun.addEventListener("click", function () {
    // increment the nounClick variable to move the selector down the table
    // if the variable is greater than the number of rows in the table, reset it to 1
    if (nounClick > 6) {
        nounClick = 1;
    }
    else {
        nounClick++;
    }
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
    // updating the nounSelector variable to show the selected noun
    nounSelector = document.querySelector(`tbody tr:nth-of-type(${nounClick}) td:nth-of-type(1)`);
    // updating the sentence variable to show the the complete sentence
    sentence.textContent = `${nounSelector.textContent} ${verbSelector.textContent} ${adjSelector.textContent} ${secondNounSelector.textContent} ${placeSelector.textContent}` ;
});
verb.addEventListener("click", function () {
    // increment the verbClick variable to move the selector down the table
    // if the variable is greater than the number of rows in the table, reset it to 1
    if (verbClick > 5) {
        verbClick = 1;
    }
    else {
        verbClick++;
    }
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
    // updating the verbSelector variable to show the selected noun
    verbSelector = document.querySelector(`tbody tr:nth-of-type(${verbClick}) td:nth-of-type(2)`);
    // updating the sentence variable to show the the complete sentence
    sentence.textContent = `${nounSelector.textContent} ${verbSelector.textContent} ${adjSelector.textContent} ${secondNounSelector.textContent} ${placeSelector.textContent}` ;
});
adj.addEventListener("click", function () {
    // increment the adjClick variable to move the selector down the table
    // if the variable is greater than the number of rows in the table, reset it to 1
    if (adjClick > 5) {
        adjClick = 1;
    }
    else {
        adjClick++;
    }
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
    // updating the adjSelector variable to show the selected noun
    adjSelector = document.querySelector(`tbody tr:nth-of-type(${adjClick}) td:nth-of-type(3)`);
    // updating the sentence variable to show the the complete sentence
    sentence.textContent = `${nounSelector.textContent} ${verbSelector.textContent} ${adjSelector.textContent} ${secondNounSelector.textContent} ${placeSelector.textContent}` ;
});
secondNoun.addEventListener("click", function () {
    // increment the secondNounClick variable to move the selector down the table
    // if the variable is greater than the number of rows in the table, reset it to 1
    if (secondNounClick > 6) {
        secondNounClick = 1;
    }
    else {
        secondNounClick++;
    }
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
    // updating the secondNounSelector variable to show the selected noun
    secondNounSelector = document.querySelector(`tbody tr:nth-of-type(${secondNounClick}) td:nth-of-type(4)`);
    // updating the sentence variable to show the the complete sentence
    sentence.textContent = `${nounSelector.textContent} ${verbSelector.textContent} ${adjSelector.textContent} ${secondNounSelector.textContent} ${placeSelector.textContent}` ;
});
place.addEventListener("click", function () {
    // increment the placeClick variable to move the selector down the table
    // if the variable is greater than the number of rows in the table, reset it to 1
    if (placeClick > 5) {
        placeClick = 1;
    }
    else {
        placeClick++;
    }
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
    // updating the placeSelector variable to show the selected noun
    placeSelector = document.querySelector(`tbody tr:nth-of-type(${placeClick}) td:nth-of-type(5)`);
    // updating the sentence variable to show the the complete sentence
    sentence.textContent = `${nounSelector.textContent} ${verbSelector.textContent} ${adjSelector.textContent} ${secondNounSelector.textContent} ${placeSelector.textContent}` ;
});

