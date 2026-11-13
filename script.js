// ============================================================
// 0. LOADER HIDE
// ============================================================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hide'), 500);
  }
});

// ============================================================
// 1. NAVBAR SCROLL EFFECT
// ============================================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================================
// 2. HAMBURGER MENU TOGGLE
// ============================================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Tutup menu saat link diklik (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

// ============================================================
// 3. ACTIVE NAV LINK HIGHLIGHT (scroll spy)
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  let current = '';
  const scrollY = window.scrollY + 120;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// ============================================================
// 4. CUSTOM CURSOR
// ============================================================
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

if (window.innerWidth > 768) {
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursorDot.style.left = x + 'px';
    cursorDot.style.top = y + 'px';
    cursorRing.style.left = x + 'px';
    cursorRing.style.top = y + 'px';
  });

  // hover effect pada link & button
  const hoverTargets = document.querySelectorAll('a, button, .skill-card, .project-card');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.width = '44px';
      cursorRing.style.height = '44px';
      cursorRing.style.borderColor = '#FAFFCB'; // pale-yellow
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.style.width = '28px';
      cursorRing.style.height = '28px';
      cursorRing.style.borderColor = '#FAFFCB'; // pale-yellow
    });
  });
}

// ============================================================
// 5. SKILLS DATA & RENDER
// ============================================================
const skillsData = [
  { 
    name: 'HTML', 
    icon: '<svg viewBox="0 0 128 128" width="40" height="40"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788l-1.428-16.059H64V20.891H28.392l.236 2.645 2.427 27.202H64zm0 35.097l-.061.017-15.327-4.14-.979-10.971H33.754l1.928 21.601 28.193 7.827.061-.017z"/><path fill="#fff" d="M63.952 52.455v16.053h16.795l-1.583 17.724-15.212 4.107v16.743l27.982-7.766.205-2.296 3.207-35.944.338-3.775h-3.576zM63.952 20.891v15.942h31.544l.264-2.955.594-6.655.236-2.645z"/></svg>', 
    desc: 'Structuring the web' 
  },
  { 
    name: 'CSS', 
    icon: '<svg viewBox="0 0 128 128" width="40" height="40"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.061-.018v-16.39z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v16.386l28.354-7.858.208-2.337 2.406-26.877h-13.876z"/></svg>', 
    desc: 'Styling & design' 
  },
  { 
    name: 'JavaScript', 
    icon: '<svg viewBox="0 0 128 128" width="40" height="40"><path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#000" d="M42.783 85.394c1.852 2.969 4.254 5.14 8.509 5.14 4.333 0 7.073-1.694 7.073-8.282V51.636h7.764v30.6c0 13.643-7.997 19.847-19.671 19.847-10.541 0-16.626-5.46-19.752-12.043l7.077-4.646zm26.956-1.372c1.616 2.657 4.176 4.854 8.509 4.854 4.023 0 6.585-1.853 6.585-5.14 0-2.892-2.419-4.098-6.505-5.878l-2.187-.932c-6.312-2.686-10.524-6.038-10.524-13.164 0-6.547 4.976-11.525 12.75-11.525 5.539 0 9.509 1.928 12.38 6.973l-6.769 4.347c-1.498-2.657-3.117-3.699-5.611-3.699-2.562 0-4.176 1.698-4.176 3.699 0 2.579 1.616 3.625 5.375 5.215l2.187.932c7.423 3.177 11.641 6.585 11.641 13.895 0 7.964-6.271 12.322-14.687 12.322-8.249 0-13.516-3.93-16.099-9.092l7.026-4.578z"/></svg>', 
    desc: 'Interactivity' 
  },
  { 
    name: 'PHP', 
    icon: '<svg viewBox="0 0 128 128" width="40" height="40"><path fill="#8892BF" d="M111.705 31.872c-11.422 1.98-20.513 12.568-20.513 24.302 0 13.74 10.513 23.037 20.513 23.037 10.736 0 16.295-6.893 16.295-14.868 0-10.085-8.704-15.589-16.295-32.471z"/><path fill="#8993BE" d="M116.705 72.802c-.203.022-.395.056-.606.068-8.39.47-13.373-8.621-13.373-16.037 0-9.613 8.672-20.472 18.442-23.496-1.093-13.471-12.925-23.643-27.574-23.643-15.585 0-28.219 12.634-28.219 28.219 0 15.587 12.634 28.22 28.219 28.22 4.332 0 8.43-1.004 12.044-2.769-1.342-5.557-2.086-11.128-2.086-16.801-.012-4.596.478-8.824 1.44-12.875 3.022-1.191 6.02-2.239 8.393-2.239 4.381 0 4.423 10.16 4.423 11.113 0 8.631-4.356 15.4-10.425 17.956 2.538 2.929 5.924 4.428 9.423 4.428 7.527 0 13.629-6.102 13.629-13.629 0-6.969-5.196-12.329-11.783-13.181z"/><path fill="#8993BE" d="M27.982 62.775c0-12.004-9.338-25.389-21.117-25.389-11.779 0-16.836 10.409-16.836 22.406 0 12.003 8.837 27.109 20.616 27.109 11.778 0 17.337-11.571 17.337-24.126z"/><path fill="#8993BE" d="M18.982 62.781c0-7.057-2.871-15.434-7.339-15.434-4.468 0-8.434 6.545-8.434 13.608 0 7.057 2.869 15.434 7.337 15.434 4.467 0 8.436-6.874 8.436-13.608z"/><path fill="#4A5B82" d="M55.104 55.035c0-12.739-10.375-22.644-22.873-22.644-11.667 0-22.31 9.238-22.31 20.816 0 11.579 8.791 18.92 20.458 18.92 5.016 0 8.626-1.702 10.612-4.057-3.486-1.559-5.634-5.07-5.634-9.107 0-5.64 4.903-10.435 10.413-10.435 5.237 0 8.467 2.996 9.334 6.507h4.006l.001-.006c-1.703-5.668-8.01-9.839-14.974-9.994z"/></svg>', 
    desc: 'Backend logic' 
  },
  { 
    name: 'Laravel', 
    icon: '<svg viewBox="0 0 128 128" width="40" height="40"><path fill="#FB503B" d="M117.183 90.035V46.854L90.887 28.195 64.595 46.854v10.944l-13.057-7.526-26.295-18.66L0 58.086v43.181l26.294 18.66 26.294 18.66 26.294-18.66 13.057-7.526v17.009l26.295-18.66V74.389z"/><path fill="#fff" d="M64.595 97.04l-13.057 7.526-26.294-18.66V65.218l26.294 18.66 13.057 7.526zM90.887 77.33l-13.057-7.526-26.294-18.66v18.66l-13.057 7.526 26.294 18.66 13.057-7.526 13.057-7.526z"/></svg>', 
    desc: 'PHP framework' 
  },
  { 
    name: 'Python', 
    icon: '<svg viewBox="0 0 128 128" width="40" height="40"><path fill="#3776AB" d="M63.391 0C43.482 0 42.649 9.994 42.649 9.994v20.803h19.973v3.912H37.765C37.765 34.709 24.051 44.962 24.051 64.095c0 19.133 12.287 26.659 12.287 26.659h7.306V73.157c0-11.927 9.428-22.424 22.405-22.424h15.302c8.764 0 14.676-8.443 14.676-18.731V11.779C96.027 5.44 88.631 0 80.712 0H63.391z"/><path fill="#FFD43B" d="M91.205 19.219v15.925c0 12.663-10.069 21.065-22.916 21.065H53.048c-7.692 0-13.239 7.262-13.239 16.517v14.129c0 7.969 11.988 11.553 11.988 11.553h20.029c7.992 0 15.664-6.647 15.664-14.64V71.354h-20.42v-3.912h36.293c6.884 0 10.257-6.301 10.257-13.67V36.524c0-7.971-8.403-11.555-8.403-11.555s-8.173-3.161-11.203-5.75z"/><path fill="#fff" d="M42.649 9.994c-5.363 0-9.706 4.343-9.706 9.706 0 5.362 4.343 9.704 9.706 9.704 5.362 0 9.705-4.342 9.705-9.704 0-5.363-4.343-9.706-9.705-9.706z"/><path fill="#fff" d="M85.351 88.596c-5.362 0-9.705 4.343-9.705 9.705 0 5.363 4.343 9.705 9.705 9.705 5.363 0 9.705-4.342 9.705-9.705 0-5.362-4.342-9.705-9.705-9.705z"/></svg>', 
    desc: 'Versatile language' 
  },
  { 
    name: 'Git', 
    icon: '<svg viewBox="0 0 128 128" width="40" height="40"><path fill="#F05032" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.493 0L46.529 14.86l14.507 14.507c3.375-1.139 7.24-.374 9.94 2.326 2.706 2.706 3.469 6.577 2.327 9.955l13.976 13.976c3.378-1.143 7.249-.378 9.955 2.329 3.73 3.73 3.73 9.784 0 13.514s-9.784 3.73-13.514 0c-2.816-2.816-3.515-6.945-2.102-10.374l-13.029-13.029v34.268c.913.452 1.787 1.033 2.588 1.84 3.73 3.73 3.73 9.784 0 13.514s-9.784 3.73-13.514 0-3.73-9.784 0-13.514c1.132-1.132 2.425-1.93 3.78-2.408V55.352c-1.355-.478-2.648-1.276-3.78-2.408-2.893-2.893-3.572-7.118-2.053-10.628L46.531 28.371 3.264 71.637c-3.174 3.174-3.174 8.32 0 11.493l55.117 55.114c3.174 3.174 8.32 3.174 11.493 0l54.863-54.863c3.174-3.173 3.174-8.32 0-11.493z"/></svg>', 
    desc: 'Version control' 
  },
  { 
    name: 'GitHub', 
    icon: '<svg viewBox="0 0 128 128" width="40" height="40"><path fill="#181717" d="M64.002 0C28.651 0 0 28.651 0 64.002c0 28.277 18.334 52.273 43.756 60.738 3.199.592 4.369-1.388 4.369-3.083 0-1.521-.057-5.554-.088-10.904-17.799 3.869-21.555-8.58-21.555-8.58-2.91-7.392-7.104-9.36-7.104-9.36-5.804-3.969.438-3.889.438-3.889 6.42.453 9.8 6.593 9.8 6.593 5.707 9.777 14.972 6.953 18.621 5.318.58-4.136 2.232-6.958 4.062-8.555-14.209-1.616-29.147-7.104-29.147-31.617 0-6.984 2.495-12.697 6.584-17.166-.659-1.616-2.854-8.117.624-16.924 0 0 5.368-1.718 17.586 6.557 5.102-1.419 10.574-2.128 16.01-2.154 5.434.026 10.906.735 16.014 2.154 12.212-8.275 17.574-6.557 17.574-6.557 3.485 8.807 1.29 15.308.632 16.924 4.096 4.469 6.577 10.182 6.577 17.166 0 24.597-14.966 29.986-29.222 31.571 2.298 1.979 4.346 5.89 4.346 11.87 0 8.567-.077 15.478-.077 17.578 0 1.707 1.153 3.701 4.401 3.076C109.703 116.24 128 92.272 128 64.002 128 28.651 99.354 0 64.002 0z"/></svg>', 
    desc: 'Collaboration' 
  },
];

