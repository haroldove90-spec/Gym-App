import React from 'react';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';

interface EditProfileScreenProps {
    onBack: () => void;
}

const InputField: React.FC<{ label: string, value: string, type?: string }> = ({ label, value, type = 'text' }) => (
    <div>
        <label className="text-sm text-zinc-400 mb-1 block">{label}</label>
        <input 
            type={type}
            defaultValue={value}
            className="w-full bg-zinc-800 border-zinc-700 border rounded-lg py-2 px-4 text-white placeholder-zinc-500"
        />
    </div>
);


const EditProfileScreen: React.FC<EditProfileScreenProps> = ({ onBack }) => {
    return (
        <div className="p-6 flex flex-col h-full">
            <div className="w-full max-w-2xl mx-auto flex flex-col flex-grow">
                <header className="flex items-center mb-6 shrink-0">
                    <button onClick={onBack} className="text-white mr-4 p-2 rounded-full hover:bg-zinc-800">
                        <ArrowLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold">Editar Perfil</h1>
                </header>

                <main className="flex-grow overflow-y-auto space-y-6">
                    <div className="flex flex-col items-center space-y-3">
                        <img 
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
                            alt="Laura García"
                            className="w-24 h-24 rounded-full border-4 border-zinc-800"
                        />
                        <button className="text-green-400 font-semibold text-sm">Cambiar foto</button>
                    </div>
                    
                    <div className="space-y-4">
                        <InputField label="Nombre Completo" value="Laura García" />
                        <InputField label="Correo Electrónico" value="laura.garcia@email.com" type="email" />
                        <div className="grid grid-cols-3 gap-4">
                            <InputField label="Altura (m)" value="1.68" />
                            <InputField label="Peso (kg)" value="62" />
                            <InputField label="Edad" value="28" />
                        </div>
                    </div>
                </main>
                
                <footer className="mt-6 shrink-0">
                    <button className="w-full bg-green-500 text-black font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">
                        Guardar Cambios
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default EditProfileScreen;