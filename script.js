document.addEventListener('DOMContentLoaded', function() {

    // Function to toggle the display of the next sibling element
    function toggleDisplay() {
        const content = this.nextElementSibling; // 'this' is the clicked title/header element
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block'; // Show the content
        } else {
            content.style.display = 'none'; // Hide the content
        }
    }

    // --- Timeline Event Toggle Logic ---
    // Find all elements with the class 'event-header'
    const eventHeaders = document.querySelectorAll('.event-header');

    // Add click listener to each event header
    eventHeaders.forEach(header => {
        header.addEventListener('click', toggleDisplay);
    });
    // --- End Timeline Event Toggle Logic ---


    // --- Expandable Section Toggle Logic (for other tabs) ---
    // Find all elements with the class 'section-title'
    const sectionTitles = document.querySelectorAll('.section-title');

    // Add click listener to each section title
    sectionTitles.forEach(title => {
        title.addEventListener('click', toggleDisplay);
    });
    // --- End Expandable Section Toggle Logic ---

    // --- Optional: Smooth scrolling for tab links ---
    document.querySelectorAll('.tabs-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Scroll to element, adjust for padding/header
                    behavior: 'smooth' // Smooth animation
                });
            }
        });
    });
    // --- End Smooth scrolling ---

});