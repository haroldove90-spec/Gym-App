import React from 'react';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';

interface MembersManagementScreenProps {
    onBack: () => void;
}

const members = [
    { id: 1, name: 'Laura García', status: 'Activo', joinDate: '2023-01-15', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { id: 2, name: 'Carlos Pérez', status: 'Activo', joinDate: '2022-11-20', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
    { id: 3, name: 'Ana Martínez', status: 'Inactivo', joinDate: '2023-03-10', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
    { id: 4, name: 'David Rodríguez', status: 'Activo', joinDate: '2023-05-01', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d' },
];

const MembersManagementScreen: React.FC<MembersManagementScreenProps> = ({ onBack }) => {
    return (
        <div className="p-6 flex flex-col h-full">
            <div className="w-full max-w-4xl mx-auto flex flex-col flex-grow min-h-0">
              <header className="flex items-center mb-6 shrink-0">
                  <button onClick={onBack} className="text-white mr-4 p-2 rounded-full hover:bg-zinc-800">
                      <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                  <h1 className="text-xl font-bold">Gestión de Miembros</h1>
              </header>
              
              <div className="relative mb-4 shrink-0">
                  <input 
                      type="text" 
                      placeholder="Buscar miembro..."
                      className="w-full bg-zinc-800 border-zinc-700 border rounded-lg py-2 px-4 text-white placeholder-zinc-500"
                  />
              </div>

              <main className="flex-grow overflow-y-auto space-y-3">
                  {members.map(member => (
                      <div key={member.id} className="bg-zinc-900 rounded-lg p-3 flex items-center justify-between">
                          <div className="flex items-center">
                              <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full mr-3" />
                              <div>
                                  <p className="font-semibold text-white">{member.name}</p>
                                  <p className="text-xs text-zinc-400">Miembro desde: {member.joinDate}</p>
                              </div>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${member.status === 'Activo' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                              {member.status}
                          </span>
                      </div>
                  ))}
              </main>

              <footer className="mt-4 shrink-0">
                  <button className="w-full bg-green-500 text-black font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">
                      Añadir Miembro
                  </button>
              </footer>
            </div>
        </div>
    );
};

export default MembersManagementScreen;