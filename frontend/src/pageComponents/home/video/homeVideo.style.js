import styled from "styled-components";

export const VideoContainer = styled.div`
  width: 100%;
  height: 480px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.1);

  .videoPlayer {
    height: 100%;
    width: 100%;
  }

  .videoPlayer > div:first-child {
    height: 100%;
  }

  .custom-video-player {
    width: 100%;
    /* max-width: 800px; */
    height: 100%;
    margin: 0 auto;
  }

  .custom-video-player .rh5v-Overlay_inner {
    margin: 0;
    margin-left: -30px;
  }

  .custom-video-player .rh5v-Time_current {
    color: #fff;
    font-size: 13px;
  }

  .custom-video-player .rh5v-Time_duration {
    color: #fff;
    font-size: 13px;
  }

  .custom-video-player video {
    height: 100%;
    width: 100%;
    /* Add any custom styles for the video element */
  }

  .custom-video-player .video-controls {
    /* Add any custom styles for the control bar */
  }

  .custom-video-player .video-controls button {
    /* Add any custom styles for the control buttons */
  }

  .custom-video-player .video-poster {
    /* Add any custom styles for the poster image */
  }
`;

export const VideoPlaceHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.$image}) no-repeat center/cover;

  .playBtn {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    border-radius: 4px;
  }
`;
