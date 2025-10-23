import React, { useState } from 'react';

const BackIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
);

const ChatIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
);

const PlayIcon: React.FC = () => (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
);

const ProgramsScreen: React.FC = () => {
  const [isDailyRoutineStarted, setIsDailyRoutineStarted] = useState(false);

  return (
    <div className="bg-black text-white min-h-full p-6 space-y-6">
      <header className="flex justify-between items-center">
        <button className="text-zinc-400"><BackIcon /></button>
        <h1 className="text-xl font-bold">Programas de Entrenamiento</h1>
        <button className="text-zinc-400"><ChatIcon /></button>
      </header>

      <div className="relative rounded-2xl overflow-hidden h-40 flex flex-col justify-end p-4" style={{ backgroundImage: 'url(https://picsum.photos/390/200?image=1060)', backgroundSize: 'cover' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold">Tu Rutina Diaria</h2>
          <p className="text-sm text-zinc-300">Basado en tus objetivos</p>
           {isDailyRoutineStarted && (
            <div className="w-full bg-zinc-700/50 rounded-full h-1.5 mt-2">
              <div className="bg-green-400 h-1.5 rounded-full" style={{width: `35%`}}></div>
            </div>
          )}
        </div>
        <button 
          onClick={() => setIsDailyRoutineStarted(true)}
          className="absolute bottom-4 right-4 bg-green-500 text-black font-bold py-2 px-4 rounded-full text-sm hover:bg-green-600 transition-colors"
        >
          {isDailyRoutineStarted ? 'Continuar' : 'Comenzar'}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative rounded-2xl overflow-hidden h-48 flex flex-col justify-end p-3" style={{ backgroundImage: 'url(https://picsum.photos/200/300?image=838)', backgroundSize: 'cover' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="font-bold">Reto 'Brazos de Acero'</h3>
            <p className="text-xs text-zinc-300">Intermedio</p>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden h-48 flex flex-col justify-end p-3" style={{ backgroundImage: 'url(https://picsum.photos/200/300?image=431)', backgroundSize: 'cover' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="font-bold">Reto #1</h3>
            <p className="text-xs text-zinc-300">Principiante</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-2">Vibrast te lideso</h2>
        <div className="bg-zinc-900 p-3 rounded-2xl flex items-center space-x-4">
            <div className="relative w-24 h-24 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(https://picsum.photos/200/200?image=1074)'}}>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <PlayIcon />
                </div>
            </div>
            <div className="flex-grow">
                <p className="font-bold">Fitness Master</p>
                <p className="text-zinc-400 text-sm">0:55</p>
                <div className="w-full bg-zinc-700 rounded-full h-1 mt-2">
                    <div className="bg-green-400 h-1 rounded-full" style={{width: '20%'}}></div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ProgramsScreen;