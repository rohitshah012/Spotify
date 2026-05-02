const tracks = [
    {
        title: "Warning",
        artist: "Masoom Sharma, Swara Verma",
        album: "Warning - Single",
        genre: "Regional Indian",
        releaseDate: "2025-03-24",
        durationMs: 160057,
        source: "Apple Music",
        sourceUrl: "https://music.apple.com/us/album/warning/1811124046?i=1811124235&uo=4",
        src: "Songs/Warning   Masoom Sharma   Swara Verma.mp3",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9d/47/6b/9d476b34-218d-4b43-2873-6c5167ed59cb/cover.jpg/600x600bb.jpg"
    },
    {
        title: "Tax",
        artist: "Masoom Sharma, Swara Verma",
        album: "TAX - Single",
        genre: "Rap",
        releaseDate: "2025-08-04",
        durationMs: 125405,
        lyricist: "Daksh Kamboj Khera",
        source: "Apple Music",
        sourceUrl: "https://music.apple.com/us/album/tax/1877260143?i=1877260144&uo=4",
        src: "Songs/Tax   Masoom Sharma   Swara Verma   Daksh Kamboj Khera.mp3",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1a/11/b0/1a11b00e-69e1-80ac-6378-9c2625adc7d8/5034644569642.jpg/600x600bb.jpg"
    },
    {
        title: "Ramayan Ka Saar",
        artist: "Masoom Sharma",
        album: "Ramayan Ka Saar - Single",
        genre: "Indian Pop",
        releaseDate: "2025-05-23",
        durationMs: 187866,
        source: "Apple Music",
        sourceUrl: "https://music.apple.com/us/album/ramayan-ka-saar/1815724628?i=1815724818&uo=4",
        src: "Songs/Ramayan Ka Saar   Masoom Sharma.mp3",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7e/29/8a/7e298ac8-f316-7bb7-ac7e-215b26d0da16/199350769931.jpg/600x600bb.jpg"
    },
    {
        title: "Raat Ke Shikari",
        artist: "Masoom Sharma",
        album: "Raat Ke Shikari - Single",
        genre: "Haryanvi",
        releaseDate: "2025-05-07",
        durationMs: 148237,
        source: "Apple Music",
        sourceUrl: "https://music.apple.com/us/album/raat-ke-shikari/1813002992?i=1813002993&uo=4",
        src: "Songs/Raat Ke Shikari   Masoom Sharma.mp3",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a4/39/cd/a439cd20-2903-16bb-fb30-aa1f98b82432/6161126855982.jpg/600x600bb.jpg"
    },
    {
        title: "Khatole 2",
        artist: "Masoom Sharma",
        album: "Khatole 2 - Single",
        genre: "Pop",
        releaseDate: "2024-12-09",
        durationMs: 148774,
        source: "Apple Music",
        sourceUrl: "https://music.apple.com/us/album/khatole-2/1784985489?i=1784985491&uo=4",
        src: "Songs/Khatole 2   Masoom Sharma.mp3",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/36/a7/f8/36a7f82e-c341-894a-2001-5cf625636e3a/8447352389162.jpg/600x600bb.jpg"
    },
    {
        title: "Danda Deniya",
        artist: "Masoom Sharma",
        album: "Danda Deniya - Single",
        genre: "Pop",
        releaseDate: "2025-03-21",
        durationMs: 183803,
        source: "Apple Music",
        sourceUrl: "https://music.apple.com/us/album/danda-deniya/1803633410?i=1803633411&uo=4",
        src: "Songs/Danda Deniya   Masoom Sharma.mp3",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/20/b5/07/20b50742-1014-1ca7-ad3c-4863daf8c887/5034644563374.jpg/600x600bb.jpg"
    },
    {
        title: "Chambal K Dakku",
        artist: "Masoom Sharma, Rahul Muana, Ruba Khan",
        album: "Chambal K Dakku (feat. Swara Verma) - Single",
        genre: "New Age",
        releaseDate: "2024-05-20",
        durationMs: 227654,
        featuring: "Swara Verma",
        source: "Apple Music",
        sourceUrl: "https://music.apple.com/us/album/chambal-k-dakku-feat-swara-verma/1752073737?i=1752073746&uo=4",
        src: "Songs/Chambal K Dakku (feat. Swara Verma)   Masoom Sharma.mp3",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8d/df/7d/8ddf7d93-f22a-cee9-148f-746dd525038f/859788260898_cover.jpg/600x600bb.jpg"
    }
];

