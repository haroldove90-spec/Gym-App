import React from 'react';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';

interface ScheduleManagementScreenProps {
    onBack: () => void;
}

const classes = [
    { id: 1, name: 'Yoga Fluir', instructor: 'Elena Sanz', time: '19:00 - 20:00', spots: '4/15' },
    { id: 2, name: 'Spinning Extremo', instructor: 'Marcos Rivas', time: '18:00 - 19:00', spots: '15/15' },
    { id: 3, name: 'Boxeo', instructor: 'David Chen', time: '20:00 - 21:00', spots: '8/12' },
    { id: 4, name: 'Pilates', instructor: 'Laura García', time: '09:00 - 10:00', spots: '10/10' },
];

const ScheduleManagementScreen: React.FC<ScheduleManagementScreenProps> = ({ onBack }) => {
    return (
         <div className="p-6 flex flex-col h-full">
            <div className="w-full max-w-4xl mx-auto flex flex-col flex-grow min-h-0">
              <header className="flex items-center mb-6 shrink-0">
                  <button onClick={onBack} className="text-white mr-4 p-2 rounded-full hover:bg-zinc-800">
                      <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                  <h1 className="text-xl font-bold">Gestión de Horarios y Clases</h1>
              </header>

              <main className="flex-grow overflow-y-auto space-y-3">
                  {classes.map(cls => (
                      <div key={cls.id} className="bg-zinc-900 rounded-lg p-4">
                          <div className="flex items-start justify-between">
                              <div>
                                  <h3 className="font-bold text-white">{cls.name}</h3>
                                  <p className="text-sm text-zinc-400">Instructor: {cls.instructor}</p>
                                  <p className="text-sm text-zinc-400">Horario: {cls.time}</p>
                              </div>
                              <span className="text-sm bg-zinc-700 text-zinc-300 px-2 py-1 rounded-full">{cls.spots}</span>
                          </div>
                          <div className="mt-3 flex items-center space-x-2">
                              <button className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">Editar</button>
                              <button className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full">Cancelar</button>
                          </div>
                      </div>
                  ))}
              </main>
              <footer className="mt-4 shrink-0">
                  <button className="w-full bg-green-500 text-black font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">
                      Crear Nueva Clase
                  </button>
              </footer>
            </div>
        </div>
    );
};

export default ScheduleManagementScreen;