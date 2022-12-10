// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const projectsContainer = document.querySelector(".projects");
const leftSectionsAll = document.querySelectorAll(".left");
const downSectionsAll = document.querySelectorAll(".down");
const rightSectionsAll = document.querySelectorAll(".right");

//Projects Data
const projects = [
  {
    title: "Affiliate and CPA Marketting landing page",
    description:
      "You can use my fully responsive landing page for you Affiliate, CPA or SEO. My web site is cool UI based & have login, signup section for advertisers and publisher. Awesome Hero slider, About, Counter, Advertiser service, Publisher service, Work with Brand, Team Member, contact, Spcial footer section.",
    image: "./images/affiliate-markating.png",
    tools: "html, css, Bootstrap, parcel",
    liveLink: "https://affiliate-project.netlify.app",
    githubLink: "https://github.com/masudranashawon/affiliate-project",
  },
  {
    title: "The World Bank - An online bank application",
    description:
      "The World Bank is an online bank that helps you save with the power of technology! With our application, you can easily deposit checks, transfer money, and send and receive payments. All without any hassle. What's more: we've made sure the experience of using The World Bank is as seamless as possible. With a modern UI and UX, it's not hard to see why many people are switching their banking to The World Bank!",
    image: "./images/the-world-bank.png",
    tools: "html, css, js, parcel",
    liveLink: "https://the-world-bank.netlify.app/",
    githubLink: "https://github.com/masudranashawon/world-bank",
  },
  {
    title: "Book My Show - Movie ticket booking website",
    description:
      "It's a ticket selling website, It's have movie poster hero slider, In cenemas now section, and trending now movie list section, and a contect section. User can choose a movie and can see movie name price vat in modal section and thay can click buy now button then thay go anather modal and can see purchace section and can download movie ticket.",
    image: "./images/book-my-show.png",
    tools: "html, css, Bootstrap, js, parcel",
    liveLink: "https://book-my-show1.netlify.app/",
    githubLink: "https://github.com/masudranashawon/Book-My-Show",
  },
  {
    title: "Virus Guard - An anti-virus website",
    description:
      "A mix of pure simplicity and functional elegance, Tera Guard is a web-based security solution that provides protection against internet threats, malware and cyber-attacks. With our robust system, you can be confident that your data and network are safe from hackers and malicious intent. Enjoy the peace of mind knowing your business is protected with our 24/7 customer support team.",
    image: "./images/virus-gueard.png",
    tools: "html, css, js, parcel",
    liveLink: "https://virus-guard.netlify.app",
    githubLink: "https://github.com/masudranashawon/virus-guard",
  },
  {
    title: "Todo App - An Task management application",
    description:
      "This is a todo application built with React.js and backend API server written in Node.js. It's a simple, intuitive, and elegant UI for managing your todo list. It comes with a number of great features such as creating, updating or deleting tasks from the list.",
    image: "./images/react-todo-app.png",
    tools: "html, css, tailwind, react",
    liveLink: "https://masud-todo-app.netlify.app/",
    githubLink: "https://github.com/masudranashawon/todo-app",
  },
];

// Application architechture
class App {
  constructor() {
    this._revealSection();
    this._stickyNavbar();
    this._activeLinks();
    this._toggleMobileNav();
    this._tagCloud();
    this._typeWriter();
    this._nameBounce();
    this._renderProjects();
  }

  //  Reveal Section
  _revealSection() {
    // Reveal Down
    function revealSectionDown(entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.add("animDown");
      observer.unobserve(entry.target);
    }

    const downSectionObserver = new IntersectionObserver(revealSectionDown, {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    });

    downSectionsAll.forEach((section) => {
      downSectionObserver.observe(section);
      section.classList.remove("animDown");
    });

    // Reveal Left
    function revealSectionLeft(entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.add("animLeft");
      observer.unobserve(entry.target);
    }

    const sectionObserver = new IntersectionObserver(revealSectionLeft, {
      root: null,
      threshold: 0,
      rootMargin: "250px",
    });

    leftSectionsAll.forEach((section) => {
      sectionObserver.observe(section);
      section.classList.remove("animLeft");
    });

    //Reveal Right
    function revealSectionRight(entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.add("animRight");
      observer.unobserve(entry.target);
    }

    const rightSectionObserver = new IntersectionObserver(revealSectionRight, {
      root: null,
      threshold: 0,
      rootMargin: "250px",
    });

    rightSectionsAll.forEach((section) => {
      rightSectionObserver.observe(section);
      section.classList.remove("animRight");
    });
  }

