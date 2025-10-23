import React, { useState } from 'react';
import BedIcon from '../icons/BedIcon';
import PlayCircleIcon from '../icons/PlayCircleIcon';
import PauseCircleIcon from '../icons/PauseCircleIcon';

const RestScreen: React.FC = () => {
  const sleepData = [
    { day: 'L', hours: 7 },
    { day: 'M', hours: 6 },
    { day: 'X', hours: 8 },
    { day: 'J', hours: 7.5 },
    { day: 'V', hours: 6.5 },
    { day: 'S', hours: 9 },
    { day: 'D', hours: 8 },
  ];

  const articles = [
    { title: 'La importancia del sueño para el músculo', image: 'https://picsum.photos/200/100?image=1025', category: 'Sueño' },
    { title: 'Estiramientos post-entreno efectivos', image: 'https://picsum.photos/200/100?image=433', category: 'Recuperación' },
  ];
  
  const meditations = [
    { title: 'Meditación para dormir profundo', duration: '10 min' },
    { title: 'Relajación muscular progresiva', duration: '15 min' },
    { title: 'Mindfulness para atletas', duration: '5 min' },
  ];

  const [playingMeditation, setPlayingMeditation] = useState<string | null>(null);

  const handlePlayToggle = (title: string) => {
    setPlayingMeditation(prev => (prev === title ? null : title));
  };

  const maxSleepHours = 10;

  return (
    <div className="bg-black text-white p-6 min-h-full flex flex-col space-y-8 overflow-y-auto">
      <header>
        <h1 className="text-3xl font-bold">Descanso y Recuperación</h1>
        <p className="text-zinc-400">Tu cuerpo también necesita recargarse.</p>
      </header>
      
      <main className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
        <section className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Análisis de Sueño</h2>
          <div className="bg-zinc-900 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-zinc-400">Anoche dormiste</p>
                <p className="text-3xl font-bold">8<span className="text-xl font-normal">h</span> 15<span className="text-xl font-normal">m</span></p>
              </div>
              <BedIcon className="w-10 h-10 text-green-400" />
            </div>
            <div className="flex items-end h-32 gap-2">
              {sleepData.map((day, index) => (
                <div key={index} className="flex flex-col items-center flex-1 h-full justify-end">
                    <div 
                      className="w-3/5 max-w-[20px] bg-green-500 rounded-t-sm transition-all duration-300 hover:bg-green-400"
                      style={{ height: `${(day.hours / maxSleepHours) * 100}%` }}
                      title={`${day.hours} horas`}
                    ></div>
                  <span className="text-xs text-zinc-400 mt-2">{day.day}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Artículos de Recuperación</h2>
          <div className="space-y-4">
            {articles.map(article => (
              <div key={article.title} className="flex items-center bg-zinc-900 rounded-xl overflow-hidden">
                <img src={article.image} alt={article.title} className="w-24 h-full object-cover"/>
                <div className="p-3">
                  <p className="text-xs text-green-400 font-semibold">{article.category.toUpperCase()}</p>
                  <h3 className="font-bold text-white">{article.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Meditaciones Guiadas</h2>
          <div className="bg-zinc-900 rounded-xl divide-y divide-zinc-800">
             {meditations.map(meditation => (
                <div key={meditation.title} className="flex items-center justify-between p-4">
                    <div>
                        <h3 className="font-semibold text-white">{meditation.title}</h3>
                        <p className="text-sm text-zinc-400">{meditation.duration}</p>
                    </div>
                    <button 
                      onClick={() => handlePlayToggle(meditation.title)}
                      className="text-green-400"
                      aria-label={playingMeditation === meditation.title ? 'Pausar meditación' : 'Reproducir meditación'}
                    >
                        {playingMeditation === meditation.title ? <PauseCircleIcon className="w-8 h-8"/> : <PlayCircleIcon className="w-8 h-8"/>}
                    </button>
                </div>
             ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default RestScreen;