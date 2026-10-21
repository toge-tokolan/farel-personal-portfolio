// ==========================================
// 1. DATA CONFIGURATION (EDIT KONTEN DI SINI)
// ==========================================

const CONFIG = {
    socials: {
        instagram: "https://www.instagram.com/f4relaufa___?rpxt=bWhzbTVqaHFxNTR3",
        github: "https://github.com/toge-tokolan",
        tiktok: "https://www.tiktok.com/@aufauff2?is_from_webapp=1&sender_device=pc",
        email: "https://mail.google.com/mail/?view=cm&to=farelaufaramadhan97@gmail.com",
        whatsapp: "https://wa.me/6282117746223"
    },
    
    // Harus persis 4 project sesuai instruksi
    projects: [
        {
            id: "01",
            title: "BIRTHDAY WEB PROJECT",
            category: "WEB DEVELOPMENT",
            description: "A personalized interactive birthday website created as a digital birthday experience for a loved one. The project combines a soft romantic visual style, heartfelt messages, personal memories, and interactive elements to create a more meaningful way of celebrating a special moment.",
            tools: "CHATGPT, GeminiAI, ClaudeAI Figma, HTML, CSS, JavaScript",
            role: "Front-End Developer, UI/UX Designer",
            process: "First we discovered the problem, then explored visual directions. Built the interface using modern tech stack, and refined the animations.",
            image: "assets/project-01.png",
            detailImages: ["assets/project-01-detail-1.jpg", "assets/project-01-detail-2.jpg"]
        },
        {
            id: "02",
            title: "NEON SNAKE GAME WEB",
            category: "WEB/GAME DEVELOPMENT",
            description: "A modern take on the classic Snake game, redesigned with a futuristic neon visual style. The project focuses on combining simple gameplay mechanics with an engaging interface, smooth interactions, and a visually immersive experience.",
            tools: "Chatgpt, GeminiAI,HTML,CSS, JavaScript",
            role: "UI/UX Designer, Full Stack Developer",
            process: "The process started by defining the concept and creating a futuristic neon visual style for the classic Snake game. I then designed the interface and developed the core gameplay, including snake movement, food spawning, score tracking, and collision detection. After that, I tested the game to improve its responsiveness, interaction, and overall user experience, followed by final visual refinements to create a clean and engaging result.",
            image: "assets/project-02.png",
            detailImages: ["assets/project-02-detail-1.jpg", "assets/project-02-detail-2.jpg"]
        },
        {
            id: "03",
            title: "EID AL-FITR DESIGN IDEA",
            category: "GRAPHIC DESIGN",
            description: "A creative design concept for celebrating Eid al-Fitr, incorporating traditional elements with a modern aesthetic. I made this design when i was in job training, and it was a great opportunity to explore cultural themes and design principles.",
            tools: "Canva, CORELdraw",
            role: "GRAPHIC DESIGNER",
            process: "I explored various design concepts, focusing on color schemes, typography, and layout to create a visually appealing and culturally relevant design. The process involved sketching ideas, selecting appropriate imagery, and refining the final design to ensure it effectively conveyed the spirit of Eid al-Fitr.",
            image: "assets/project-03.jpg",
            detailImages: ["assets/project-03-detail-1.jpg", "assets/project-03-detail-2.jpg"]
        },
        {
            id: "04",
            title: "WEDDING INVITATION COVER DESIGN",
            category: "GRAPHIC DESIGN",
            description: "[PROJECT 04 DESCRIPTION] This is a detailed description of the fourth project.",
            tools: "CORELDraw, FINS ASSETS : Pinterest, Freepik, Canva",
            role: "GRAPHIC DESIGNER",
            process: "Combined graphic design principles with web layout techniques.",
            image: "assets/project-04.jpg",
            detailImages: ["assets/project-04-detail-1.jpg", "assets/project-04-detail-2.jpg"]
        }
    ]
};

