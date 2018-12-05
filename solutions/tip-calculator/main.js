// Tip Calculator

// Define some variables

const amount_input 			= document.getElementById('amount')
const percent_input			= document.getElementById('percent')
const calculate_button  = document.getElementById('calculate')
const tip_display			 	= document.getElementById('tip')
const total_display 		= document.getElementById('total')


// Register Event Listeners

calculate_button.addEventListener('click', click_calculate)


// Define Event Handlers

function click_calculate(e) {
	// Get values from inputs 
	const percent = Number(percent_input.value) // Convert these to numbers
	const amount = Number(amount_input.value)
	const tip = amount * percent / 100
	const total = amount + tip
	tip_display.innerHTML = tip.toFixed(2)
	total_display.innerHTML = total.toFixed(2)
}