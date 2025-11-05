let count = 0;

function updateDisplay() {
    document.getElementById('counter').textContent = count;
}

function incrementCounter() {
    count++;
    updateDisplay();
    animateCounter();
}

function decrementCounter() {
    count--;
    updateDisplay();
    animateCounter();
}

function resetCounter() {
    count = 0;
    updateDisplay();
    animateCounter();
}

function animateCounter() {
    const display = document.getElementById('counter');
    display.style.transform = 'scale(1.2)';
    setTimeout(() => {
        display.style.transform = 'scale(1)';
    }, 200);
}

function showAlert(topic) {
    alert(`You clicked to learn more about: ${topic}!\n\nThis is a demo interaction. In a real site, this would open a modal or navigate to another page.`);
}

// Add smooth transition to counter
document.getElementById('counter').style.transition = 'transform 0.2s ease';

// Add a welcome message when page loads
window.addEventListener('load', () => {
    console.log('Welcome! Website loaded successfully.');
});