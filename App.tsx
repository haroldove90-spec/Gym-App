import React, { useState, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './components/screens/HomeScreen';
import ProgramsScreen from './components/screens/ProgramsScreen';
import ClassesScreen from './components/screens/ClassesScreen';
import AdminScreen from './components/screens/AdminScreen';
import Header from './components/Header';
import { Screen, Role } from './types';
import ProfileScreen from './components/screens/ProfileScreen';
import RestScreen from './components/screens/RestScreen';
import SideNav from './components/SideNav';
import InstallPWAButton from './components/InstallPWAButton';

// Add type for the beforeinstallprompt event
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}


const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Home);
  const [userRole, setUserRole] = useState<Role>(Role.User);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (!installPrompt) {
      return;
    }
    // Show the install prompt
    installPrompt.prompt();
    // Wait for the user to respond to the prompt
    installPrompt.userChoice.then(({ outcome }) => {
      if (outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      // We've used the prompt, and can't use it again, so clear it
      setInstallPrompt(null);
    });
  };

  const handleInstallDismiss = () => {
    setInstallPrompt(null);
  };

  const renderUserScreen = () => {
    switch (activeScreen) {
      case Screen.Home:
        return <HomeScreen />;
      case Screen.Training:
        return <ProgramsScreen />;
      case Screen.Classes:
        return <ClassesScreen />;
      case Screen.Rest:
         return <RestScreen />;
      case Screen.Profile:
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  const toggleRole = () => {
    setUserRole(prevRole => (prevRole === Role.User ? Role.Admin : Role.User));
  };


  return (
    <div className="w-full h-full bg-black flex flex-col font-sans">
      <Header userRole={userRole} onToggleRole={toggleRole} />
      {userRole === Role.User ? (
        <div className="flex flex-grow min-h-0">
          <SideNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
          <div className="flex-grow flex flex-col min-h-0">
            <div className="flex-grow min-h-0 overflow-y-auto">
              {renderUserScreen()}
            </div>
            <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
          </div>
        </div>
      ) : (
        <div className="flex-grow overflow-y-auto">
          <AdminScreen />
        </div>
      )}
      {installPrompt && (
        <InstallPWAButton 
          onInstall={handleInstallClick}
          onDismiss={handleInstallDismiss}
        />
      )}
    </div>
  );
};

export default App;