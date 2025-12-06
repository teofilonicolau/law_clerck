import React from 'react';
import { Link } from 'react-router-dom';
import './NavCard.css';

interface NavCardProps {
    icon: string;
    title: string;
    description: string;
    to: string;
}

export const NavCard: React.FC<NavCardProps> = ({ icon, title, description, to }) => {
    return (
        <Link to={to} className="nav-card theme-card">
            <div className="card-icon">{icon}</div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </Link>
    );
};
