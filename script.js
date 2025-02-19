// Mouse Gradient Follow
const mouseGradient = document.querySelector('.mouse-gradient');

document.addEventListener('mousemove', (e) => {
    mouseGradient.style.left = e.clientX + 'px';
    mouseGradient.style.top = e.clientY + 'px';
});

// Navigation Active State
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typewriter Effect
const typewriterText = document.querySelector('.typewriter');
const text = typewriterText.textContent;
typewriterText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        typewriterText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Work Data
const workData = [
    {
        title: 'Project 1',
        description: 'Description of project 1',
        image: 'assets/images/project1.jpg',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'Description of project 2',
        image: 'assets/images/project2.jpg',
        tech: ['React', 'Node.js', 'MongoDB'],
        link: '#'
    },
    // Add more projects as needed
];

// Skills Data
const skillsData = [
    {
        category: 'Frontend',
        skills: [
            { name: 'HTML', level: 90 },
            { name: 'CSS', level: 85 },
            { name: 'JavaScript', level: 80 }
        ]
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', level: 75 },
            { name: 'Python', level: 70 },
            { name: 'SQL', level: 65 }
        ]
    },
    // Add more categories as needed
];

// Populate Work Section
const workGrid = document.querySelector('.work-grid');

workData.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'glass-card project-card';
    projectCard.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn primary">View Project</a>
        </div>
    `;
    workGrid.appendChild(projectCard);
});

// Populate Skills Section
const skillsContainer = document.querySelector('.skills-container');

skillsData.forEach(category => {
    const skillCard = document.createElement('div');
    skillCard.className = 'glass-card skill-card';
    skillCard.innerHTML = `
        <h3>${category.category}</h3>
        <div class="skills-list">
            ${category.skills.map(skill => `
                <div class="skill-item">
                    <div class="skill-info">
                        <span>${skill.name}</span>
                        <span>${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    skillsContainer.appendChild(skillCard);
});

// Form Validation and Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted successfully!');
    contactForm.reset();
});

// Mobile Menu Toggle - Updated Version
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
    
    // Toggle menu icon
    const icon = menuBtn.querySelector('i');
    if (icon.classList.contains('bx-menu')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

// Close menu when clicking on links
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
        menuBtn.querySelector('i').classList.remove('bx-x');
        menuBtn.querySelector('i').classList.add('bx-menu');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && 
        !navLinks.contains(e.target) && 
        navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
        menuBtn.querySelector('i').classList.remove('bx-x');
        menuBtn.querySelector('i').classList.add('bx-menu');
    }
}); 