const skillsGrid = document.getElementById('skillsGrid');

skillsData.forEach(skill => {
  const card = document.createElement('div');
  card.className = 'skill-card reveal';
  card.innerHTML = `
    <span class="skill-icon">${skill.icon}</span>
    <div class="skill-name">${skill.name}</div>
    <div class="skill-desc">${skill.desc}</div>
  `;
  skillsGrid.appendChild(card);
});

// ============================================================
// 6. PROJECTS DATA & RENDER
// ============================================================
const projectsData = [
  {
  number: '01',
  name: 'Game Zombie Survival',
  desc: 'An interactive survival game where players battle zombie waves, unlock challenges, and test their survival skills in single-player or multiplayer mode.',
  tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
  img: 'projects/project-1.png',
  code: 'https://github.com/3delwe1ss/Game-Zombie-Survival-/blob/main/index.html', 
   },
  {
  number: '02',
  name: 'Digital Clock',
  desc: 'An aesthetic glassmorphism digital clock featuring an interactive floating paw particle system, dynamic greetings, and 12/24-hour toggle.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  img: 'projects/project-2.png',
  code: 'https://github.com/3delwe1ss/Digital-Clock/blob/main/index.html', 
   },
  {
    number: '03',
    name: 'Mood Journal',
    desc: 'A mood journal web app that allows users to track their emotions, write daily thoughts, and keep personal journal entries in one place.',
    tech: ['Python', 'JavaScript'],
    img: 'projects/project-3.png',
    code: 'https://github.com/3delwe1ss/Mood-Journal/blob/main/moodjournal.py', // ← Ubah jadi link ini dulu
  },
];

