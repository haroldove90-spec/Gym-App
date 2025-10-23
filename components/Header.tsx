import React from 'react';
import { Role } from '../types';
import LogoIcon from './icons/LogoIcon';
import SwitchUserIcon from './icons/SwitchUserIcon';

interface HeaderProps {
  userRole: Role;
  onToggleRole: () => void;
}

const Header: React.FC<HeaderProps> = ({ userRole, onToggleRole }) => {
  return (
    <header className="bg-black p-4 flex justify-between items-center border-b border-zinc-800 shrink-0">
      <div className="flex items-center gap-3">
        <LogoIcon className="w-10 h-10 text-green-400 lg:hidden" />
        <span className="text-white font-bold text-xl lg:hidden">Gym App</span>
        <div className="hidden lg:block w-10 h-10" />
      </div>
       <button 
        onClick={onToggleRole}
        className="bg-green-500 text-black font-bold py-2 px-4 rounded-full text-sm z-50 flex items-center gap-2 hover:bg-green-600 transition-colors"
        aria-label="Switch Role"
      >
        <SwitchUserIcon className="w-5 h-5" />
        <span>{userRole === Role.User ? 'Admin View' : 'User View'}</span>
      </button>
    </header>
  );
};

export default Header;