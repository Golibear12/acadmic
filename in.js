// Image lists for each section (first 4 words of heading, lowercased, underscores)
const my_academic_story = [
    'img/kmc.jpg',
    
    'img/kirorimal.jpg'
];
const research_projects = [
    'https://via.placeholder.com/300x200/6e44ff/ffffff?text=Research',
    'https://via.placeholder.com/300x200/3f3f3f/ffffff?text=Research+2',
    'https://via.placeholder.com/300x200/ff6e44/ffffff?text=Research+3'
];
const books_learning = [
    'https://via.placeholder.com/300x200/3f3f3f/ffffff?text=Books',
    'https://via.placeholder.com/300x200/6e44ff/ffffff?text=Books+2',
    'https://via.placeholder.com/300x200/ff6e44/ffffff?text=Books+3'
];
const theatre_fests = [
    'https://via.placeholder.com/300x200/ff6e44/ffffff?text=Theatre',
    'https://via.placeholder.com/300x200/3f3f3f/ffffff?text=Theatre+2',
    'https://via.placeholder.com/300x200/6e44ff/ffffff?text=Theatre+3'
];

const physical = [
    'img/kmc.jpg',
    'https://via.placeholder.com/300x200/ff446e/ffffff?text=New+2',
    'https://via.placeholder.com/300x200/446eff/ffffff?text=New+3'
];

// Generic slider function
function createSlider(containerId, imgList, interval = 3300) {
    const container = document.getElementById(containerId);
    if (!container || !imgList.length) return;
    container.style.position = 'relative';
    let idx = 0;

    // Initial image
    let img = document.createElement('img');
    img.src = imgList[0];
    img.alt = 'Slider Image';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '12px';
    img.style.position = 'absolute';
    img.style.left = '0';
    img.style.top = '0';
    img.style.opacity = '1';
    img.style.transform = 'translateX(0)';
    img.style.transition = 'opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)';
    container.appendChild(img);

    // Determine direction from data attribute
    const direction = container.getAttribute('data-direction') || 'left';

    setInterval(() => {
        // Animate old image out
        const oldImg = img;
        oldImg.style.transition = 'opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)';
        oldImg.style.opacity = '0';
        oldImg.style.transform = direction === 'right' ? 'translateX(60px)' : 'translateX(-60px)';
        setTimeout(() => {
            if (oldImg.parentNode) oldImg.parentNode.removeChild(oldImg);
        }, 1200);

        // Create new image coming from the opposite side
        idx = (idx + 1) % imgList.length;
        img = document.createElement('img');
        img.src = imgList[idx];
        img.alt = 'Slider Image';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '12px';
        img.style.position = 'absolute';
        img.style.left = '0';
        img.style.top = '0';
        img.style.opacity = '0';
        img.style.transform = direction === 'right' ? 'translateX(-60px)' : 'translateX(60px)';
        img.style.transition = 'opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)';
        container.appendChild(img);

        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'translateX(0)';
        }, 45);
    }, interval);
}

// Initialize sliders for each section
window.addEventListener('DOMContentLoaded', function() {
    createSlider('slider-my_academic_story', my_academic_story);
    createSlider('slider-research_projects', research_projects);
    createSlider('slider-books_learning', books_learning);
    createSlider('slider-theatre_fests', theatre_fests);
    createSlider('slider-new_section', physical);
});
// Add your JavaScript here
