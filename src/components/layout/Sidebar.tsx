import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-content">
                {/* Header */}
                <div className="sidebar-header">
                    <Link to="/" className="sidebar-logo-link">
                        <span className="sidebar-icon">⚖️</span>
                        {!isCollapsed && <span className="sidebar-brand">LawClerk</span>}
                    </Link>
                    {!isCollapsed && <p className="sidebar-subtitle">Petições Jurídicas com IA</p>}
                </div>

                <nav className="sidebar-nav">
                    {/* Voltar Início */}
                    <Link to="/" className={`sidebar-item ${isActive('/') ? 'active' : ''}`} title="Voltar ao Início">
                        <span className="sidebar-icon">🏠</span>
                        {!isCollapsed && <span>Voltar ao Início</span>}
                    </Link>

                    {/* CALCULADORAS - TODAS as 12 */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">
                            {!isCollapsed ? '🧮 CALCULADORAS' : '🧮'}
                        </div>
                        <Link to="/calculadoras/tempo-especial" className={`sidebar-item ${isActive('/calculadoras/tempo-especial') ? 'active' : ''}`} title="Tempo Especial">
                            <span className="sidebar-icon">⚖️</span>
                            {!isCollapsed && <span>Tempo Especial</span>}
                        </Link>
                        <Link to="/calculadoras/horas-extras" className={`sidebar-item ${isActive('/calculadoras/horas-extras') ? 'active' : ''}`} title="Horas Extras">
                            <span className="sidebar-icon">💰</span>
                            {!isCollapsed && <span>Horas Extras</span>}
                        </Link>
                        <Link to="/calculadoras/verbas-rescisorias" className={`sidebar-item ${isActive('/calculadoras/verbas-rescisorias') ? 'active' : ''}`} title="Verbas Rescisórias">
                            <span className="sidebar-icon">📊</span>
                            {!isCollapsed && <span>Verbas Rescisórias</span>}
                        </Link>
                        <Link to="/calculadoras/adicional-noturno" className={`sidebar-item ${isActive('/calculadoras/adicional-noturno') ? 'active' : ''}`} title="Adicional Noturno">
                            <span className="sidebar-icon">🌙</span>
                            {!isCollapsed && <span>Adicional Noturno</span>}
                        </Link>
                        <Link to="/calculadoras/pensao-alimenticia" className={`sidebar-item ${isActive('/calculadoras/pensao-alimenticia') ? 'active' : ''}`} title="Pensão Alimentícia">
                            <span className="sidebar-icon">👨‍👩‍👧</span>
                            {!isCollapsed && <span>Pensão Alimentícia</span>}
                        </Link>
                        <Link to="/calculadoras/liquidacao-sentenca" className={`sidebar-item ${isActive('/calculadoras/liquidacao-sentenca') ? 'active' : ''}`} title="Liquidação de Sentença">
                            <span className="sidebar-icon">⚖️</span>
                            {!isCollapsed && <span>Liquidação</span>}
                        </Link>
                        <Link to="/calculadoras/juros-mora" className={`sidebar-item ${isActive('/calculadoras/juros-mora') ? 'active' : ''}`} title="Juros de Mora">
                            <span className="sidebar-icon">💵</span>
                            {!isCollapsed && <span>Juros de Mora</span>}
                        </Link>
                        <Link to="/calculadoras/correcao-monetaria" className={`sidebar-item ${isActive('/calculadoras/correcao-monetaria') ? 'active' : ''}`} title="Correção Monetária">
                            <span className="sidebar-icon">📈</span>
                            {!isCollapsed && <span>Correção Monetária</span>}
                        </Link>
                        <Link to="/calculadoras/periodo-graca" className={`sidebar-item ${isActive('/calculadoras/periodo-graca') ? 'active' : ''}`} title="Período de Graça">
                            <span className="sidebar-icon">⏰</span>
                            {!isCollapsed && <span>Período de Graça</span>}
                        </Link>
                        <Link to="/calculadoras/valor-causa" className={`sidebar-item ${isActive('/calculadoras/valor-causa') ? 'active' : ''}`} title="Valor da Causa">
                            <span className="sidebar-icon">💼</span>
                            {!isCollapsed && <span>Valor da Causa</span>}
                        </Link>
                        <Link to="/calculadoras/regra-transicao-ec103" className={`sidebar-item ${isActive('/calculadoras/regra-transicao-ec103') ? 'active' : ''}`} title="Regra Transição EC103">
                            <span className="sidebar-icon">📋</span>
                            {!isCollapsed && <span>EC 103/2019</span>}
                        </Link>
                        <Link to="/calculadoras/revisao-vida-toda" className={`sidebar-item ${isActive('/calculadoras/revisao-vida-toda') ? 'active' : ''}`} title="Revisão Vida Toda">
                            <span className="sidebar-icon">📊</span>
                            {!isCollapsed && <span>Revisão Vida Toda</span>}
                        </Link>
                    </div>

                    {/* PREVIDENCIÁRIO - TODAS as 10 petições */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">
                            {!isCollapsed ? '🏛️ PREVIDENCIÁRIO' : '🏛️'}
                        </div>
                        <Link to="/peticoes/previdenciario/invalidez" className={`sidebar-item ${isActive('/peticoes/previdenciario/invalidez') ? 'active' : ''}`} title="Aposentadoria por Invalidez">
                            <span className="sidebar-icon">📱</span>
                            {!isCollapsed && <span>Invalidez</span>}
                        </Link>
                        <Link to="/peticoes/previdenciario/tempo" className={`sidebar-item ${isActive('/peticoes/previdenciario/tempo') ? 'active' : ''}`} title="Aposentadoria por Tempo">
                            <span className="sidebar-icon">⏰</span>
                            {!isCollapsed && <span>Tempo de Contribuição</span>}
                        </Link>
                        <Link to="/peticoes/previdenciario/especial" className={`sidebar-item ${isActive('/peticoes/previdenciario/especial') ? 'active' : ''}`} title="Aposentadoria Especial">
                            <span className="sidebar-icon">⚠️</span>
                            {!isCollapsed && <span>Especial</span>}
                        </Link>
                        <Link to="/peticoes/previdenciario/rural" className={`sidebar-item ${isActive('/peticoes/previdenciario/rural') ? 'active' : ''}`} title="Aposentadoria Rural">
                            <span className="sidebar-icon">🌾</span>
                            {!isCollapsed && <span>Rural</span>}
                        </Link>
                        <Link to="/peticoes/previdenciario/pensao" className={`sidebar-item ${isActive('/peticoes/previdenciario/pensao') ? 'active' : ''}`} title="Pensão por Morte">
                            <span className="sidebar-icon">❤️</span>
                            {!isCollapsed && <span>Pensão por Morte</span>}
                        </Link>
                        <Link to="/peticoes/previdenciario/bpc-loas" className={`sidebar-item ${isActive('/peticoes/previdenciario/bpc-loas') ? 'active' : ''}`} title="BPC/LOAS">
                            <span className="sidebar-icon">🤝</span>
                            {!isCollapsed && <span>BPC/LOAS</span>}
                        </Link>
                        <Link to="/peticoes/previdenciario/maternidade" className={`sidebar-item ${isActive('/peticoes/previdenciario/maternidade') ? 'active' : ''}`} title="Salário Maternidade">
                            <span className="sidebar-icon">👶</span>
                            {!isCollapsed && <span>Maternidade</span>}
                        </Link>
                        <Link to="/peticoes/previdenciario/auxilio-doenca" className={`sidebar-item ${isActive('/peticoes/previdenciario/auxilio-doenca') ? 'active' : ''}`} title="Auxílio Doença">
                            <span className="sidebar-icon">🏥</span>
                            {!isCollapsed && <span>Auxílio Doença</span>}
                        </Link>
                        <Link to="/peticoes/previdenciario/revisao-vida-toda" className={`sidebar-item ${isActive('/peticoes/previdenciario/revisao-vida-toda') ? 'active' : ''}`} title="Revisão da Vida Toda">
                            <span className="sidebar-icon">📊</span>
                            {!isCollapsed && <span>Revisão Vida Toda</span>}
                        </Link>
                        <Link to="/peticoes/previdenciario/revisao-beneficio" className={`sidebar-item ${isActive('/peticoes/previdenciario/revisao-beneficio') ? 'active' : ''}`} title="Revisão de Benefício">
                            <span className="sidebar-icon">🔄</span>
                            {!isCollapsed && <span>Revisão Benefício</span>}
                        </Link>
                    </div>

                    {/* TRABALHISTA - 2 petições */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">
                            {!isCollapsed ? '👔 TRABALHISTA' : '👔'}
                        </div>
                        <Link to="/peticoes/trabalhista/vinculo" className={`sidebar-item ${isActive('/peticoes/trabalhista/vinculo') ? 'active' : ''}`} title="Vínculo Empregatício">
                            <span className="sidebar-icon">🤝</span>
                            {!isCollapsed && <span>Vínculo</span>}
                        </Link>
                        <Link to="/peticoes/trabalhista/insalubridade" className={`sidebar-item ${isActive('/peticoes/trabalhista/insalubridade') ? 'active' : ''}`} title="Quesitos Insalubridade">
                            <span className="sidebar-icon">⚠️</span>
                            {!isCollapsed && <span>Insalubridade</span>}
                        </Link>
                    </div>

                    {/* CONSUMIDOR - 2 petições */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">
                            {!isCollapsed ? '🛒 CONSUMIDOR' : '🛒'}
                        </div>
                        <Link to="/peticoes/consumidor/vicio" className={`sidebar-item ${isActive('/peticoes/consumidor/vicio') ? 'active' : ''}`} title="Vício do Produto">
                            <span className="sidebar-icon">📦</span>
                            {!isCollapsed && <span>Vício Produto</span>}
                        </Link>
                        <Link to="/peticoes/consumidor/cobranca" className={`sidebar-item ${isActive('/peticoes/consumidor/cobranca') ? 'active' : ''}`} title="Cobrança Indevida">
                            <span className="sidebar-icon">💳</span>
                            {!isCollapsed && <span>Cobrança Indevida</span>}
                        </Link>
                    </div>

                    {/* CIVIL - 2 petições */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">
                            {!isCollapsed ? '📋 CIVIL' : '📋'}
                        </div>
                        <Link to="/peticoes/civil/cobranca" className={`sidebar-item ${isActive('/peticoes/civil/cobranca') ? 'active' : ''}`} title="Ação de Cobrança">
                            <span className="sidebar-icon">💰</span>
                            {!isCollapsed && <span>Cobrança</span>}
                        </Link>
                        <Link to="/peticoes/civil/indenizacao" className={`sidebar-item ${isActive('/peticoes/civil/indenizacao') ? 'active' : ''}`} title="Ação de Indenização">
                            <span className="sidebar-icon">⚖️</span>
                            {!isCollapsed && <span>Indenização</span>}
                        </Link>
                    </div>

                    {/* PROCESSUAL CIVIL - 2 petições */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">
                            {!isCollapsed ? '📁 PROCESSUAL' : '📁'}
                        </div>
                        <Link to="/peticoes/processual/execucao" className={`sidebar-item ${isActive('/peticoes/processual/execucao') ? 'active' : ''}`} title="Petição de Execução">
                            <span className="sidebar-icon">📊</span>
                            {!isCollapsed && <span>Execução</span>}
                        </Link>
                        <Link to="/peticoes/processual/monitoria" className={`sidebar-item ${isActive('/peticoes/processual/monitoria') ? 'active' : ''}`} title="Ação Monitória">
                            <span className="sidebar-icon">📄</span>
                            {!isCollapsed && <span>Monitória</span>}
                        </Link>
                    </div>

                    {/* FERRAMENTAS IA - 3 */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">
                            {!isCollapsed ? '🤖 FERRAMENTAS IA' : '🤖'}
                        </div>
                        <Link to="/consultas/juridica" className={`sidebar-item ${isActive('/consultas/juridica') ? 'active' : ''}`} title="Consulta Jurídica">
                            <span className="sidebar-icon">💬</span>
                            {!isCollapsed && <span>Consulta</span>}
                        </Link>
                        <Link to="/consultas/analise" className={`sidebar-item ${isActive('/consultas/analise') ? 'active' : ''}`} title="Análise de Texto">
                            <span className="sidebar-icon">📄</span>
                            {!isCollapsed && <span>Análise</span>}
                        </Link>
                        <Link to="/consultas/parecer" className={`sidebar-item ${isActive('/consultas/parecer') ? 'active' : ''}`} title="Parecer Jurídico">
                            <span className="sidebar-icon">📋</span>
                            {!isCollapsed && <span>Parecer</span>}
                        </Link>
                    </div>
                </nav>

                {/* Footer */}
                {!isCollapsed && (
                    <div className="sidebar-footer">
                        <p className="sidebar-powered">Powered by <strong>TamarAI</strong></p>
                    </div>
                )}
            </div>
        </aside>
    );
};
