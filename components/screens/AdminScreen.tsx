import React, { useState } from 'react';
import { AdminScreenType } from '../../types';
import MembersManagementScreen from './admin/MembersManagementScreen';
import ScheduleManagementScreen from './admin/ScheduleManagementScreen';
import ReportsScreen from './admin/ReportsScreen';
import NotificationsScreen from './admin/NotificationsScreen';

const AdminCard: React.FC<{ title: string, description: string, onClick: () => void }> = ({ title, description, onClick }) => (
    <div 
        className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition-colors cursor-pointer"
        onClick={onClick}
    >
        <h3 className="font-bold text-lg text-green-400">{title}</h3>
        <p className="text-zinc-400 mt-1">{description}</p>
    </div>
);

const AdminDashboard: React.FC<{ navigate: (screen: AdminScreenType) => void }> = ({ navigate }) => (
    <div className="p-6 h-full flex flex-col">
        <header className="mb-8 shrink-0">
            <h1 className="text-3xl font-bold">Panel de Administración</h1>
            <p className="text-zinc-400">Gestiona el gimnasio desde aquí.</p>
        </header>
        <main className="flex-grow space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
            <AdminCard 
                title={AdminScreenType.Members}
                description="Ver, editar y administrar todos los miembros." 
                onClick={() => navigate(AdminScreenType.Members)}
            />
            <AdminCard 
                title={AdminScreenType.Schedule}
                description="Crear, modificar y cancelar clases grupales." 
                onClick={() => navigate(AdminScreenType.Schedule)}
            />
            <AdminCard 
                title={AdminScreenType.Reports}
                description="Visualizar métricas clave y rendimiento." 
                onClick={() => navigate(AdminScreenType.Reports)}
            />
             <AdminCard 
                title={AdminScreenType.Notifications}
                description="Enviar notificaciones push a los miembros." 
                onClick={() => navigate(AdminScreenType.Notifications)}
            />
        </main>
    </div>
);

const AdminScreen: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<AdminScreenType>(AdminScreenType.Dashboard);

    const handleBack = () => setCurrentScreen(AdminScreenType.Dashboard);

    const renderContent = () => {
        switch (currentScreen) {
            case AdminScreenType.Members:
                return <MembersManagementScreen onBack={handleBack} />;
            case AdminScreenType.Schedule:
                return <ScheduleManagementScreen onBack={handleBack} />;
            case AdminScreenType.Reports:
                return <ReportsScreen onBack={handleBack} />;
            case AdminScreenType.Notifications:
                return <NotificationsScreen onBack={handleBack} />;
            default:
                return <AdminDashboard navigate={setCurrentScreen} />;
        }
    };

    return (
        <div className="bg-black text-white h-full flex flex-col">
            {renderContent()}
        </div>
    );
};

export default AdminScreen;