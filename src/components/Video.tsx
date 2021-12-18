import React, { useEffect, useRef } from 'react';
import './Video.scss';

interface VideoProps {
    selectedVideo: string | undefined;
}

export const Video: React.FC<VideoProps> = ({ selectedVideo }) => {
    const videoRef = useRef<any>();
    const previousUrl = useRef(selectedVideo);

    useEffect(() => {
        if (previousUrl.current === selectedVideo) {
            return;
        }

        if (videoRef.current) {
            videoRef.current.load();
        }

        previousUrl.current = selectedVideo;
    }, [selectedVideo]);

    return (
        <div className="VideoContainer">
            <video controls width="100%" height="400" ref={videoRef} autoPlay>
                <source src={selectedVideo}
                    type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
    )
}