import React from 'react';
import { Screen } from '../types';
import HomeIcon from './icons/HomeIcon';
import DumbbellIcon from './icons/DumbbellIcon';
import MoonIcon from './icons/MoonIcon';
import CalendarIcon from './icons/CalendarIcon';
import UserIcon from './icons/UserIcon';
import LogoIcon from './icons/LogoIcon';

interface SideNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

const navItems = [
  { screen: Screen.Home, Icon: HomeIcon },
  { screen: Screen.Training, Icon: DumbbellIcon },
  { screen: Screen.Rest, Icon: MoonIcon },
  { screen: Screen.Classes, Icon: CalendarIcon },
  { screen: Screen.Profile, Icon: UserIcon },
];

const SideNav: React.FC<SideNavProps> = ({ activeScreen, setActiveScreen }) => {
  return (
    <nav className="hidden lg:flex flex-col w-64 bg-zinc-900 p-4 border-r border-zinc-800 shrink-0">
        <div className="flex items-center gap-3 mb-8 px-2">
             <LogoIcon className="w-10 h-10 text-green-400" />
             <span className="text-white font-bold text-xl">Gym App</span>
        </div>
      <div className="flex flex-col space-y-2">
        {navItems.map(({ screen, Icon }) => (
          <button
            key={screen}
            onClick={() => setActiveScreen(screen)}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors text-left ${
              activeScreen === screen 
                ? 'bg-green-500/20 text-green-400 font-semibold' 
                : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
            }`}
          >
            <Icon className="h-6 w-6" />
            <span>{screen}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;