const projectsGrid = document.getElementById('projectsGrid');

projectsData.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card reveal';
  
  // Bungkus card jadi link (karena View Project dihapus, klik card arahkan ke Source Code)
  const mainLink = project.code !== '#' ? project.code : '#';

  card.innerHTML = `
    <a href="${mainLink}" target="_blank" rel="noopener noreferrer" class="project-card-link">
      <div class="project-img-wrap">
        <img src="${project.img}" alt="${project.name}" class="project-img"
             onerror="this.style.display='none'; this.parentElement.classList.add('project-img-fallback');">
        <span class="project-fallback-icon">✦</span>
      </div>
      <div class="project-body">
        <div class="project-number">${project.number}</div>
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
      </div>
    </a>
    <div class="project-tech">
      ${project.tech.map(t => `<span>${t}</span>`).join('')}
    </div>
    
    <!-- HANYA SOURCE CODE YANG MUNCUL -->
    <div class="project-links">
      ${project.code !== '#' ? `<a href="${project.code}" target="_blank" rel="noopener noreferrer">Source Code</a>` : ''}
    </div>
  `;
  projectsGrid.appendChild(card);
});

// ============================================================
// 6b. CERTIFICATES DATA & CAROUSEL RENDER
// ============================================================
const certificatesData = [
  { title: 'Cloud Computing', issuer: 'LPPM STT Nurul Fikri', year: '2025', img: 'certificates/cert-1.jpg' },
  { title: 'Seni Merespons',        issuer: 'Galeri Potensi', year: '2026', img: 'certificates/cert-2.jpg' },
  { title: 'AI & Ethics in Game Development',        issuer: 'CodeLamp', year: '2025', img: 'certificates/cert-3.jpg' },
  { title: 'Game Design',          issuer: 'CodeLamp', year: '2025', img: 'certificates/cert-4.jpg' },
  { title: 'Market Validation',       issuer: 'CodeLamp', year: '2025', img: 'certificates/cert-5.jpg' },
  { title: 'Roadmapping',         issuer: 'CodeLamp', year: '2025', img: 'certificates/cert-6.jpg' },
  { title: 'Library Python',      issuer: 'UKRI & UIP', year: '2025', img: 'certificates/cert-7.jpg' },
  { title: 'Introduction to Capture the Flag',              issuer: 'ID-Networkers', year: '2025', img: 'certificates/cert-8.jpg' },
  { title: 'Pelatihan Koding & Kecerdasan Artificial',          issuer: 'SMKP-PENUS', year: '2025', img: 'certificates/cert-9.jpeg' },
  { title: 'Coding AI untuk Masa Depan Edukasi Digital',              issuer: 'TAPRESNESIA', year: '2026', img: 'certificates/cert-10.jpeg' },
];

