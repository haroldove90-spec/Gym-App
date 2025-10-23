import React from 'react';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';

interface NotificationsScreenProps {
    onBack: () => void;
}

const recentNotifications = [
    { id: 1, title: '¡Nueva clase de HIIT!', date: '2024-05-20' },
    { id: 2, title: 'Mantenimiento de máquinas', date: '2024-05-18' },
    { id: 3, title: 'Promoción de verano', date: '2024-05-15' },
];

const NotificationsScreen: React.FC<NotificationsScreenProps> = ({ onBack }) => {
    return (
        <div className="p-6 flex flex-col h-full">
            <div className="w-full max-w-2xl mx-auto flex flex-col flex-grow min-h-0">
              <header className="flex items-center mb-6 shrink-0">
                  <button onClick={onBack} className="text-white mr-4 p-2 rounded-full hover:bg-zinc-800">
                      <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                  <h1 className="text-xl font-bold">Sistema de Notificaciones</h1>
              </header>
              
              <main className="flex-grow overflow-y-auto space-y-6">
                  <div className="bg-zinc-900 p-4 rounded-lg">
                      <h2 className="font-semibold text-white mb-3">Crear Notificación</h2>
                      <div className="space-y-3">
                          <input 
                              type="text" 
                              placeholder="Título"
                              className="w-full bg-zinc-800 border-zinc-700 border rounded-lg py-2 px-4 text-white placeholder-zinc-500"
                          />
                          <textarea 
                              placeholder="Mensaje..."
                              rows={4}
                              className="w-full bg-zinc-800 border-zinc-700 border rounded-lg py-2 px-4 text-white placeholder-zinc-500"
                          />
                          <button className="w-full bg-green-500 text-black font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">
                              Enviar Notificación
                          </button>
                      </div>
                  </div>

                  <div>
                      <h2 className="font-semibold text-white mb-2">Notificaciones Recientes</h2>
                      <div className="space-y-2">
                          {recentNotifications.map(notif => (
                              <div key={notif.id} className="bg-zinc-900 rounded-lg p-3">
                                  <p className="font-medium text-white">{notif.title}</p>
                                  <p className="text-xs text-zinc-400">Enviado: {notif.date}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </main>
            </div>
        </div>
    );
};

export default NotificationsScreen;