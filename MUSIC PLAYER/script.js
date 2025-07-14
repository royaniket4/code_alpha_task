
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');

const playlist = [
    {
        title: "Sapphire",
        artist: "Ed Sheeran",
        src: "SONG1.mp3",
        cover: "COVER1.jpg"
    },
    {
        title: "Safari",
        artist: "Serena",
        src: "SONG2.mp3",
        cover: "COVER2.jpg"
    },
    {
        title: "Despacito",
        artist: "Luis Fonsi",
        src: "SONG3.mp3",
        cover: "COVER3.jpg"
    }
];

let currentTrack = 0;
let isPlaying = false;

function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    title.textContent = track.title;
    artist.textContent = track.artist;
    cover.src = track.cover;
    progress.value = 0;
}

function playMusic() {
    isPlaying = true;
    audio.play();
    playBtn.textContent = '⏸';
}
function pauseMusic() {
    isPlaying = false;
    audio.pause();
    playBtn.textContent = '▶️';
}
function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    if (isPlaying) playMusic();
}
function prevTrack() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
    if (isPlaying) playMusic();
}

playBtn.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

audio.addEventListener('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});
progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});
volume.addEventListener('input', () => {
    audio.volume = volume.value;
});
audio.addEventListener('ended', nextTrack);

loadTrack(currentTrack);
