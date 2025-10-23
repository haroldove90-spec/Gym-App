import React, { useState } from 'react';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';

interface NotificationsSettingsScreenProps {
    onBack: () => void;
}

const ToggleSwitch: React.FC<{ label: string, description: string, initialEnabled?: boolean }> = ({ label, description, initialEnabled = false }) => {
    const [enabled, setEnabled] = useState(initialEnabled);
    return (
        <div 
            className="flex justify-between items-center bg-zinc-900 p-4 rounded-xl cursor-pointer"
            onClick={() => setEnabled(!enabled)}
        >
            <div>
                <h3 className="font-semibold text-white">{label}</h3>
                <p className="text-sm text-zinc-400">{description}</p>
            </div>
            <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors ${enabled ? 'bg-green-500' : 'bg-zinc-700'}`}>
                <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${enabled ? 'translate-x-6' : ''}`} />
            </div>
        </div>
    );
}

const NotificationsSettingsScreen: React.FC<NotificationsSettingsScreenProps> = ({ onBack }) => {
    return (
        <div className="p-6 flex flex-col h-full">
            <div className="w-full max-w-2xl mx-auto flex flex-col flex-grow">
                <header className="flex items-center mb-6 shrink-0">
                    <button onClick={onBack} className="text-white mr-4 p-2 rounded-full hover:bg-zinc-800">
                        <ArrowLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold">Notificaciones</h1>
                </header>
                <main className="flex-grow overflow-y-auto space-y-4">
                    <ToggleSwitch 
                        label="Promociones y Ofertas"
                        description="Recibir descuentos y ofertas especiales."
                        initialEnabled={true}
                    />
                    <ToggleSwitch 
                        label="Recordatorios de Clases"
                        description="Avisos sobre tus clases reservadas."
                        initialEnabled={true}
                    />
                    <ToggleSwitch 
                        label="Novedades del Gimnasio"
                        description="Actualizaciones sobre horarios y eventos."
                    />
                    <ToggleSwitch 
                        label="Resumen Semanal"
                        description="Tu progreso y actividad de la semana."
                    />
                </main>
            </div>
        </div>
    );
};

export default NotificationsSettingsScreen;