const certTrack  = document.getElementById('certTrack');
const certDots   = document.getElementById('certDots');
const certPrev   = document.getElementById('certPrev');
const certNext   = document.getElementById('certNext');
const certCarousel = document.getElementById('certCarousel');

let certIndex = 0;

function getVisibleCount() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function renderCertificates() {
  if (!certTrack) return;

  // Render kartu
  certTrack.innerHTML = certificatesData.map((cert, i) => `
    <div class="cert-card" data-index="${i}">
      <div class="cert-img-wrap">
        <img src="${cert.img}" alt="${cert.title}" class="cert-img"
             onerror="this.style.display='none'; this.parentElement.classList.add('cert-img-fallback');">
        <span class="cert-fallback-icon">✦</span>
      </div>
      <div class="cert-info">
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-meta">${cert.issuer} · ${cert.year}</p>
      </div>
    </div>
  `).join('');

  // Render dots
  certDots.innerHTML = certificatesData.map((_, i) =>
    `<button class="cert-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to certificate ${i + 1}"></button>`
  ).join('');

  certDots.querySelectorAll('.cert-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      certIndex = Number(dot.dataset.index);
      updateCarousel();
    });
  });

  updateCarousel();
}

function updateCarousel() {
  const visible = getVisibleCount();
  const maxIndex = Math.max(0, certificatesData.length - visible);
  if (certIndex > maxIndex) certIndex = maxIndex;
  if (certIndex < 0) certIndex = 0;

  const cards = certTrack.querySelectorAll('.cert-card');
  if (!cards.length) return;

  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(certTrack).gap) || 0;
  const offset = certIndex * (cardWidth + gap);

  certTrack.style.transform = `translateX(-${offset}px)`;

  // Update dots
  certDots.querySelectorAll('.cert-dot').forEach((d, i) => {
    d.classList.toggle('active', i === certIndex);
  });

  // Update nav button state
  certPrev.disabled = certIndex === 0;
  certNext.disabled = certIndex >= maxIndex;
}

