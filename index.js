// JavaScript Event Listener Lab

//Global Variables
const input = document.getElementById('button');


// Event Handlers
// with refactored arrow function:
function addingEventListener() {
    input.addEventListener('click', () => alert('I was clicked'));
};

addingEventListener(); // Output: 'I was clicked'

// with anonymous function:
function addingEventListener1() {
    input.addEventListener('click', function() {
        console.log("I was clicked!");
    })
}

// addingEventListener1(); // Output: 'I was clicked!'



// Lab Solution:
const input1 = document.querySelector('#button');

function addingEventListener3() {
    input1.addEventListener('click', function(event) {
        console.log("clicked");
    });
}

// addingEventListener3(); //LOG: click