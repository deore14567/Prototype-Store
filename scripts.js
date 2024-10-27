/*==================== Toggle Icon Navbar ====================*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== Scroll Sections Active Link ====================*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Check the scroll position for each section
    sections.forEach(sec => {
        const top = window.scrollY; // Get current scroll position
        const offset = sec.offsetTop - 150; // Get the offset of the section
        const height = sec.offsetHeight; // Get the height of the section
        const id = sec.getAttribute('id'); // Get the section ID

        // If the section is in view
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
                // Add active class to the current link
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    /*==================== Sticky Navbar ====================*/
    const header = document.querySelector('header');
    // Add sticky class if the scroll position is greater than 100
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== Remove Toggle Icon and Navbar When Click Navbar Link (Scroll) ====================*/
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

/*==================== Smooth Scroll for Internal Links ====================*/
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = link.getAttribute('href').substring(1); // Get the target ID
        const targetSection = document.getElementById(targetId); // Find the target section

        // Smooth scroll to the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    });
});
