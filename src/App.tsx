import React, { useEffect, useRef } from 'react';
import './App.scss';
import axios from 'axios';
import { MoviesData } from './types';
import { BodyText } from './components/BodyText';
import { Image } from './components/Image';

const moviePostersUrl = 'https://gist.githubusercontent.com/jocke138/056a510a33af4d87f1b39d88a6f9dc67/raw/6fe88083f996162a5c335bd4ec7278cdcf2eef78/movies.json'

const App: React.FC<{}> = () => {

  const [moviesData, setMoviesData] = React.useState<MoviesData | null>(null);
  const [hasError, setHasError] = React.useState<any>(null); // Could be any error
  const [selectedVideo, setSelectedVideo] = React.useState<string | null | undefined>(null);

  React.useEffect(() => {
    axios.get(moviePostersUrl)
      .then((res) => {
        setMoviesData(res.data)
        // first video in the first panel as temporary initial
        setSelectedVideo(res.data.panels[0].items[0].video)
      })
      //Todo: fixa nått fint fel - Gör även en mission control där användaren kan trigga fel i url:n tex för att simulera felet här
      .catch((error) => {
        console.error(error)
        setHasError(true)
      })
  }, [])

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

  if (!moviesData && !selectedVideo) {
    return <div>loading with placeholders or similar...</div>
  }

  return (
    <div className="App">
      <div className="VideoComponent">
        <video controls width="100%" height="400" ref={videoRef} autoPlay>
          <source src={selectedVideo}
            type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>

      <div className="PosterCategories">
        {moviesData?.panels.map((panel, i) => (
          <div key={i} className="MoviePanelContainer">
            <div className="MoviePanelContent">
              <h3>{panel.title}</h3>
              <div className="Posters">
                {panel?.items.map((poster, i) => (
                  <div key={i} className="SinglePoster" onClick={() => setSelectedVideo(poster.video)}>
                    <Image src={poster.image} alt={poster.title} tooltipText={poster.description}/>
                    <BodyText>{poster.title}</BodyText>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
