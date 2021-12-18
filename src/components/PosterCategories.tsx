import React from 'react';
import { MoviesData } from '../types';
import { BodyText } from './helpers/BodyText';
import { Image } from './helpers/Image';
import './PosterCategories.scss';

interface PosterCategoriesProps extends MoviesData {
    setSelectedVideo: (video: string) => void;
}

const PosterCategories: React.FC<PosterCategoriesProps> = ({ panels, setSelectedVideo }) => {
    return (
        <div className="PosterCategories">
            {panels?.map((panel, i) => (
                <div key={i} className="MoviePanelContainer">
                    <div className="MoviePanelContent">
                        <h3>{panel.title}</h3>
                        <div className="Posters">
                            {panel?.items.map((poster, i) => (
                                <div key={i} className="SinglePoster" onClick={() => setSelectedVideo(poster.video)}>
                                    <Image src={poster.image} alt={poster.title} />
                                    <BodyText>{poster.title}</BodyText>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PosterCategories;
