// JavaScript Event Listener Lab Notes

//Global Variables
const input = document.getElementById('button');


// Event Handlers
// with refactored arrow function:
function addingEventListener() {
    input.addEventListener('click', () => alert('I was clicked'));
};

// addingEventListener(); // Output: 'I was clicked'

// with anonymous function:
function addingEventListener1() {
    input.addEventListener('click', function() {
        console.log("I was clicked!");
    })
}

addingEventListener1(); // Output: 'I was clicked!'

// with named function (works, but doesn't pass test:):
function addingEventListener2() {
    console.log('I was clicked!!!');
    input.addEventListener('click', addingEventListener2);
}

// addingEventListener2(); // Output: 'I was clicked!!!'



// Lab Solution:
const input1 = document.querySelector('#button');

function addingEventListener3() {
    input1.addEventListener('click', function(event) {
        console.log("clicked");
    });
}

// addingEventListener3(); //LOG: click




/*
// Create Event Listeners on DOM Nodes with addEventListener()
call addEventListener() method on the element we want to add the listener to, & pass it 2 arguments:
    1. the name of the event to listen for, &
    2. a callback function to "handle" the event
*/

// DevTools Example:
const input3 = document.getElementById('button');

input3.addEventListener('click', function(){
    alert('I was clicked!');
});

/*
First, we grab the element that we want to add the event listener to and save a reference to it in the input variable
Next, we call addEventListener() on that element to tell JavaScript to listen for the event. We pass two arguments to addEventListener():
the name of the event to listen for (in this case, click) & a callback function that will be executed when the event is "heard"
*/

// take a look at the 2nd argument (anonynmous):
function(){
    alert('I was clicked!'); 
}

input.addEventListener('click', () => alert('I was clicked!')); // the 2nd argument is an anonymous function (it executes when it detects the event)

// take a look at the 2nd argument (named function):
function clickAlert() {
    alert('I was clicked!');
}

input.addEventListener('click', clickAlert); // the 2nd argument's a named function

/*
NOTE: we pass clickAlert as the argument, not clickAlert(). This is because we don't want to invoke the function in this line of code. Instead, we want
to pass a reference to the function to addEventListener() so it can call the function when the time comes.
*/