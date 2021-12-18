import React from 'react';
import { BodyText } from './BodyText';

interface ImageProps {
    src: string;
    alt?: string;
    tooltipText?: string;
}

export const Image: React.FC<ImageProps> = ({ tooltipText, src, alt }) => {

    const hasTooltip = tooltipText && tooltipText.length > 0;

    return (
        <div className="image">
            <img
                src={src}
                alt={alt}
            />
            {hasTooltip && (
                <div className="tooltip">
                    <BodyText>{tooltipText}</BodyText>
                </div>
            )}
        </div>
    )
}