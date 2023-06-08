const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav_menu');

//open nav menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  closeBtn.style.display = 'inline-block';
  menuBtn.style.display = 'none';
});

//close nav menu
const closeNav = () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
};

closeBtn.addEventListener('click', closeNav);

//close nav menu when items are clicked

if (window.innerWidth < 1024) {
  document.querySelectorAll('.nav_menu li a').forEach((navItem) => {
    navItem.addEventListener('click', closeNav);
  });
}

//change navbar style on scroll

window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('window-scroll', window.scrollY > 0);
});

const darkModeToggle = document.getElementById('darkModeToggle');
const companies = document.getElementById('companies');
const cards = document.getElementsByClassName('services_card');
const borders = document.getElementsByClassName('portfolio_project-image');
const portfolio = document.getElementById('portfolio');
const testimonials = document.getElementsByClassName('testimonial');
const contact = document.getElementById('contact');
const p = document.getElementsByTagName('p');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

console.log(borders);

// Check if the user has a preference stored in local storage
let darkModeEnabled = localStorage.getItem('darkModeEnabled');

// If dark mode is enabled, toggle it
if (darkModeEnabled === 'true') {
  enableDarkMode();
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  darkModeEnabled = localStorage.getItem('darkModeEnabled'); // Get the updated value

  if (darkModeEnabled === 'true') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// Enable dark mode
function enableDarkMode() {
  body.classList.add('dark-mode');
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
  body.style.setProperty('--color-black', '#ffffff');
  companies.style.backgroundColor = '#13194e';
  portfolio.style.backgroundColor = '#13194e';
  contact.style.backgroundColor = '#13194e';
  // p.style.color = '#ffffff';
  for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'white';
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = '#13194e';
  }
  for (let i = 0; i < borders.length; i++) {
    borders[i].style.borderColor = '#0a0e35';
  }
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.backgroundColor = '#13194e';
  }
  // cards.style.backgroundColor = '#13194e';
  localStorage.setItem('darkModeEnabled', 'true');
}

// Disable dark mode
function disableDarkMode() {
  body.classList.remove('dark-mode');
  icon.classList.remove('fa-sun');
  icon.classList.add('fa-moon');
  body.style.setProperty('--color-black', '#0f0f1b');
  companies.style.backgroundColor = '#f5f5f5';
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = '#f5f5f5';
  }
  for (let i = 0; i < borders.length; i++) {
    borders[i].style.borderColor = '#ffff';
  }
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.backgroundColor = '#f5f5f5';
  }
  for (let i = 0; i < p.length; i++) {
    p[i].style.color = '#4b4a53';
  }
  portfolio.style.backgroundColor = '#f5f5f5';
  contact.style.backgroundColor = '#7562e0';
  localStorage.setItem('darkModeEnabled', 'false');
}

// #13194e
