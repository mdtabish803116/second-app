const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = ''; // Stores the current input

// Handle Button Clicks
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    // Clear Button Logic
    if (button.id === 'clear') {
      currentInput = '';
      display.textContent = '';
      return;
    }

    // Equal Button Logic
    if (button.id === 'equal') {
      try {
        // Handle Division by Zero
        if (currentInput.includes('/0')) {
          alert('Cannot divide by zero');
          currentInput = '';
          display.textContent = '';
          return;
        }
        currentInput = eval(currentInput); // Evaluate Expression
        display.textContent = currentInput;
      } catch (error) {
        alert('Invalid Operation');
        currentInput = '';
        display.textContent = '';
      }
      return;
    }

    // Append Value to Current Input
    currentInput += value;
    display.textContent = currentInput;
  });
});
