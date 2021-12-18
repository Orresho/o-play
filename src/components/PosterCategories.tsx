import React from 'react';
import { MoviesData } from '../types';
import { BodyText } from './helpers/BodyText';
import { Tooltip } from './helpers/Tooltip';
import './PosterCategories.scss';

interface PosterCategoriesProps extends MoviesData {
    setSelectedVideo: (video: string) => void;
}

const PosterCategories: React.FC<PosterCategoriesProps> = ({ panels, setSelectedVideo }) => {
    return (
        <div className="PosterCategories">
            {panels?.map((panel, i) => (
                <div key={i}>
                    <h3>{panel.title}</h3>
                    <div className="PostersRow">
                        {panel?.items.map((poster, i) => (
                            <div key={i} className="SinglePoster" onClick={() => setSelectedVideo(poster.video)}>
                                <Tooltip tooltipText={poster.description}>
                                    <img
                                        src={poster.image}
                                        alt={`${poster.title}`} />
                                </Tooltip>
                                <BodyText>{poster.title}</BodyText>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PosterCategories;
