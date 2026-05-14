const supabaseUrl = "https://xkcenjadoxrrauevpyfn.supabase.co/rest/v1/";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrY2VuamFkb3hycmF1ZXZweWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3ODQ2NzIsImV4cCI6MjA5NDM2MDY3Mn0.hzSBsUlv-IahcCaW1a48MNcTD-Kev1gOU6zwwcTrPUg";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

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