const audio = document.querySelector("#audioPlayer");
const songList = document.querySelector("#songList");
const trackGrid = document.querySelector("#trackGrid");
const searchForm = document.querySelector(".search");
const searchInput = document.querySelector("#searchInput");
const focusSearch = document.querySelector("#focusSearch");
const playButton = document.querySelector("#playButton");
const playIcon = document.querySelector("#playIcon");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const progressBar = document.querySelector("#progressBar");
const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const currentCover = document.querySelector("#currentCover");
const currentTitle = document.querySelector("#currentTitle");
const currentArtist = document.querySelector("#currentArtist");
const currentMeta = document.querySelector("#currentMeta");
const muteButton = document.querySelector("#muteButton");
const volumeIcon = document.querySelector("#volumeIcon");
const volumeSlider = document.querySelector("#volumeSlider");
const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector("#menuButton");
const sidebarClose = document.querySelector("#sidebarClose");
const mobileOverlay = document.querySelector("#mobileOverlay");

let currentIndex = 0;
let previousVolume = Number(volumeSlider.value);

document.addEventListener("error", (event) => {
    const target = event.target;

    if (target instanceof HTMLImageElement && target.dataset.fallback !== "true") {
        target.dataset.fallback = "true";
        target.src = "img/music1.jpg";
    }
}, true);

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
}

function getReleaseYear(track) {
    if (!track.releaseDate) {
        return "";
    }

    return new Date(track.releaseDate).getFullYear().toString();
}

function getTrackMeta(track) {
    return [track.album, getReleaseYear(track), track.genre].filter(Boolean).join(" | ");
}

function getCreditLine(track) {
    return [track.lyricist && `Lyrics: ${track.lyricist}`, track.featuring && `Feat: ${track.featuring}`]
        .filter(Boolean)
        .join(" | ");
}

function createSongButton(track, index) {
    const button = document.createElement("button");
    button.className = "library-song";
    button.type = "button";
    button.dataset.index = index;

    button.innerHTML = `
        <span class="library-thumb"><img src="img/music.svg" alt=""></span>
        <span>
            <span class="song-title">${track.title}</span>
            <span class="song-artist">${track.artist}</span>
            <span class="song-meta">${getReleaseYear(track)} | ${track.genre}</span>
        </span>
    `;

    return button;
}

function createTrackCard(track, index) {
    const button = document.createElement("button");
    button.className = "track-card";
    button.type = "button";
    button.dataset.index = index;

    button.innerHTML = `
        <span class="cover-wrap">
            <img src="${track.cover}" alt="${track.title} cover" loading="lazy">
            <span class="card-play"><img src="img/play.svg" alt=""></span>
        </span>
        <span class="card-title">${track.title}</span>
        <span class="card-artist">${track.artist}</span>
        <span class="card-meta">${getTrackMeta(track)} | ${formatTime(track.durationMs / 1000)}</span>
    `;

    return button;
}

function renderTracks() {
    const query = searchInput.value.trim().toLowerCase();
    const filteredTracks = tracks
        .map((track, index) => ({ ...track, index }))
        .filter((track) => {
            const searchableTrack = [
                track.title,
                track.artist,
                track.album,
                track.genre,
                track.releaseDate,
                track.lyricist,
                track.featuring
            ].join(" ");

            return searchableTrack.toLowerCase().includes(query);
        });

    songList.replaceChildren();
    trackGrid.replaceChildren();

    if (!filteredTracks.length) {
        const emptyLibrary = document.createElement("p");
        const emptyGrid = document.createElement("p");
        emptyLibrary.className = "empty-state";
        emptyGrid.className = "empty-state";
        emptyLibrary.textContent = "No songs found.";
        emptyGrid.textContent = "No songs found.";
        songList.append(emptyLibrary);
        trackGrid.append(emptyGrid);
        return;
    }

    filteredTracks.forEach((track) => {
        songList.append(createSongButton(track, track.index));
        trackGrid.append(createTrackCard(track, track.index));
    });

    updateActiveTrack();
}

