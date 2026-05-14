// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add shadow to navbar on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
    }
});
const sheetID = "1p44Ru6G3aLCRJOdar_kCd01nKD0VYH-M2l10rWm28sU";
const url = `https://opensheet.elk.sh/${sheetID}/Sheet1`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const tableBody = document.getElementById("sessions-body");

    data.forEach(session => {
      tableBody.innerHTML += `
        <tr>
          <td>${session.Date}</td>
          <td>${session.Course}</td>
          <td>${session.Duration}</td>
          <td>${session.Location}</td>
          <td>
            <a href="#contact" class="btn btn-small">Book</a>
          </td>
        </tr>
      `;
    });
  });
