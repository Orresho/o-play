import React from 'react';

interface MarginProps {
    bottom?: number;
}

export const Margin: React.FC<MarginProps> = ({ bottom }) => {
    return (
        <div style={{ marginBottom: bottom }} />
    )
}