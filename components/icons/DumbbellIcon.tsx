
import React from 'react';
import { IconProps } from './IconProps';

const DumbbellIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 6.75l-4.72-4.72a1.5 1.5 0 00-2.12 0L3 13.17V18h4.83l11.12-11.12a1.5 1.5 0 000-2.12zM9 15H6v-3m9 0h3v-3"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.25 10.75L9 16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18"/>
    </svg>
);

export default DumbbellIcon;