function loadTrack(index, shouldPlay = false) {
    currentIndex = (index + tracks.length) % tracks.length;
    const track = tracks[currentIndex];

    audio.src = encodeURI(track.src);
    currentCover.src = track.cover;
    currentCover.alt = `${track.title} cover`;
    currentTitle.textContent = track.title;
    currentArtist.textContent = track.artist;
    currentMeta.textContent = [getTrackMeta(track), getCreditLine(track)].filter(Boolean).join(" | ");
    progressBar.value = 0;
    currentTime.textContent = "0:00";
    duration.textContent = "0:00";
    updateActiveTrack();

    if (shouldPlay) {
        playCurrentTrack();
    }
}

function playCurrentTrack() {
    audio.play().catch(() => {
        updatePlayState();
    });
}

function togglePlayback() {
    if (!audio.src) {
        loadTrack(currentIndex, true);
        return;
    }

    if (audio.paused) {
        playCurrentTrack();
    } else {
        audio.pause();
    }
}

function updatePlayState() {
    const isPlaying = !audio.paused;
    playIcon.src = isPlaying ? "img/pause.svg" : "img/play.svg";
    playButton.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
}

function updateActiveTrack() {
    document.querySelectorAll("[data-index]").forEach((item) => {
        const isActive = Number(item.dataset.index) === currentIndex;
        item.classList.toggle("active", isActive);
        if (isActive) {
            item.setAttribute("aria-current", "true");
        } else {
            item.removeAttribute("aria-current");
        }
    });
}

function playNextTrack() {
    loadTrack(currentIndex + 1, true);
}

function playPreviousTrack() {
    loadTrack(currentIndex - 1, true);
}

function updateVolumeIcon() {
    const isMuted = audio.muted || audio.volume === 0;
    volumeIcon.src = isMuted ? "img/mute.svg" : "img/volume.svg";
    muteButton.setAttribute("aria-label", isMuted ? "Unmute" : "Mute");
}

function openSidebar() {
    sidebar.classList.add("open");
    mobileOverlay.hidden = false;
    menuButton.setAttribute("aria-expanded", "true");
}

function closeSidebar() {
    sidebar.classList.remove("open");
    mobileOverlay.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
}

songList.addEventListener("click", (event) => {
    const songButton = event.target.closest("[data-index]");
    if (!songButton) {
        return;
    }

    loadTrack(Number(songButton.dataset.index), true);
    closeSidebar();
});

trackGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-index]");
    if (!card) {
        return;
    }

    loadTrack(Number(card.dataset.index), true);
});

searchInput.addEventListener("input", renderTracks);
searchForm.addEventListener("submit", (event) => event.preventDefault());

focusSearch.addEventListener("click", () => {
    searchInput.focus();
    closeSidebar();
});

playButton.addEventListener("click", togglePlayback);
prevButton.addEventListener("click", playPreviousTrack);
nextButton.addEventListener("click", playNextTrack);

audio.addEventListener("play", updatePlayState);
audio.addEventListener("pause", updatePlayState);
audio.addEventListener("ended", playNextTrack);

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    currentTime.textContent = formatTime(audio.currentTime);

    if (Number.isFinite(audio.duration) && audio.duration > 0) {
        progressBar.value = Math.round((audio.currentTime / audio.duration) * 1000);
    }
});

progressBar.addEventListener("input", () => {
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
        return;
    }

    audio.currentTime = (Number(progressBar.value) / 1000) * audio.duration;
});

volumeSlider.addEventListener("input", () => {
    audio.volume = Number(volumeSlider.value);
    audio.muted = audio.volume === 0;

    if (audio.volume > 0) {
        previousVolume = audio.volume;
    }

    updateVolumeIcon();
});

muteButton.addEventListener("click", () => {
    if (audio.muted || audio.volume === 0) {
        audio.muted = false;
        audio.volume = previousVolume || 0.8;
        volumeSlider.value = audio.volume;
    } else {
        previousVolume = audio.volume;
        audio.muted = true;
    }

    updateVolumeIcon();
});

menuButton.addEventListener("click", openSidebar);
sidebarClose.addEventListener("click", closeSidebar);
mobileOverlay.addEventListener("click", closeSidebar);

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeSidebar();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
        closeSidebar();
    }
});

audio.volume = Number(volumeSlider.value);
menuButton.setAttribute("aria-expanded", "false");
renderTracks();
loadTrack(0);
updateVolumeIcon();
