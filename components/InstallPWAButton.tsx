import React from 'react';
import LogoIcon from './icons/LogoIcon';

interface InstallPWAButtonProps {
    onInstall: () => void;
    onDismiss: () => void;
}

const InstallPWAButton: React.FC<InstallPWAButtonProps> = ({ onInstall, onDismiss }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 z-50 animate-slide-up">
            <div className="bg-zinc-800 rounded-2xl p-4 flex items-center justify-between shadow-lg max-w-md mx-auto">
                <div className="flex items-center gap-4">
                    <LogoIcon className="w-10 h-10 text-green-400" />
                    <div>
                        <h3 className="font-bold text-white">Instalar Gym App</h3>
                        <p className="text-sm text-zinc-400">Añadir a la pantalla de inicio</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                     <button
                        onClick={onDismiss}
                        className="text-zinc-400 font-semibold px-4 py-2 rounded-lg hover:bg-zinc-700 transition-colors text-sm"
                    >
                        Ahora no
                    </button>
                    <button
                        onClick={onInstall}
                        className="bg-green-500 text-black font-bold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
                    >
                        Instalar
                    </button>
                </div>
            </div>
            <style>{`
                @keyframes slide-up {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-slide-up {
                    animation: slide-up 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default InstallPWAButton;
