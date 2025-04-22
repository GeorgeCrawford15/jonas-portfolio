const title = document.querySelector("h1");
const projectsTitle = document.querySelector("h2");
const projectSection = document.querySelector("#projects");
const projectContainers = document.querySelectorAll(".project-container");
const projectDescriptions = document.querySelectorAll(".specific-description");

document.addEventListener("DOMContentLoaded", function() {
    title.classList.add("fade-in");
});

projectsTitle.addEventListener("mouseenter", function() {
    projectSection.classList.add("fade-in-fast");
});

projectContainers.forEach((container, index) => {
    const description = projectDescriptions[index];

    container.addEventListener("mouseenter", function() {
        container.classList.add("fade-in-fast");

        if (description) {
            setTimeout(() => {
                description.classList.add("slide-in");
            }, 800)
        }
    })
});