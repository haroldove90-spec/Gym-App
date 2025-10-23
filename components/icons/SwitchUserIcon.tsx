import React from 'react';
import { IconProps } from './IconProps';

const SwitchUserIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.67c.12-.318.232-.656.328-1.003M7.86 15.75l.001-.109a6.375 6.375 0 0111.964-4.67c.12.318.232.656.328-1.003m-7.86 5.75l-2.953-2.953m0 0a3.001 3.001 0 014.242 0M1.396 6.364a3.001 3.001 0 014.242 0l2.953 2.953m-7.195 0a3.001 3.001 0 010-4.242l2.953-2.953a3.001 3.001 0 014.242 0l2.953 2.953m-7.195 0l2.953 2.953" />
    </svg>
);

export default SwitchUserIcon;
