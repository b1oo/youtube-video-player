import React from 'react';
import YouTube from 'react-youtube';
import './App.css';

function App() {
  const videoId = '8dHAWTzD5SE'; // Replace with any YouTube video IDD

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>YouTube Video Player</h1>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </header>
    </div>
  );
}

export default App;
