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
        playClickSound(); // Play sound on click
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
    container.style.cursor = 'pointer'; // Ensure cursor changes to pointer on hover
});

// Function to rotate image clockwise or counterclockwise
const rotateImage = (img, direction, angle, duration) => {
    img.style.transition = `transform ${duration}s ease`;
    img.style.transform = `rotate${direction}(${angle}deg)`;
};

// Function to handle profile photo rotation and image change
const handleProfilePhotoClick = () => {
    const img = document.getElementById('profile-img');
    const currentImage = img.src.split('/').pop(); // Get current image filename
    const newImage = currentImage === 'IMG-20240603-WA0328.jpg' ? 'Myfirstdesign.png' : 'IMG-20240603-WA0328.jpg'; // Toggle image

    rotateImage(img, 'cw', 360, 1); // Clockwise rotation
    setTimeout(() => {
        img.src = newImage; // Change image source after rotation
        playClickSound('wheel-spin-click-slow-down-101152.mp3'); // Play sound on image change
        rotateImage(img, 'ccw', 360, 1); // Counterclockwise rotation
    }, 1000); // 1 second for each rotation
};

// Function to play click sound
function playClickSound(soundFile) {
    const audio = new Audio(soundFile); // Replace with your sound file path
    audio.play();
}

// Add click event listener to profile photo
const profileImg = document.getElementById('profile-img');
profileImg.addEventListener('click', handleProfilePhotoClick);


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

    // Add click sound to "Hello, I'm Saptarshi Biswas" text
    highlightText.addEventListener("click", () => {
        playClickSound();
    });
});

// Function to play click sound
function playClickSound() {
    const audio = new Audio('new-notification-7-210334.mp3'); // Replace with your sound file path
    audio.play();
}

// Add click sound to education and skills sections (assuming they have clickable elements)
const educationSections = document.querySelectorAll('#education .content-box, #skills .content-box');
educationSections.forEach(section => {
    section.addEventListener('click', () => {
        playClickSound();
    });
});

// Add click sound to LinkedIn, GitHub, and email icons
const socialIcons = document.querySelectorAll('.icon-link');
socialIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        playClickSound();
    });
});
