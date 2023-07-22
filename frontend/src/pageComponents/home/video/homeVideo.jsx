import React, { useRef, useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { VideoContainer, VideoPlaceHolder } from "./homeVideo.style";
import HomeVideo from "../../../media/video/Wake up to Reality - Madara Uchiha's words.mp4";
import Placeholder from "../../../media/pictures/img.jpg";
import { AppPlayIcon } from "../../../components/icons/media";

function MyVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoToggle, setVideoToggle] = useState(false);
  const videoRef = useRef(null);

  const handelPlay = () => {
    setIsPlaying(true);
    setVideoToggle(true);
  };

  const handleVideoEnded = () => {
    setVideoToggle(false);
    setIsPlaying(false);
  };

  return (
    <VideoContainer>
      {videoToggle ? (
        <div className="videoPlayer">
          <Video
            ref={videoRef}
            className="custom-video-player"
            onEnded={handleVideoEnded}
            autoPlay={isPlaying}
            // onPlay={isPlaying}
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
            poster={Placeholder}
          >
            <source src={HomeVideo} type="video/mp4" />
          </Video>
        </div>
      ) : (
        <VideoPlaceHolder $image={Placeholder}>
          <button className="playBtn" onClick={handelPlay} disabled={isPlaying}>
            <AppPlayIcon width={40} height={40} />
          </button>
        </VideoPlaceHolder>
      )}
    </VideoContainer>
  );
}

export default MyVideo;
