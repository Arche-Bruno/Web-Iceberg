import React, { useRef, useState } from "react";
import "./SectionVideo.css";
import video from "../../imgs/video/video1.mp4";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import img from "../../imgs/building-2.png";
const SectionVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleShowVideo = () => {
    setShowVideo(!showVideo);
    if (!showVideo) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="container-sectionVideo">
      <section className="sectionVideo">
        <div className="sectionVideo-video" >

          <div className="video">
            <img src={img} alt="image" />

            <button ref={videoRef} className={`sectionVideo-video-btn ${showVideo ? 'sectionVideo-hideVideo': ''}`}onClick={handleShowVideo} >

              <VideoLibraryIcon 
              sx={{fontSize:"70px"}} className="sectionVideo-btn-icon"></VideoLibraryIcon>

            </button>
          </div>
        </div>

        <div className={`popup-video ${showVideo ? "show" : ""}`}>
          <span onClick={handleShowVideo}>&times;</span>
          <video
            className="videoPop"
            src={video}
            autoPlay
            controls
            ref={videoRef}
          ></video>
        </div>
      </section>
    </div>
  );
};

export default SectionVideo;