  // Sticky navbar
  _stickyNavbar() {
    const navHight = nav.getBoundingClientRect().height;

    const navObs = new IntersectionObserver(this._stickyOparation, {
      root: null,
      threshold: 0,
      rootMargin: `${-navHight}px`,
    });

    navObs.observe(header);
  }

  _stickyOparation(entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
  }

  // Link activate
  _activeLinks() {
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const link = e.target;
        const siblings = link.closest(".links").querySelectorAll(".link");
        siblings.forEach((sibling) => {
          if (sibling === link) sibling.style.color = "rgb(20, 184, 166)";
          else sibling.style.color = "rgb(209, 213, 219)";
        });
      });
    });
  }

  // Toggle mobile navbar
  _toggleMobileNav() {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.contains("toggle-close")
        ? this._disappearMobileNav()
        : this._appearMobileNav();
    });
  }

  _disappearMobileNav() {
    toggleBtn.classList.remove("toggle-close");
    linksContainer.style.animation = "mobileNavDisappear 0.55s 1";
    setTimeout(() => {
      linksContainer.classList.remove("links-open");
    }, 500);
    document.querySelector("html").style.overflow = "visible";
  }

  _appearMobileNav() {
    toggleBtn.classList.add("toggle-close");
    linksContainer.classList.add("links-open");
    linksContainer.style.animation = "mobileNavAppear 0.5s 1";
    document.querySelector("html").style.overflow = "hidden";
  }

  //Skils Globe tagCloud
  _tagCloud() {
    const tags = [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "JavaScript",
      "AJAX",
      "THREE.js",
      "GSAP",
      "GIS",
      "React.js",
      "Vue.js",
      "React Router",
      "Redux",
      "Next.js",
      "Node.js",
      "MongoDB",
      "MySQL",
      "Graphics Design",
    ];
    TagCloud(".content", tags, {
      radius: 380,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });
  }

  //Type Writer
  _typeWriter() {
    const typeWriter = new Typewriter(app, {
      loop: true,
    });
    typeWriter
      .typeString("Graphics Designer")
      .pauseFor(1500)
      .deleteChars(18)
      .typeString("Web Designer")
      .pauseFor(1500)
      .deleteChars(6)
      .typeString("veloper")
      .pauseFor(1500)
      .start();
  }

  //Name bouncing effect
  _nameBounce() {
    const nameContainer = document.querySelector(".full-name");
    const fullName = "Masud Rana Shawon";
    for (const letter of fullName) {
      const html = `<span class="ch">${letter}</span>`;
      nameContainer.insertAdjacentHTML("beforeend", html);
    }
    const allCh = document.querySelectorAll(".ch");
    allCh.forEach((ch) => {
      ch.addEventListener("mouseover", function (e) {
        if (!e.target.classList.contains("bounce"))
          e.target.classList.add("bounce");
        else e.target.classList.remove("bounce");
      });
    });
  }

  // Projects rendering
  _renderProjects() {
    projects.forEach((project) => {
      const html = `<div class="project">
          <div class="project-img">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <h3 class="project-title">
          ${project.title}
          </h3>
          <p class="project-details">
            ${project.description}
          </p>
          <p class="project-tools">
            Tools: <span>${project.tools}</span>
          </p>
          <div class="project-btns">
            <a href="${project.liveLink}" target="_blank">Live Site →</a>
            <a href="${project.githubLink}" target="_blank">GitHub →</a>
          </div>
        </div>`;
      projectsContainer.insertAdjacentHTML("afterbegin", html);
    });
  }
}

const myApp = new App();
