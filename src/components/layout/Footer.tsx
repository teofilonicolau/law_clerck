import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="footer-icon">⚖️</span>
                        <span className="footer-text">LawClerk</span>
                    </div>
                    <p className="footer-copyright">
                        © 2025 LawClerk. Todos os direitos reservados.
                    </p>
                    <p className="footer-powered">
                        Powered by <strong>TamarAI</strong>
                    </p>
                </div>
            </div>
        </footer>
    );
};
