# Spotify - Music Player

A modern, responsive web-based music player inspired by Spotify. Play your favorite Haryanvi songs with a sleek, dark-themed interface featuring real album artwork, search functionality, and intuitive playback controls.

## 🎵 Features

- **Music Playback**: Play, pause, and control music with real-time progress tracking
- **Search Functionality**: Quickly search songs by title, artist, or album name
- **Album Artwork**: Real cover images fetched from Apple Music
- **Song Metadata**: Comprehensive song information including:
  - Title and artist names
  - Album and genre classification
  - Release dates and duration
  - Lyricist information
  - Direct Apple Music links
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Theme**: Eye-friendly dark interface optimized for extended listening sessions
- **Sidebar Navigation**: Quick access to playlists and navigation options
- **Mobile-Optimized**: Touch-friendly controls and overlay menu for mobile users

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server or external dependencies required

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Spotify
   ```

2. Open the application:
   ```bash
   # Simply open index.html in your browser
   open index.html
   # or
   start index.html  # Windows
   ```

3. (Optional) For local development with live reload, use any local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## 💻 Usage

1. **Browse Songs**: The player loads with a default playlist of Haryanvi songs
2. **Search**: Use the search bar to filter songs by title, artist, or album
3. **Play Music**: Click on any song to start playback
4. **Control Playback**: 
   - Use play/pause button to control playback
   - Adjust volume with the volume slider
   - Drag the progress bar to seek through songs
5. **View Details**: Hover over songs to see additional metadata and Apple Music links

## 📁 Project Structure

```
Spotify/
├── index.html          # Main HTML file with UI structure
├── app.js              # Core application logic and functionality
├── style.css           # Main styling and layout
├── utility.css         # Utility classes and helpers
├── Songs/              # Local audio files directory
├── img/                # Images and icons (logo, controls, etc.)
├── README.md           # Project documentation
└── .git/               # Version control
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and media elements
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript (Vanilla)**: Event handling, DOM manipulation, audio control
- **Web Audio API**: Audio playback and control
- **Responsive Web Design**: Mobile-first approach

## 📊 Song Database

The application includes a curated playlist of Haryanvi songs featuring artists like:
- **Masoom Sharma**: Regional Indian and Rap genres
- **Swara Verma**: Collaborative performances
- **Daksh Kamboj Khera**: Lyricist contributions

All songs include real metadata from Apple Music with direct links to official releases.

## 🎨 Design Highlights

- **Dark Theme**: Reduces eye strain with background color `#121212`
- **Consistent Branding**: Spotify-inspired visual design and color scheme
- **Intuitive UI**: Clean, minimal interface focused on user experience
- **Accessible**: ARIA labels and semantic HTML for screen reader support

## 🔧 Key Features Implementation

### Search Functionality
Filter the song list in real-time based on title, artist, or album name

### Audio Playback
Native HTML5 `<audio>` element with JavaScript controls for:
- Play/Pause operations
- Volume adjustment
- Progress tracking and seeking
- Current time and duration display

### Responsive Layout
- Sidebar navigation collapses on mobile
- Mobile overlay for menu interaction
- Touch-optimized controls
- Adaptive grid layouts

## 📱 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License & Credits

- **Developer**: Rohit
- **Inspiration**: Spotify
- **Music Data**: Apple Music API integration
- **Songs**: Haryanvi music catalog featuring Masoom Sharma and collaborators

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to fork the project and submit pull requests.

## 📞 Support

For issues, questions, or feature requests, please open an issue in the repository.

---

**Enjoy your music! 🎧**
