// Text to be typed
const typingText = "Hi everyone, I'm Olayiwola Abdullah (aka Olly), a website development expert, programmer, experienced freelancer and problem solver.";

// Element to display typed text
const typingElement = document.getElementById("typing-text");

// Cursor element
const cursorElement = document.getElementById("cursor");

// Typing speed (ms)
const typingSpeed = 100;

// Index of current character
let charIndex = 0;

// Function to type text
function typeText() {
  // Append next character to typed text
  typingElement.textContent += typingText[charIndex];

  // Move to next character
  charIndex++;

  // Stop typing if text is complete
  if (charIndex >= typingText.length) {
    clearInterval(typingInterval);
    cursorElement.style.animation = "none";
  }
}

// Start typing
const typingInterval = setInterval(typeText, typingSpeed);
