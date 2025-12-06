import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavCard } from '@/components/common/NavCard';
import './Home.css';

export const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="home-modern">
            {/* Hero Section - Full Width com Gradiente */}
            <section className="hero-full-width">
                <div className="hero-container">
                    <h1 className="hero-title">Petições Jurídicas com Inteligência Artificial</h1>
                    <p className="hero-subtitle">
                        Gere petições profissionais com fundamentação jurídica especializada, jurisprudência
                        atualizada do STF e STJ, e calculadoras avançadas com tecnologia de ponta.
                    </p>
                    <button
                        className="cta-button"
                        onClick={() => navigate('/peticoes/previdenciario/invalidez')}
                        aria-label="Gerar sua primeira petição"
                    >
                        Gere Sua Petição →
                    </button>
                </div>
            </section>

            {/* Main Content */}
            <div className="home-main-content">
                {/* Direito Previdenciário */}
                <section className="category-section">
                    <div className="category-header">
                        <span className="category-icon">🏛️</span>
                        <h2>Direito Previdenciário</h2>
                    </div>
                    <p className="category-desc">Petições especializadas para benefícios do INSS</p>

                    <div className="cards-grid">
                        <NavCard icon="📱" title="Aposentadoria por Invalidez" description="Incapacidade total e permanente" to="/peticoes/previdenciario/invalidez" />
                        <NavCard icon="⏰" title="Aposentadoria por Tempo" description="Tempo de contribuição" to="/peticoes/previdenciario/tempo" />
                        <NavCard icon="⚠️" title="Aposentadoria Especial" description="Atividades insalubres" to="/peticoes/previdenciario/especial" />
                        <NavCard icon="🌾" title="Aposentadoria Rural" description="Trabalhador rural" to="/peticoes/previdenciario/rural" />
                        <NavCard icon="❤️" title="Pensão por Morte" description="Dependentes do segurado" to="/peticoes/previdenciario/pensao" />
                        <NavCard icon="🤝" title="BPC/LOAS" description="Benefício assistencial" to="/peticoes/previdenciario/bpc-loas" />
                        <NavCard icon="👶" title="Salário Maternidade" description="Proteção à maternidade" to="/peticoes/previdenciario/maternidade" />
                        <NavCard icon="🏥" title="Auxílio Doença" description="Incapacidade temporária" to="/peticoes/previdenciario/auxilio-doenca" />
                        <NavCard icon="📊" title="Revisão da Vida Toda" description="Revisão de benefício" to="/peticoes/previdenciario/revisao-vida-toda" />
                        <NavCard icon="🔄" title="Revisão de Benefício" description="Correção de valores" to="/peticoes/previdenciario/revisao-beneficio" />
                    </div>
                </section>

                {/* Calculadoras - Destaque */}
                <section className="category-section calculadoras-highlight">
                    <div className="category-header">
                        <span className="category-icon">🧮</span>
                        <h2>Calculadoras Jurídicas</h2>
                    </div>
                    <p className="category-desc">Cálculos precisos para todas as áreas do direito</p>

                    <div className="cards-grid-calc">
                        <NavCard icon="⚖️" title="Tempo Especial" description="Conversão de tempo" to="/calculadoras/tempo-especial" />
                        <NavCard icon="💰" title="Horas Extras" description="Cálculo trabalhista" to="/calculadoras/horas-extras" />
                        <NavCard icon="📊" title="Verbas Rescisórias" description="Rescisão completa" to="/calculadoras/verbas-rescisorias" />
                        <NavCard icon="🌙" title="Adicional Noturno" description="Adicional noturno" to="/calculadoras/adicional-noturno" />
                        <NavCard icon="👨‍👩‍👧" title="Pensão Alimentícia" description="Cálculo de pensão" to="/calculadoras/pensao-alimenticia" />
                        <NavCard icon="⚖️" title="Liquidação" description="Liquidação de sentença" to="/calculadoras/liquidacao-sentenca" />
                        <NavCard icon="💵" title="Juros de Mora" description="Cálculo de juros" to="/calculadoras/juros-mora" />
                        <NavCard icon="📈" title="Correção Monetária" description="INPC, IPCA, IGP-M" to="/calculadoras/correcao-monetaria" />
                        <NavCard icon="⏰" title="Período de Graça" description="Qualidade de segurado" to="/calculadoras/periodo-graca" />
                        <NavCard icon="💼" title="Valor da Causa" description="Cálculo automático" to="/calculadoras/valor-causa" />
                        <NavCard icon="📋" title="EC 103/2019" description="Regras de transição" to="/calculadoras/regra-transicao-ec103" />
                        <NavCard icon="📊" title="Revisão Vida Toda" description="Simulação completa" to="/calculadoras/revisao-vida-toda" />
                    </div>
                </section>

                {/* Direito Trabalhista */}
                <section className="category-section">
                    <div className="category-header">
                        <span className="category-icon">👔</span>
                        <h2>Direito Trabalhista</h2>
                    </div>
                    <p className="category-desc">Petições para direitos trabalhistas</p>

                    <div className="cards-grid">
                        <NavCard icon="🤝" title="Vínculo Empregatício" description="Reconhecimento de vínculo" to="/peticoes/trabalhista/vinculo" />
                        <NavCard icon="⚠️" title="Quesitos Insalubridade" description="Perícia especializada" to="/peticoes/trabalhista/insalubridade" />
                    </div>
                </section>

                {/* Direito do Consumidor */}
                <section className="category-section">
                    <div className="category-header">
                        <span className="category-icon">🛒</span>
                        <h2>Direito do Consumidor</h2>
                    </div>
                    <p className="category-desc">Defesa dos direitos do consumidor</p>

                    <div className="cards-grid">
                        <NavCard icon="📦" title="Vício do Produto" description="Defeitos e vícios" to="/peticoes/consumidor/vicio" />
                        <NavCard icon="💳" title="Cobrança Indevida" description="Cobranças abusivas" to="/peticoes/consumidor/cobranca" />
                    </div>
                </section>

                {/* Direito Civil */}
                <section className="category-section">
                    <div className="category-header">
                        <span className="category-icon">📋</span>
                        <h2>Direito Civil</h2>
                    </div>
                    <p className="category-desc">Petições cíveis e obrigações</p>

                    <div className="cards-grid">
                        <NavCard icon="💰" title="Cobrança" description="Cobrança de dívidas" to="/peticoes/civil/cobranca" />
                        <NavCard icon="⚖️" title="Indenização" description="Danos morais e materiais" to="/peticoes/civil/indenizacao" />
                    </div>
                </section>

                {/* Processual Civil */}
                <section className="category-section">
                    <div className="category-header">
                        <span className="category-icon">📁</span>
                        <h2>Processual Civil</h2>
                    </div>
                    <p className="category-desc">Petições processuais e execuções</p>

                    <div className="cards-grid">
                        <NavCard icon="📊" title="Petição Execução" description="Execução de títulos" to="/peticoes/processual/execucao" />
                        <NavCard icon="📄" title="Petição Monitória" description="Ação monitória" to="/peticoes/processual/monitoria" />
                    </div>
                </section>

                {/* Ferramentas IA */}
                <section className="category-section">
                    <div className="category-header">
                        <span className="category-icon">🤖</span>
                        <h2>Ferramentas com IA</h2>
                    </div>
                    <p className="category-desc">Inteligência artificial avançada</p>

                    <div className="cards-grid">
                        <NavCard icon="💬" title="Consulta Jurídica" description="Consultas especializadas" to="/consultas/juridica" />
                        <NavCard icon="📄" title="Análise de Texto" description="Análise de documentos" to="/consultas/analise" />
                        <NavCard icon="📋" title="Parecer Jurídico" description="Pareceres fundamentados" to="/consultas/parecer" />
                    </div>
                </section>
            </div>

            {/* Footer Full-Width */}
            <footer className="footer-full-width">
                <div className="footer-separator"></div>
                <div className="footer-container">
                    <div className="footer-left">
                        <p>© 2025 LawClerk. Todos os direitos reservados.</p>
                    </div>
                    <div className="footer-center">
                        <a href="/termos">Termos</a>
                        <span>•</span>
                        <a href="/privacidade">Privacidade</a>
                        <span>•</span>
                        <a href="/contato">Suporte</a>
                    </div>
                    <div className="footer-right">
                        <p>Powered by <strong>TamarAI</strong></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
