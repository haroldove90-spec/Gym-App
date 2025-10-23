import React, { useState } from 'react';

const HeaderCalendarIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);
const SearchIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);

const Calendar: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState<number>(25);
    const days = [
      { day: 'L', date: 21 },
      { day: 'M', date: 22 },
      { day: 'X', date: 23 },
      { day: 'J', date: 24 },
      { day: 'V', date: 25 },
      { day: 'S', date: 26 },
      { day: 'D', date: 27 },
    ];
    
    return (
        <div className="grid grid-cols-7 gap-2 md:gap-4">
            {days.map(({ day, date }) => (
                <button 
                    key={date}
                    onClick={() => setSelectedDay(date)}
                    className={`flex flex-col items-center justify-center p-1 aspect-square rounded-lg transition-colors text-center ${selectedDay === date ? 'bg-green-500 text-black' : 'bg-zinc-900 text-white'}`}
                    aria-label={`Día ${date}`}
                >
                    <span className={`text-xs md:text-sm ${selectedDay === date ? 'text-zinc-800' : 'text-zinc-400'}`}>{day}</span>
                    <span className="font-bold text-base md:text-lg">{date}</span>
                </button>
            ))}
        </div>
    );
};

interface ClassInfo {
    id: number;
    name: string;
    time: string;
    capacity: number;
    attendees: number;
    status: 'available' | 'full' | 'booked';
}

const initialClasses: ClassInfo[] = [
    { id: 1, name: 'Clase: Yoga Fluir', time: '19:00 - 20:00 • Sala Zen', capacity: 15, attendees: 4, status: 'available' },
    { id: 2, name: 'Spinning Extremo', time: '18:00 - 19:00 • Sala Rítmica', capacity: 15, attendees: 15, status: 'full' },
    { id: 3, name: 'Boxeo Intensivo', time: '20:00 - 21:00 • Sala de Combate', capacity: 12, attendees: 8, status: 'available' },
];


const ClassesScreen: React.FC = () => {
  const [classes, setClasses] = useState<ClassInfo[]>(initialClasses);
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);
  
  const handleSelectClass = (classId: number) => {
      const selectedClass = classes.find(c => c.id === classId);
      if (selectedClass && selectedClass.status === 'available') {
          setSelectedClassId(prevId => prevId === classId ? null : classId);
      }
  };

  const handleBookClass = () => {
      if (!selectedClassId) return;

      setClasses(prevClasses => prevClasses.map(c => {
          if (c.id === selectedClassId) {
              return { ...c, status: 'booked', attendees: c.attendees + 1 };
          }
          return c;
      }));
      setSelectedClassId(null);
  };

  return (
    <div className="bg-black text-white min-h-full flex flex-col">
      <header className="px-4 md:px-6 pt-6 pb-2 shrink-0">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Clases & Booking</h1>
          <div className="flex items-center space-x-4">
            <button className="text-zinc-400"><HeaderCalendarIcon /></button>
            <button className="text-zinc-400"><SearchIcon /></button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow px-4 md:px-6 space-y-6">
        <Calendar />

        <div className="space-y-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-4 lg:space-y-0">
            {classes.map((cls) => (
                <div 
                    key={cls.id}
                    onClick={() => handleSelectClass(cls.id)}
                    className={`bg-zinc-900 p-4 rounded-2xl transition-all duration-200 border-2 ${selectedClassId === cls.id ? 'border-green-500' : 'border-transparent'} ${cls.status === 'available' ? 'cursor-pointer hover:bg-zinc-800' : 'opacity-60'}`}
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg">{cls.name}</h3>
                            <p className="text-sm text-zinc-400">{cls.time}</p>
                        </div>
                        {cls.status === 'available' && (
                           <div className="text-sm bg-zinc-700 text-zinc-300 px-2 py-1 rounded-full">
                               {cls.attendees}/{cls.capacity}
                           </div>
                        )}
                        {cls.status === 'full' && (
                           <div className="text-sm bg-zinc-800 text-yellow-400 border border-yellow-400/50 px-2 py-1 rounded-full">
                               Completo
                           </div>
                        )}
                        {cls.status === 'booked' && (
                           <div className="text-sm bg-green-500/10 text-green-400 border border-green-400/50 px-2 py-1 rounded-full">
                               Reservado
                           </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </main>
      
      <footer className="p-4 md:p-6 bg-black shrink-0">
        <button 
            onClick={handleBookClass}
            disabled={!selectedClassId}
            className="w-full bg-green-500 text-black font-bold py-4 rounded-2xl transition-colors disabled:bg-zinc-700 disabled:text-zinc-400 disabled:cursor-not-allowed hover:bg-green-600"
        >
            {selectedClassId ? 'Reservar Clase' : 'Selecciona una clase'}
        </button>
      </footer>

    </div>
  );
};

export default ClassesScreen;