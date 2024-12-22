import React from "react";
import "./youtubecard.css";

function YouTubeCard({ videoId, h3, p }) {
  return (
    <div className="youtube-card">
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          width="360"
          height="260"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={h3}
        ></iframe>
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}
export default YouTubeCard;