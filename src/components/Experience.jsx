import React , { useRef } from 'react'
import { useState, useEffect } from 'react';


const Experience = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    // Check screen width on component mount
        const handleResize = () => {
          setIsVideoVisible(window.innerWidth > 100); // Example: Play video on screens wider than 768px
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
const videoRef = useRef(null);

      const toggleFullScreen = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
          if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
          } else if (videoElement.mozRequestFullScreen) { /* Firefox */
            videoElement.mozRequestFullScreen();
          } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            videoElement.webkitRequestFullscreen();
          } else if (videoElement.msRequestFullscreen) { /* IE/Edge */
            videoElement.msRequestFullscreen();
          }
        }
      };
      return (
        <div>
      <div className="flex flex-wrap justify-center items-stretch">
      <div className="flex flex-col items-center p-4 m-2 mb-4">
      {isVideoVisible && (
              <video
               ref={videoRef}
                src="https://res.cloudinary.com/dsnzpqfvd/video/upload/v1720691741/WhatsApp_Video_2024-07-11_at_12.51.12_xceznf.mp4"
                className="rounded-lg w-full h-auto"
                autoPlay
                loop
                muted
                onClick={toggleFullScreen}
                controls={false} // Disable native controls (playback control bar)
                // disablePictureInPicture // Disable picture-in-picture mode
                // disableRemotePlayback // Disable remote playback features
                disableDownload // Disable download button
              />
            )}
      <p className="text-center">Text after video</p>
    </div>
      <div className="flex flex-col items-center p-4 m-2 mb-4">
      {isVideoVisible && (
              <video
              ref={videoRef}
                src="https://res.cloudinary.com/dsnzpqfvd/video/upload/v1720691741/WhatsApp_Video_2024-07-11_at_12.51.12_xceznf.mp4"
                className="rounded-lg w-full h-auto"
                autoPlay
                loop
                muted
                onClick={toggleFullScreen}
                controls={false} // Disable native controls (playback control bar)
                // disablePictureInPicture // Disable picture-in-picture mode
                // disableRemotePlayback // Disable remote playback features
                disableDownload // Disable download button
              />
            )}
      <p className="text-center">Text after video</p>
    </div>
      <div className="flex flex-col items-center p-4 m-2 mb-4">
      {isVideoVisible && (
              <video
              ref={videoRef}
                src="https://res.cloudinary.com/dsnzpqfvd/video/upload/v1720691741/WhatsApp_Video_2024-07-11_at_12.51.12_xceznf.mp4"
                className="rounded-lg w-full h-auto"
                autoPlay
                loop
                muted
                onClick={toggleFullScreen}
                controls={false} // Disable native controls (playback control bar)
          // disablePictureInPicture // Disable picture-in-picture mode
          // disableRemotePlayback // Disable remote playback features
          disableDownload // Disable download button
              />
            )}
      <p className="text-center">Text after video</p>
    </div>

</div>



</div>
  )
}

export default Experience
