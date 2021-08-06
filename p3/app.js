// Get DOM elements 
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timespan = document.getElementById('timespan');

// Create function for clicking on video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Create function for updating the play & pause icons
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>'
    } 
}

// create function to update the progress
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // set the time for timestamp
    let mins = Math.floor(video.currentTime / 60); 
        if(mins < 10) {
            mins = '0' + String(mins);
        }

        let secs = Math.floor(video.currentTime % 60);
        if(secs < 10) {
            secs = '0' + String(secs);
        }

        timespan.innerHTML = `${mins}:${secs}`;
}

// create function to stop the video
function stopVideo() {
   video.currentTime = 0;
   video.pause();
}

// create function to update the video progress using the slider

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Even Listeners
// 1. Event listener for clicking on the video
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video. addEventListener('timeupdate', updateProgress);

// 2. Event Listener for play button
play.addEventListener('click', toggleVideoStatus);

// 3. Event Listener for stop button
stop.addEventListener('click', stopVideo);

// 4. Event Listener for Progreeb bar
progress.addEventListener('change', setVideoProgress);