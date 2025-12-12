// Select main UI elements
const btn = document.getElementById('btnLoad');
const text = document.getElementById('text');

// Handle button click interaction
btn.addEventListener('click', () => {

    // Activate loading state (spinner + disabled)
    btn.classList.add('loading');

    // Simulate process delay before completing the action
    setTimeout(() => {

        // Switch from loading → completed state
        btn.classList.remove('loading');
        btn.classList.add('done');
        btn.innerText = "Done ✓";

        // Display success text
        text.classList.add('show');

        // Trigger confetti animation
        createConfetti();

        // Reset UI back to initial state after delay
        setTimeout(() => {
            btn.classList.remove('done');
            btn.innerText = "Klik Aku!";
            text.classList.remove('show');
        }, 3000);

    }, 2000);
});

/**
 * Generate multiple confetti elements with random directions and colors.
 * Each confetti is positioned at the screen center and animated outward.
 */
function createConfetti() {
    for (let i = 0; i < 100; i++) {

        // Create confetti particle
        const c = document.createElement('div');
        c.classList.add('confetti');

        // Random hue (0–360) for dynamic color variation
        c.style.setProperty('--hue', Math.random() * 360);

        // Random movement direction (X/Y) with wide radius
        c.style.setProperty('--x', (Math.random() - 0.5) * 1000 + "px");
        c.style.setProperty('--y', (Math.random() - 0.5) * 1000 + "px");

        // Append particle to document
        document.body.appendChild(c);

        // Remove particle after animation completes
        setTimeout(() => c.remove(), 1000);
    }
}