if (certTrack) {
  certPrev.addEventListener('click', () => {
    certIndex--;
    updateCarousel();
  });

  certNext.addEventListener('click', () => {
    certIndex++;
    updateCarousel();
  });

  // Swipe / drag support
  let startX = 0;
  let isDragging = false;

  const onStart = (x) => { startX = x; isDragging = true; };
  const onEnd = (x) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) certIndex++;
      else certIndex--;
      updateCarousel();
    }
  };

  certCarousel.addEventListener('touchstart', (e) => onStart(e.touches[0].clientX), { passive: true });
  certCarousel.addEventListener('touchend',   (e) => onEnd(e.changedTouches[0].clientX));
  certCarousel.addEventListener('mousedown',  (e) => onStart(e.clientX));
  window.addEventListener('mouseup',          (e) => onEnd(e.clientX));

  // Keyboard
  document.addEventListener('keydown', (e) => {
    const rect = certCarousel.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;
    if (e.key === 'ArrowLeft') { certIndex--; updateCarousel(); }
    if (e.key === 'ArrowRight') { certIndex++; updateCarousel(); }
  });

  window.addEventListener('resize', updateCarousel);

  // Init setelah semua elemen siap
  renderCertificates();
}

// ============================================================
// 7. REVEAL ON SCROLL (IntersectionObserver)
// ============================================================
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px',
  }
);

revealElements.forEach(el => observer.observe(el));

