import React, { useEffect, useState } from 'react';
import { BodyText } from './BodyText';
import './Tooltip.scss';

interface TooltipProps {
    tooltipText: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, tooltipText }) => {
    const [hover, setHover] = useState<boolean>(false);
    const [event, setEvent] = useState<MouseEvent | null>(null);

    const showTooltip = hover && tooltipText && tooltipText.length > 0;

    useEffect(() => {
        if (!hover) {
            removeListener();
            return;
        }
        addListener();
    }, [showTooltip])

    const addListener = () => window.addEventListener('mousemove', (e) => setEvent(e));
    const removeListener = () => window.removeEventListener('mousemove', () => setEvent(null));

    const { pageX, pageY } = event || { pageX: -1, pageY: -1 };

    return (
        <>
            {showTooltip && (
                <div className="tooltip" style={{ top: pageY - 160, left: pageX + 50 }}>
                    <div className="tooltipContent">
                        <BodyText>{tooltipText}</BodyText>
                    </div>
                </div>
            )}
            <div
                onMouseOver={() => {
                    setHover(true);
                }}
                onMouseOut={() => {
                    setHover(false);
                }}>
                {children}
            </div>
        </>
    )
}