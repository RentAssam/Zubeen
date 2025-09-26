// Music Player Functionality
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('songProgress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');

// Set volume
audioPlayer.volume = volumeSlider.value;

// Play/Pause functionality
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Update progress bar
audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
});

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(currentTime);
}

// Set progress when clicking on progress bar
progress.parentElement.addEventListener('click', (e) => {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    
    audioPlayer.currentTime = (clickX / width) * duration;
});

// Format time
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Volume control
volumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Tribute Form Submission
const tributeForm = document.getElementById('tributeForm');
tributeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    // Create new tribute element
    const tributesContainer = document.querySelector('.tributes');
    const newTribute = document.createElement('div');
    newTribute.className = 'tribute-item';
    newTribute.innerHTML = `
        <h4>${name}</h4>
        <p>${message}</p>
        <span class="date">${new Date().toLocaleDateString()}</span>
    `;
    
    // Add to top of tributes
    tributesContainer.insertBefore(newTribute, tributesContainer.firstChild);
    
    // Reset form
    tributeForm.reset();
    
    // Show success message
    alert('Thank you for sharing your tribute!');
});

// Image Upload Simulation
const uploadBtn = document.getElementById('uploadBtn');
const imageUpload = document.getElementById('imageUpload');

document.querySelector('.upload-box').addEventListener('click', () => {
    imageUpload.click();
});

uploadBtn.addEventListener('click', () => {
    if (imageUpload.files.length > 0) {
        alert('Thank you for sharing your photo! It will be reviewed and added to the gallery soon.');
        imageUpload.value = '';
    } else {
        alert('Please select an image to upload.');
    }
});

// Video Upload Simulation
const videoUploadBtn = document.getElementById('videoUploadBtn');
const videoUpload = document.getElementById('videoUpload');

document.querySelectorAll('.upload-box')[1].addEventListener('click', () => {
    videoUpload.click();
});

videoUploadBtn.addEventListener('click', () => {
    if (videoUpload.files.length > 0) {
        alert('Thank you for sharing your video tribute! It will be reviewed and added to the gallery soon.');
        videoUpload.value = '';
    } else {
        alert('Please select a video to upload.');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize music player with play button icon
window.addEventListener('load', () => {
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
});