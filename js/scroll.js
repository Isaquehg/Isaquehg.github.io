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

// Function to handle smooth scrolling to the selected section
function smoothScroll(target) {
    const element = document.getElementById(target);
    const yOffset = -60; // Adjust this value to fine-tune the scroll position
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

// Event listener for the "Scroll Down" link
const scrollLink = document.querySelector('#scroll-container a');

scrollLink.addEventListener('click', event => {
    event.preventDefault();
    const target = scrollLink.getAttribute('href').substring(1); // Get the href value without the leading '#'
    smoothScroll(target);
});

// Function to handle smooth scrolling to the selected section
function smoothScroll(target) {
    const element = document.getElementById(target);
    const yOffset = -60; // Adjust this value to fine-tune the scroll position
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

// Event listener for the "Scroll Down" link
const scrollLink_logo = document.querySelector('#link-logo');

scrollLink_logo.addEventListener('click', event => {
    event.preventDefault();
    const target = scrollLink_logo.getAttribute('href').substring(1); // Get the href value without the leading '#'
    smoothScroll(target);
});

// Sidebar function
function openNav() {
    document.getElementById("sidebar").style.width = "350px";
    document.getElementById("toogle-icon").style.display = "none";
}
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("toogle-icon").style.display = "block";
  }
