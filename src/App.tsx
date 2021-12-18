import React from 'react';
import './App.scss';
import axios from 'axios';
import { MoviesData } from './types';
import { Video } from './components/Video';
import PosterCategories from './components/PosterCategories';
import { Margin } from './components/helpers/Margin';

const moviePostersUrl = 'https://gist.githubusercontent.com/jocke138/056a510a33af4d87f1b39d88a6f9dc67/raw/6fe88083f996162a5c335bd4ec7278cdcf2eef78/movies.json'

const App: React.FC = () => {
  const [moviesData, setMoviesData] = React.useState<MoviesData | null>(null);
  const [hasError, setHasError] = React.useState<any>(null); // Generic, could be any kind of error
  const [selectedVideo, setSelectedVideo] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    fetchMoviesData();
  }, [])

  const fetchMoviesData = () => axios.get(moviePostersUrl)
    .then((res) => {
      setMoviesData(res.data)
      // first video in the first panel as temporary initial
      setSelectedVideo(res.data.panels[0].items[0].video)
    })
    //Todo: rendera nått snyggt med fel - Gör även en mission control där användaren kan trigga fel i url:n tex för att simulera ett fel?
    .catch((error) => {
      console.error(error)
      setHasError(true)
    });


  if (!moviesData || !selectedVideo) {
    return <div>loading with placeholders or similar...</div>
  }

  if (hasError) {
    return <div>Can't view the page right now</div>
  }

  return (
    <div className="App">
      <Video selectedVideo={selectedVideo} />
      <Margin bottom={42} />
      <PosterCategories 
        panels={moviesData.panels} 
        setSelectedVideo={setSelectedVideo} />
    </div>
  )
}

export default App;
