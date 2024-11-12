// Typing Effect with Spaces
const typingText = document.getElementById('typing-text');
const text = typingText.textContent;
typingText.textContent = '';  // Clear content

let index = 0;
function type() {
    if (index < text.length) {
        // Add each character, including spaces, one by one
        typingText.textContent += text.charAt(index);  // Add character, including spaces
        index++;

        // Delay for typing effect
        setTimeout(type, 50);  // ms per character
    }
}

// Start typing when the page loads
window.onload = type;

