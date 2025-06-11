const title = document.querySelector("h1");
const projectsTitle = document.querySelector("h2");
const projectSection = document.querySelector("#projects");
const projectContainers = document.querySelectorAll(".project-container");
const projectDescriptions = document.querySelectorAll(".specific-description");

const MIN_WIDTH = 750;

document.addEventListener("DOMContentLoaded", function() {
    title.classList.add("fade-in");
    projectsTitle.classList.add("fade-in");
});

projectsTitle.addEventListener("mouseenter", function() {
    if (window.innerWidth >= MIN_WIDTH) {
        projectSection.classList.add("fade-in-fast");
    }
}); 

if (window.innerWidth < MIN_WIDTH) {
    projectSection.style.opacity = "1";

    projectContainers.forEach((container, index) => {
        const description = projectDescriptions[index];

        container.style.opacity = "1";
        description.style.opacity = "1";
    })
}

projectContainers.forEach((container, index) => {
    const description = projectDescriptions[index];

    container.addEventListener("mouseenter", function() {
        if (window.innerWidth >= MIN_WIDTH) {
        container.classList.add("fade-in-fast");

            if (description) {
                setTimeout(() => {
                    description.classList.add("slide-in");
                }, 400)
            }
        }
    })
});