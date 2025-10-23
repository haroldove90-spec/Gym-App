import React from 'react';
import { IconProps } from './IconProps';

const LogoIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 2.5a3.5 3.5 0 0 1 0 7h-2.92l-3.33 3.33-1 1-3.33 3.33H2.5a3.5 3.5 0 1 1 0-7h2.92l3.33-3.33 1-1 3.33-3.33H15.5z"/>
        <path d="M8.5 21.5a3.5 3.5 0 1 1 0-7h2.92l3.33-3.33 1-1 3.33-3.33h2.42a3.5 3.5 0 0 1 0 7h-2.92l-3.33 3.33-1 1-3.33 3.33H8.5z"/>
    </svg>
);

export default LogoIcon;
