lucide.createIcons();

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];

const desktopNav = document.getElementById('desktop-nav');
const mobileNav = document.getElementById('mobile-nav');
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const menuToggle = document.getElementById('menu-toggle');
let mobileOpen = false;

navLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = `#${link.id}`;
    a.textContent = link.label;
    a.className = `font-medium text-white hover:text-pink-400 transition-colors`;
    desktopNav.appendChild(a);

    const m = a.cloneNode(true);
    m.className = `font-medium text-white hover:text-pink-400 transition-colors`;
    m.onclick = () => {
        mobileMenu.classList.add('hidden');
        mobileOpen = false;
        updateToggleIcon();
    };
    mobileNav.appendChild(m);
});

menuToggle.addEventListener('click', () => {
    mobileOpen = !mobileOpen;
    mobileMenu.classList.toggle('hidden', !mobileOpen);
    updateToggleIcon();
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.className = `fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
            ? 'bg-gradient-to-r from-indigo-900 to-purple-900 shadow-lg'
            : 'bg-transparent'
    }`;

    const position = scrollY + 200;
    navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const active = position >= top && position < top + height;

            const navItems = document.querySelectorAll(`a[href="#${link.id}"]`);
            navItems.forEach(item => {
                item.classList.toggle('text-pink-500', active);
                item.classList.toggle('border-b-2', active);
                item.classList.toggle('border-pink-500', active);
            });
        }
    });
});

function updateToggleIcon() {
    menuToggle.innerHTML = '';
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', mobileOpen ? 'x' : 'menu');
    icon.classList.add('w-6', 'h-6');
    // Check if lucide is defined before calling createIcons
    if (typeof lucide !== 'undefined') {
        menuToggle.appendChild(icon);
        lucide.createIcons();
    } else {
        // If lucide is not defined, you might want to use a fallback icon or log an error.
        console.error('Lucide is not defined. Make sure to include the Lucide library.');
        // You could set a default icon here using innerHTML, e.g.,
        // menuToggle.innerHTML = mobileOpen ? 'Close' : 'Menu';
    }
}


const skills = [
    {
        name: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        description: 'Expert in semantic HTML5 and web structure.',
        proficiency: 95
    },
    {
        name: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        description: 'Proficient in styling and responsive layouts using Flexbox and Grid.',
        proficiency: 90
    },
    {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        description: 'Strong grasp of ES6+, DOM manipulation, and events.',
        proficiency: 85
    },
    {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        description: 'Experienced in building SPA using React, hooks, and context API.',
        proficiency: 80
    },
    {
        name: 'Tailwind CSS',
        icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg',
        description: 'Efficient in creating custom UIs quickly with utility classes.',
        proficiency: 85
    },
    {
        name: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        description: 'Skilled in using Bootstrap 5 components and utilities.',
        proficiency: 88
    }
];

const skillsContainer = document.getElementById('skills-grid');

skills.forEach(skill => {
    const card = `
            <div class="skill-item relative card-hover">
                <div class="glass rounded-xl p-6 text-center h-full bg-gradient-to-br from-indigo-900/30 to-purple-900/30">
                    <div class="flex flex-col items-center justify-center">
                        <img src="${skill.icon}" alt="${skill.name}" class="skill-icon mb-3" />
                        <h3 class="font-semibold">${skill.name}</h3>
                    </div>
                </div>
            </div>
        `;
    skillsContainer.innerHTML += card;
});


const projects = [
    {
        title: 'Ecommerce Website',
        description: 'An e-commerce website is an online platform for businesses or individuals to sell products or services to customers.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: [
            './images/auction1.png',
            './images/auction2.png',
            './images/auction3.png'
        ],
        demo: 'https://your-auction-demo.com',
        github: 'https://github.com/yourname/auction-system'
    },
    {
        title: 'Student Result Analysis',
        description: 'Upload PDF results and extract data for analysis using a dashboard.',
        technologies: ['HTML', 'CSS', 'Javascript', 'Python', 'Django', 'SQL'],
        image: [
            './images/rms1.png',
            './images/rms2.png',
            './images/rms3.png'
        ],
        demo: '',
        github: 'https://github.com/yourname/student-result-analyzer'
    }
];

const projectContainer = document.getElementById('project-grid');

projects.forEach(project => {
    const techBadges = project.technologies.map(tech =>
        `<span class="text-xs px-2 py-1 rounded-full bg-indigo-900/50 text-gray-300">${tech}</span>`
    ).join('');

    const demoLink = project.demo
        ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer"
                    class="flex items-center gap-1 text-sm text-pink-400 hover:text-pink-300 transition-colors">
                    <i data-lucide="external-link" class="w-4 h-4"></i> Live Demo
                </a>` : '';

    const githubLink = project.github
        ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer"
                    class="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                    <i data-lucide="github" class="w-4 h-4"></i> GitHub
                </a>` : '';

    let imageContent = '';
    if (Array.isArray(project.image)) {
        const carouselId = "projectCarousel" + project.title.replace(/\s+/g, '');
        imageContent = `<div id="${carouselId}" class="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-inner rounded-t-xl h-48">`;
        project.image.forEach((img, index) => {
            imageContent += `<div class="carousel-item ${index === 0 ? 'active' : ''} h-48">
                    <img src="${img}" class="block w-full h-full object-cover" alt="${project.title} ${index + 1}">
                </div>`;
        });
        imageContent += `</div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>`;
    } else {
        imageContent = `<div class="relative h-48 overflow-hidden rounded-t-xl">
                <img src="${project.image}" alt="${project.title}"
                    class="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
            </div>`;
    }

    const card = `
        <div class="card-hover reflection">
            <div class="glass rounded-xl overflow-hidden h-full bg-gradient-to-br from-indigo-900/30 to-purple-900/30 flex flex-col">
                ${imageContent}
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                    <p class="text-gray-300 mb-4 flex-grow">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">${techBadges}</div>
                    <div class="flex gap-4">
                        ${demoLink}
                        ${githubLink}
                    </div>
                </div>
            </div>
        </div>
    `;

    projectContainer.innerHTML += card;
});

// Initialize Bootstrap carousels after the project cards are added to the DOM
document.querySelectorAll('.carousel').forEach(carouselElement => {
    new bootstrap.Carousel(carouselElement);
});


// ... (rest of your existing JavaScript code)

const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch('/send-email', { // The API endpoint you created on the backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Email sent successfully') {
            successMessage.classList.remove('d-none');
            form.reset();
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 4000);
        } else {
            // Optionally display an error message to the user
            console.error('Email sending failed:', data.message);
            alert('Failed to send message. Please try again later.');
        }
    })
    .catch(error => {
        console.error('There was an error sending the email:', error);
        alert('Failed to send message. Please try again later.');
    });
});