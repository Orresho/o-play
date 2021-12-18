import React from 'react';
import { BodyText } from './BodyText';
import './Image.scss';

interface ImageProps {
    src: string;
    alt?: string;
    tooltipText?: string;
}

export const Image: React.FC<ImageProps> = ({ tooltipText, src, alt }) => {

    const [hover, setHover] = React.useState<boolean>(false);

    const showTooltip = hover && tooltipText && tooltipText.length > 0;

    return (
        <>
            {showTooltip && (
                <div className="tooltip">
                    <div className="tooltipContent">
                        <BodyText>{tooltipText}</BodyText>
                    </div>
                </div>
            )}
            <div
                className="image"
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}>
                <img
                    src={src}
                    alt={alt}
                />
            </div>


        </>
    )
}