// Listen to scroll event
window.addEventListener('scroll', () => {
    // Get the sticky header element
    const header = document.getElementById('stickyHeader');
    
    // Check if we have scrolled past 100px from top of page
    if (window.pageYOffset > 100) {
        // Add 'scrolled' class to change the background color
        header.classList.add('scrolled');
    } else {
        // Remove 'scrolled' class when we scroll back up
        header.classList.remove('scrolled');
    }
});