// ==========================================
// 2. DOM INJECTION & RENDER LOGIC
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // Inject Social Links
    const socialContainer = document.getElementById("social-container");
    const footerSocial = document.getElementById("footer-social-container");
    const tiktokCTA = document.getElementById("link-tiktok-cta");
    
    const socialMapping = [
        { name: "Instagram", link: CONFIG.socials.instagram },
        { name: "GitHub", link: CONFIG.socials.github },
        { name: "TikTok", link: CONFIG.socials.tiktok },
        { name: "Email", link: CONFIG.socials.email },
        { name: "WhatsApp", link: CONFIG.socials.whatsapp }
    ];

    socialMapping.forEach(social => {
        // Contact section
        let linkHTML = `<a href="${social.link}" target="_blank" class="social-link">${social.name}</a>`;
        socialContainer.innerHTML += linkHTML;
        
        // Footer section
        let footerHTML = `<a href="${social.link}" target="_blank">${social.name}</a>`;
        footerSocial.innerHTML += footerHTML;
    });

    // Setup TikTok CTA
    tiktokCTA.href = CONFIG.socials.tiktok;

    // Inject Projects
    const projectsContainer = document.getElementById("projects-container");
    
    CONFIG.projects.forEach((proj, index) => {
        const projectHTML = `
            <div class="project-card" data-id="${index}">
                <div class="project-image-wrap">
                    <img class="placeholder-image project-image" src="${proj.image}" alt="${proj.title}" loading="lazy">
                </div>
                <div class="project-info">
                    <div class="project-num">${proj.id}</div>
                    <h4 class="project-title">${proj.title}</h4>
                    <div class="project-category">${proj.category}</div>
                    <div class="project-cta">View Project &rarr;</div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });

    // ==========================================
    // 3. UI INTERACTIONS & ANIMATIONS
    // ==========================================

    // Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    hamburger.addEventListener("click", () => {
        const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", String(!isExpanded));
        hamburger.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
        navLinks.classList.toggle("active", !isExpanded);
    });

    // Close mobile menu on link click
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
            hamburger.setAttribute("aria-label", "Open navigation");
        });
    });

    // Scroll Reveal Animation via IntersectionObserver
    const reveals = document.querySelectorAll(".reveal");
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // ==========================================
    // 4. MODAL LOGIC FOR PROJECT DETAIL
    // ==========================================
    
    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");
    const closeModal = document.querySelector(".close-modal");

    // Open Modal
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", function() {
            const projectId = this.getAttribute("data-id");
            const projectData = CONFIG.projects[projectId];
            modalBody.classList.toggle("project-03-detail", projectData.id === "03");
            modalBody.classList.toggle("project-04-detail", projectData.id === "04");
            
            // Build Modal Content
            modalBody.innerHTML = `
                <div class="modal-header">
                    <div class="modal-category">${projectData.category}</div>
                    <h2 class="modal-title">${projectData.title}</h2>
                </div>
                <img class="placeholder-image modal-main-img" src="${projectData.image}" alt="${projectData.title}" loading="lazy">
                
                <div class="modal-grid">
                    <div class="modal-desc">
                        <h4>About The Project</h4>
                        <p>${projectData.description}</p>
                        
                        <h4>Process</h4>
                        <p>${projectData.process}</p>
                    </div>
                    <div class="modal-info-block">
                        <h4>My Role</h4>
                        <p>${projectData.role}</p>
                        
                        <h4>Tools</h4>
                        <p>${projectData.tools}</p>
                    </div>
                </div>
                
                <div class="modal-gallery">
                    <img class="placeholder-image" src="${projectData.detailImages[0]}" alt="Detail ${projectData.title} 1" loading="lazy">
                    <img class="placeholder-image" src="${projectData.detailImages[1]}" alt="Detail ${projectData.title} 2" loading="lazy">
                </div>
            `;
            
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        });
    });

    // Close Modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close on outside click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});
