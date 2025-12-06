import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import './LayoutWrapper.css';

interface LayoutWrapperProps {
    children: React.ReactNode;
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const location = useLocation();

    // Hide sidebar and footer on home page
    const isHomePage = location.pathname === '/';

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className="layout-wrapper">
            <Header onToggleSidebar={toggleSidebar} />
            <div className="layout-main">
                {!isHomePage && (
                    <Sidebar
                        isCollapsed={isSidebarCollapsed}
                        onToggle={toggleSidebar}
                    />
                )}
                <main className={`layout-content ${isHomePage ? 'full-width' : ''} ${!isHomePage && isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
                    {children}
                </main>
            </div>
            {!isHomePage && <Footer />}
        </div>
    );
};
