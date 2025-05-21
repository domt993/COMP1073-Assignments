
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

//the content that will be selected to be apart of the sentence selectors
//initialization and declaration
const nounSelector = document.querySelector(`tbody tr:nth-of-type(1) td:nth-of-type(${nounClick})`);
const verbSelector = document.querySelector(`tbody tr:nth-of-type(1) td:nth-of-type(${verbClick})`);
const adjSelector = document.querySelector(`tbody tr:nth-of-type(1) td:nth-of-type(${adjClick})`);
const secondNounSelector = document.querySelector(`tbody tr:nth-of-type(1) td:nth-of-type(${nounClick})`);
const placeSelector = document.querySelector(`tbody tr:nth-of-type(1) td:nth-of-type(${nounClick})`);
const styleElement = document.createElement("style");
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