// ============================================================
// 8. CONTACT FORM - KIRIM KE EMAIL (Formspree)
// ============================================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Ambil data form
  const name = this.querySelector('input[name="name"]').value;
  const email = this.querySelector('input[name="email"]').value;
  const message = this.querySelector('textarea[name="message"]').value;
  
  // Ambil tombol submit
  const btn = this.querySelector('.btn-magical');
  const originalText = btn.textContent;
  
  // Ubah tombol jadi loading
  btn.textContent = 'Sending...';
  btn.disabled = true;
  
  // Kirim data ke Formspree
  fetch('https://formspree.io/f/mppzjvga', {  // ← GANTI LINK INI!
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
  .then(response => {
    if (response.ok) {
      alert('Message sent successfully! I\'ll get back to you soon.');
      contactForm.reset();
    } else {
      alert('Failed to send. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to send. Please try again.');
  })
  .finally(() => {
    btn.textContent = originalText;
    btn.disabled = false;
  });
});

// ============================================================
// 9. SCROLL INDICATOR HIDE AFTER SCROLL
// ============================================================
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollIndicator.style.opacity = '0';
    scrollIndicator.style.transition = 'opacity 0.6s ease';
  } else {
    scrollIndicator.style.opacity = '0.6';
  }
});

// ============================================================
// 10. BACK TO TOP BUTTON
// ============================================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// 11. TYPING EFFECT (Hero Subtitle)
// ============================================================
const heroSub = document.querySelector('.hero-sub');
if (heroSub) {
  const text = heroSub.textContent;
  heroSub.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      heroSub.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    }
  }
  
  // Mulai typing setelah loader hilang
  setTimeout(typeWriter, 1200);
}

// ============================================================
// 12. PARALLAX EFFECT (Hero)
// ============================================================
const hero = document.querySelector('.hero');
const crystal = document.querySelector('.crystal');
const moon = document.querySelector('.moon');

if (hero && crystal && moon && window.innerWidth > 768) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    crystal.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) rotate(${x * 0.3}deg)`;
    moon.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
}

// ============================================================
// 13. PARTICLE BACKGROUND (Hero)
// ============================================================
function createParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: var(--pale-yellow);
      border-radius: 50%;
      opacity: ${Math.random() * 0.3 + 0.1};
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
      animation-delay: ${Math.random() * 5}s;
      pointer-events: none;
      z-index: 1;
    `;
    hero.appendChild(particle);
  }
}

// Tambahkan keyframes ke CSS (pakai JavaScript inject)
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes floatParticle {
    0% {
      transform: translateY(0) translateX(0) scale(1);
      opacity: 0.3;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(-100vh) translateX(50px) scale(0);
      opacity: 0;
    }
  }
`;
document.head.appendChild(styleSheet);

// Jalankan setelah halaman load
window.addEventListener('load', createParticles);

// ============================================================
// 14. DARK MODE TOGGLE
// ============================================================
const themeToggle = document.getElementById('themeToggle');
const toggleIcon = themeToggle?.querySelector('.toggle-icon');

// Cek preferensi dark mode dari localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  if (toggleIcon) toggleIcon.textContent = '☀';
}

// Toggle dark mode
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      if (toggleIcon) toggleIcon.textContent = '☀';
    } else {
      localStorage.setItem('theme', 'light');
      if (toggleIcon) toggleIcon.textContent = '☽';
    }
  });
}

// ============================================================
// 15. CLICK EXPLOSION (Stars on Click)
// ============================================================
document.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  for (let i = 0; i < 12; i++) {
    const star = document.createElement('div');
    star.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${Math.random() * 6 + 2}px;
      height: ${Math.random() * 6 + 2}px;
      background: var(--pale-yellow);
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      pointer-events: none;
      z-index: 99999;
      transition: all 0.8s ease;
      opacity: 1;
    `;
    document.body.appendChild(star);
    
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80 + 20;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    
    setTimeout(() => {
      star.style.transform = `translate(${dx}px, ${dy}px) scale(0) rotate(${Math.random() * 360}deg)`;
      star.style.opacity = '0';
    }, 10);
    
    setTimeout(() => star.remove(), 800);
  }
});

