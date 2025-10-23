import React from 'react';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';

interface ReportsScreenProps {
    onBack: () => void;
}

const StatCard: React.FC<{ title: string, value: string, change?: string, changeType?: 'increase' | 'decrease' }> = ({ title, value, change, changeType }) => (
    <div className="bg-zinc-900 p-4 rounded-lg">
        <p className="text-sm text-zinc-400">{title}</p>
        <div className="flex items-baseline space-x-2">
            <p className="text-2xl font-bold text-white">{value}</p>
            {change && (
                <span className={`text-xs font-semibold ${changeType === 'increase' ? 'text-green-400' : 'text-red-400'}`}>
                    {change}
                </span>
            )}
        </div>
    </div>
);

const ReportsScreen: React.FC<ReportsScreenProps> = ({ onBack }) => {
    return (
        <div className="p-6 flex flex-col h-full">
            <div className="w-full max-w-7xl mx-auto flex flex-col flex-grow">
              <header className="flex items-center mb-6 shrink-0">
                  <button onClick={onBack} className="text-white mr-4 p-2 rounded-full hover:bg-zinc-800">
                      <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                  <h1 className="text-xl font-bold">Reportes y Analíticas</h1>
              </header>
              
              <main className="flex-grow overflow-y-auto space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <StatCard title="Miembros Totales" value="2,450" />
                      <StatCard title="Miembros Activos" value="1,890" />
                      <StatCard title="Asistencia (Mes)" value="8,120" change="+5%" changeType="increase" />
                      <StatCard title="Ingresos (Mes)" value="$25,4K" change="-2%" changeType="decrease" />
                  </div>

                  <div>
                      <h2 className="font-semibold text-white mb-2">Clases más populares</h2>
                      <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center text-zinc-300"><span>Spinning Extremo</span><span>150 asistentes</span></div>
                          <div className="flex justify-between items-center text-zinc-300"><span>Yoga Fluir</span><span>121 asistentes</span></div>
                          <div className="flex justify-between items-center text-zinc-300"><span>Boxeo</span><span>98 asistentes</span></div>
                      </div>
                  </div>

                  <div>
                      <h2 className="font-semibold text-white mb-2">Nuevos Miembros (Últimos 6 meses)</h2>
                      <div className="bg-zinc-900 p-4 rounded-lg flex items-end justify-between h-40">
                        <div className="w-[12%] bg-green-500 rounded-t-sm" style={{height: '40%'}}></div>
                        <div className="w-[12%] bg-green-500 rounded-t-sm" style={{height: '60%'}}></div>
                        <div className="w-[12%] bg-green-500 rounded-t-sm" style={{height: '50%'}}></div>
                        <div className="w-[12%] bg-green-500 rounded-t-sm" style={{height: '80%'}}></div>
                        <div className="w-[12%] bg-green-500 rounded-t-sm" style={{height: '70%'}}></div>
                        <div className="w-[12%] bg-green-500 rounded-t-sm" style={{height: '90%'}}></div>
                      </div>
                  </div>
              </main>
            </div>
        </div>
    );
};

export default ReportsScreen;