import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import logoDark from '@/assets/logo-dark.jpg';
import logoLight from '@/assets/logo-light.jpg';
import './Header.css';

interface HeaderProps {
    onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    {onToggleSidebar && (
                        <button
                            className="hamburger-btn"
                            onClick={onToggleSidebar}
                            aria-label="Toggle sidebar"
                        >
                            <span className="hamburger-icon">☰</span>
                        </button>
                    )}
                    <Link to="/" className="header-logo-link">
                        <img
                            src={theme === 'dark' ? logoDark : logoLight}
                            alt="LawClerk Logo"
                            className="header-logo"
                        />
                        <div className="header-title">
                            <h1>LawClerk</h1>
                            <p>Petições Jurídicas Inteligentes</p>
                        </div>
                    </Link>
                </div>

                <div className="header-right">
                    <span className="system-status">
                        <span className="status-dot"></span> Sistema Online
                    </span>
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </header>
    );
};
