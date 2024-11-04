// Select all elements with class "number"
const number = document.querySelectorAll(".number");

// Select the screen input field
const screen = document.querySelector(".screen input");

// Select input element with the value of "AC"
const AC = document.querySelector('input[value="AC"]');

// Select 

// Clear the screen
AC.onclick = () => {
    screen.value = '';
};

//Loop over each number button
number.forEach(button => {
    button.onclick = () => {
        screen.value += button.value;
    };
});

