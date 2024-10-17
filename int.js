
const buttons = document.querySelectorAll('.rating-btn');
const submitButton = document.querySelector('.submit');
const card = document.querySelector('.card');
const thankYouMessage = document.querySelector('.thank-you-message');
const selectedRatingNumber = document.getElementById('selected-rating-number');  
//Variable value
let selectedRating = 0;

// active button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active
        buttons.forEach(btn => btn.classList.remove('active'));
        // add active 
        button.classList.add('active');
        // Store number
        selectedRating = button.textContent;
    });
});

// Card thank you
submitButton.addEventListener('click', () => {
    if (selectedRating > 0) { //Check the selected value
        card.style.display = 'none'; //Hide card
        selectedRatingNumber.textContent = selectedRating; 
        thankYouMessage.style.display = 'block'; // show thank you
    } else {
        alert("Please select a rating before submitting!");
    }
});