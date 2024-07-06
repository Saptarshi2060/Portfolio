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
