// Placeholder for any future JavaScript code needed for interactivity
console.log("Portfolio website loaded");

const projectLinks = {
    "Voice Assistant": "https://github.com/Saptarshi2060/Voice_assistant",
    "Task Management Tool": "https://github.com/Saptarshi2060/Photo_editor",
    "File Converter Web Application": "https://github.com/Saptarshi2060/File_Converter",
    "YouTube Downloader": "https://github.com/Saptarshi2060/Youtube_Downloader"
};

// Function to open GitHub links for projects
const openProjectLink = (projectName) => {
    if (projectLinks.hasOwnProperty(projectName)) {
        window.open(projectLinks[projectName], '_blank');
    } else {
        console.error(`No GitHub link found for ${projectName}`);
    }
};

// Add click event listeners to project containers
const projectContainers = document.querySelectorAll('.project, .experience');

projectContainers.forEach(container => {
    container.addEventListener('click', () => {
        const projectName = container.querySelector('h3').textContent.trim();
        openProjectLink(projectName);
    });
});

// Function to zoom profile photo
function zoomProfilePhoto() {
    const img = document.getElementById('profile-img');
    img.style.transform = 'scale(1.5)';
    setTimeout(() => {
        img.style.transform = 'scale(1)';
    }, 3000); // 3 seconds zoom effect
}

// Function to add animation to the "Hello, I'm Saptarshi Biswas" text
document.addEventListener("DOMContentLoaded", () => {
    const highlightText = document.querySelector(".highlight");

    highlightText.addEventListener("mouseover", () => {
        highlightText.style.transition = "transform 0.3s, box-shadow 0.3s";
        highlightText.style.transform = "scale(1.1)";
        highlightText.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.5)";
    });

    highlightText.addEventListener("mouseout", () => {
        highlightText.style.transform = "scale(1)";
        highlightText.style.boxShadow = "none";
    });
});
