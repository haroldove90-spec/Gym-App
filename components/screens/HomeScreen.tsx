import React from 'react';
import CircularProgress from '../CircularProgress';
import MoonIcon from '../icons/MoonIcon';

const HeartIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
);

const WaterDropIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22a10 10 0 0010-10c0-6-10-12-10-12S2 6 2 12a10 10 0 0010 10z" /></svg>
);

const BicepIcon: React.FC = () => (
    <svg className="w-6 h-6 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; unit: string; }> = ({ icon, label, value, unit }) => (
  <div className="bg-zinc-900 rounded-2xl p-4 flex items-center space-x-4">
    <div className="text-green-400">{icon}</div>
    <div>
      <p className="text-zinc-400 text-sm">{label}</p>
      <p className="text-white font-semibold">
        {value} <span className="text-zinc-400 font-normal">{unit}</span>
      </p>
    </div>
  </div>
);

const HomeScreen: React.FC = () => {
  return (
    <div className="bg-black text-white p-6 min-h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Laura G.</h1>
        <p className="text-zinc-400">¡Hola, Laura! ¿Listas para entrenar?</p>
      </div>

      <main className="flex-grow flex flex-col items-center justify-center space-y-8 lg:flex-row lg:items-start lg:justify-center lg:space-y-0 lg:gap-8">
        <div className="flex flex-col items-center w-full lg:w-auto">
          <CircularProgress progress={75} />
          <p className="mt-4 text-zinc-300 font-medium">Meta Semanal</p>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 lg:max-w-sm">
          <StatCard icon={<HeartIcon />} label="Calorias Quemadas" value="12,450" unit="kcal" />
          <StatCard icon={<WaterDropIcon />} label="Consumo de Agua" value="2.8" unit="L" />
          <StatCard icon={<BicepIcon />} label="Masa Muscular" value="45" unit="%" />
          <StatCard icon={<MoonIcon />} label="Sueño Promedio" value="7.5" unit="h" />
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;