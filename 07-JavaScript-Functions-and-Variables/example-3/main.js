// Your scripts here

// What kind of things can you do with JavaScript in the browser?

// Get a refernce to DOM elements 
const button_1 = document.getElementById('button-1');
const button_2 = document.getElementById('button-2');
const titleElement = document.getElementById('title');

const num_button = document.getElementById('numulator');
const num_input = document.getElementById('input-num');
const pow_input = document.getElementById('input-pow');
const num_display = document.getElementById('num-display');

// Set the content and style of an element 
titleElement.innerHTML = '- Ready -';
titleElement.style.color = '#398fc4';


// Handle events 

// Add an event listener to button_1
button_1.onclick = (e) => {
  titleElement.style.color = '#22dd11';
  titleElement.innerHTML = 'Run!';
};

// Add an event listener to button_2
button_2.onclick = (e) => {
  titleElement.style.color = '#dd2211';
  titleElement.innerHTML = 'Pause!';
}



let numulation = 0;


num_button.onclick = (e) => {
  // get the value from the input 
  const num = num_input.value;
  const pow = pow_input.value;
  numulation += num * pow;
  num_display.innerHTML = numulation;
}








