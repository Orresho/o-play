import React from 'react';

export const BodyText: React.FC<{children: any}> = ({ children }) => {
    return (
        <div style={{ fontSize: 12 }} >{children}</div>
    )
}