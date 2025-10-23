import React from 'react';
import { Screen } from '../types';
import HomeIcon from './icons/HomeIcon';
import DumbbellIcon from './icons/DumbbellIcon';
import MoonIcon from './icons/MoonIcon';
import CalendarIcon from './icons/CalendarIcon';
import UserIcon from './icons/UserIcon';

interface BottomNavProps {
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

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  return (
    <div className="bg-zinc-900 px-4 lg:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ screen, Icon }) => (
          <button
            key={screen}
            onClick={() => setActiveScreen(screen)}
            className="flex flex-col items-center justify-center space-y-1 text-zinc-400 w-16 h-full"
          >
            <Icon className={`h-6 w-6 ${activeScreen === screen ? 'text-green-400' : ''}`} />
            <span className={`text-xs ${activeScreen === screen ? 'text-green-400' : ''}`}>
              {screen}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;