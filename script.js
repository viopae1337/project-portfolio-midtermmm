function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

function filterProjects(category) {
    const projects = document.querySelectorAll(".project");

    projects.forEach((project) => {
        const matchesCategory = category === "all" || project.dataset.category === category;
        project.hidden = !matchesCategory;
    });
}

function showCurrentYear() {
    const yearElement = document.querySelector("#current-year");
    yearElement.textContent = new Date().getFullYear();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelector("#theme-toggle").addEventListener("click", toggleTheme);

document.querySelectorAll(".project-filters button").forEach((button) => {
    button.addEventListener("click", () => filterProjects(button.dataset.filter));
});

document.querySelector("#back-to-top").addEventListener("click", (event) => {
    event.preventDefault();
    scrollToTop();
});

showCurrentYear();