// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('#contact-send').addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.querySelector('input[name="contact-name"]').value.trim();
    const email = document.querySelector('input[name="contact-email"]').value.trim();
    const message = document.querySelector('#contact-msg').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Message sent successfully!');
        document.querySelector('#contactForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const rootElement = document.documentElement;

function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.2) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

A
scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);

//hire us
const modal = document.getElementById('hireMeModal');

const btn = document.querySelector('.btn');

const span = document.querySelector('.close');

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


document.getElementById('hireMeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    
    alert(Thank you for your message, ${name}! We will get back to you at ${email} soon.);
   
    modal.style.display = 'none';
    
    event.target.reset();
});