// ============================================================
// 16. CURSOR TRAIL EFFECT
// ============================================================
const trailContainer = document.getElementById('cursorTrail');

// Kalau container gak ada, bikin otomatis
if (!trailContainer) {
  const newContainer = document.createElement('div');
  newContainer.id = 'cursorTrail';
  document.body.appendChild(newContainer);
}

const trailContainerFinal = document.getElementById('cursorTrail');
const trailParticles = [];
const trailCount = 20; // Banyak bintang

// Buat bintang-bintang
for (let i = 0; i < trailCount; i++) {
  const star = document.createElement('div');
  star.className = 'trail-star';
  
  // Ukuran random (4-14px)
  const size = Math.random() * 10 + 4;
  
  // Warna random (sesuai tema baru: magenta-pink, light-pink, soft-pink, pale-yellow)
  const colors = ['#F13E93', '#F891BB', '#F9D0CD', '#FAFFCB', '#ffd700'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  star.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    filter: drop-shadow(0 0 8px ${color}40);
    opacity: 0;
    transition: all 0.2s ease;
  `;
  
  trailContainerFinal.appendChild(star);
  
  trailParticles.push({
    el: star,
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    scale: 0.3 + (i / trailCount) * 0.7,
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 6,
    size: size,
    color: color,
    delay: i * 0.05
  });
}

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let isMouseMoving = false;
let mouseTimeout;

// Track mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  isMouseMoving = true;
  
  clearTimeout(mouseTimeout);
  mouseTimeout = setTimeout(() => {
    isMouseMoving = false;
  }, 100);
});

// Animasi trail
function animateTrailStars() {
  trailParticles.forEach((p, i) => {
    // Gerakan dengan efek elastis
    const targetX = mouseX + (Math.random() - 0.5) * 10;
    const targetY = mouseY + (Math.random() - 0.5) * 10;
    
    if (i === 0) {
      p.x += (targetX - p.x) * 0.25;
      p.y += (targetY - p.y) * 0.25;
    } else {
      const prev = trailParticles[i - 1];
      p.x += (prev.x - p.x) * 0.25 + (Math.random() - 0.5) * 0.5;
      p.y += (prev.y - p.y) * 0.25 + (Math.random() - 0.5) * 0.5;
    }
    
    // Update posisi
    p.el.style.left = p.x + 'px';
    p.el.style.top = p.y + 'px';
    
    // Opacity & scale
    const distance = Math.sqrt(
      Math.pow(p.x - mouseX, 2) + 
      Math.pow(p.y - mouseY, 2)
    );
    const maxDist = 200;
    const opacityFactor = Math.max(0, 1 - (distance / maxDist));
    
    p.el.style.opacity = isMouseMoving ? (0.5 + opacityFactor * 0.5) * p.scale : 0;
    p.el.style.transform = `
      scale(${p.scale * (0.5 + opacityFactor * 0.5)}) 
      rotate(${p.rotation}deg)
      translate(-50%, -50%)
    `;
    
    p.rotation += p.rotSpeed;
    
    // Efek berkilau
    const sparkle = Math.sin(Date.now() / 1000 + i) * 0.2 + 0.8;
    p.el.style.filter = `drop-shadow(0 0 ${8 * sparkle}px ${p.color}60)`;
  });
  
  requestAnimationFrame(animateTrailStars);
}

// Mulai animasi setelah halaman load
window.addEventListener('load', () => {
  setTimeout(animateTrailStars, 100);
});

// Handle resize
window.addEventListener('resize', () => {
  trailParticles.forEach((p, i) => {
    p.x = window.innerWidth / 2 + (Math.random() - 0.5) * 100;
    p.y = window.innerHeight / 2 + (Math.random() - 0.5) * 100;
  });
});

console.log('✦ A portfolio made with love.');