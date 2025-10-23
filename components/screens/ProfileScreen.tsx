import React, { useState } from 'react';
import EditIcon from '../icons/EditIcon';
import NotificationBellIcon from '../icons/NotificationBellIcon';
import LogoutIcon from '../icons/LogoutIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import { ProfileSubScreen } from '../../types';
import EditProfileScreen from './profile/EditProfileScreen';
import NotificationsSettingsScreen from './profile/NotificationsSettingsScreen';

const ProfileMainView: React.FC<{ navigate: (screen: ProfileSubScreen) => void }> = ({ navigate }) => {
  const menuItems = [
    { icon: <EditIcon className="w-6 h-6 text-green-400" />, label: 'Editar Perfil', screen: ProfileSubScreen.Edit },
    { icon: <NotificationBellIcon className="w-6 h-6 text-green-400" />, label: 'Notificaciones', screen: ProfileSubScreen.Notifications },
    { icon: <LogoutIcon className="w-6 h-6 text-red-400" />, label: 'Cerrar Sesión', textColor: 'text-red-400' },
  ];

  return (
    <div className="p-6 h-full flex flex-col space-y-8 overflow-y-auto lg:flex-row lg:space-y-0 lg:gap-8">
      <header className="flex flex-col items-center text-center space-y-3 shrink-0 lg:w-1/3 lg:border-r lg:border-zinc-800 lg:pr-8 lg:items-start lg:text-left">
        <img
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          alt="Laura García"
          className="w-24 h-24 rounded-full border-4 border-zinc-800"
        />
        <div>
          <h1 className="text-2xl font-bold">Laura García</h1>
          <p className="text-zinc-400">laura.garcia@email.com</p>
        </div>
      </header>

      <main className="flex-grow space-y-8 lg:w-2/3">
        <div>
          <h2 className="text-lg font-semibold text-zinc-300 mb-3">Estadísticas</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-zinc-900 p-4 rounded-xl">
              <p className="text-zinc-400 text-sm">Altura</p>
              <p className="font-bold text-lg">1.68<span className="text-base font-normal">m</span></p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-xl">
              <p className="text-zinc-400 text-sm">Peso</p>
              <p className="font-bold text-lg">62<span className="text-base font-normal">kg</span></p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-xl">
              <p className="text-zinc-400 text-sm">Edad</p>
              <p className="font-bold text-lg">28<span className="text-base font-normal">años</span></p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-300 mb-3">Mis Metas</h2>
          <div className="bg-zinc-900 p-4 rounded-xl space-y-2">
            <p className="text-zinc-200">▪️ Ganar masa muscular</p>
            <p className="text-zinc-200">▪️ Correr 5k en menos de 30 min</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-300 mb-3">Cuenta</h2>
          <div className="bg-zinc-900 rounded-xl">
            {menuItems.map((item, index) => (
              <button 
                key={item.label} 
                onClick={() => item.screen && navigate(item.screen)}
                className={`w-full flex items-center justify-between p-4 text-left ${index < menuItems.length - 1 ? 'border-b border-zinc-800' : ''}`}>
                <div className="flex items-center space-x-4">
                  {item.icon}
                  <span className={`font-medium ${item.textColor || 'text-white'}`}>{item.label}</span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-zinc-500" />
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};


const ProfileScreen: React.FC = () => {
    const [subScreen, setSubScreen] = useState<ProfileSubScreen>(ProfileSubScreen.Main);

    const handleBack = () => setSubScreen(ProfileSubScreen.Main);

    const renderContent = () => {
        switch (subScreen) {
            case ProfileSubScreen.Edit:
                return <EditProfileScreen onBack={handleBack} />;
            case ProfileSubScreen.Notifications:
                return <NotificationsSettingsScreen onBack={handleBack} />;
            default:
                return <ProfileMainView navigate={setSubScreen} />;
        }
    };

    return (
        <div className="bg-black text-white h-full">
            {renderContent()}
        </div>
    );
};

export default ProfileScreen;