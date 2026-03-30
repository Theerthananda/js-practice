let count = 0;

let peopleCountElement = document.getElementById("peopleCount");
let saveElement = document.getElementById("save-ele");
console.log(peopleCountElement.textContent);
console.log(saveElement.textContent);

function incrementCount() {
    count++;
   // console.log(peopleCountElement.outerHTML);
    // console.log(saveElement.outerHTML);   
    peopleCountElement.textContent = count;
}

function decrementCount() {
    if (count > 0) {
        count--;
        peopleCountElement.textContent = count;
    }
}

function save() {
    let saved = count + " - ";
    saveElement.textContent += saved;

    count = 0;
    peopleCountElement.textContent = count   //here used textContent instead of innerText because it is faster than innerText and it does not trigger a reflow of the page, which can improve performance.
}


//diff between textContent and innerText and innerHTML and outerHTML and outerText
// textContent: It returns the text content of an element and all its descendants. It does not include any HTML tags or formatting. It is used to get or set the text content of an element.    
// innerText: It returns the visible text content of an element, including any formatting and line breaks. It is used to get or set the visible text content of an element.
// innerHTML: It returns the HTML content of an element, including any child elements and their attributes. It is used to get or set the HTML content of an element.
// outerHTML: It returns the HTML content of an element, including the element itself and its attributes. It is used to get or set the entire HTML content of an element, including the element itself.
// outerText: It is not a standard property in JavaScript. It may be a custom property defined in some libraries or frameworks, but it is not widely supported or recognized in standard JavaScript.    
