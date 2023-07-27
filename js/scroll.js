// Function to handle smooth scrolling to the selected section
function smoothScroll(target) {
    const element = document.getElementById(target);
    const yOffset = -60; // Adjust this value to fine-tune the scroll position
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

// Event listener for navigation links
const navLinks = document.querySelectorAll('#toolbar a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = link.getAttribute('href').substring(1); // Get the href value without the leading '#'
        smoothScroll(target);
    });
});
