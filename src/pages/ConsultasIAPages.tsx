import React, { useState } from 'react';
import { ConsultaService } from '@/services/ConsultaService';
import type { AnaliseTextoDTO, ParecerJuridicoDTO } from '@/types/consultas';
import { LLMResponseArea } from '@/components/common/LLMResponseArea';
import './ConsultaJuridicaPage.css';

// Análise de Texto
export const AnaliseTextoPage: React.FC = () => {
    const [formData, setFormData] = useState<AnaliseTextoDTO>({
        texto: '',
        tipo_analise: 'geral',
        firm_name: 'LawClerk',
        lawyer_name: '',
        signature_text: '',
        ai_persona: 'assistente jurídico',
    });
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const result = await ConsultaService.analiseTexto(formData);
            setResponse(result.resultado);
        } catch (err) {
            alert('Erro na análise');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>📄 Análise de Texto com IA</h1>
                <p className="page-description">Analise documentos e textos jurídicos com IA</p>
            </div>
            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Texto para Análise *</label>
                        <textarea name="texto" value={formData.texto} onChange={(e) => setFormData((p) => ({ ...p, texto: e.target.value }))} rows={8} required placeholder="Cole aqui o texto que deseja analisar..." />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Tipo de Análise</label>
                            <select value={formData.tipo_analise} onChange={(e) => setFormData((p) => ({ ...p, tipo_analise: e.target.value }))}>
                                <option value="geral">Análise Geral</option>
                                <option value="resumo">Resumo</option>
                                <option value="pontos_principais">Pontos Principais</option>
                                <option value="riscos_juridicos">Riscos Jurídicos</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Nome do Advogado (opcional)</label>
                            <input type="text" value={formData.lawyer_name} onChange={(e) => setFormData((p) => ({ ...p, lawyer_name: e.target.value }))} />
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>
                            {isLoading ? '⏳ Analisando...' : '🔍 Analisar Texto'}
                        </button>
                    </div>
                </form>
            </div>
            <LLMResponseArea content={response} title="Resultado da Análise" />
        </div>
    );
};

// Parecer Jurídico
export const ParecerJuridicoPage: React.FC = () => {
    const [formData, setFormData] = useState<ParecerJuridicoDTO>({
        titulo: '',
        conteudo: '',
        area: 'geral',
        incluir_jurisprudencia: true,
        firm_name: 'LawClerk',
        lawyer_name: '',
        signature_text: '',
        ai_persona: 'parecerista jurídico',
    });
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const result = await ConsultaService.parecerJuridico(formData);
            setResponse(result.relatorio);
        } catch (err) {
            alert('Erro ao gerar parecer');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>📋 Parecer Jurídico com IA</h1>
                <p className="page-description">Gere pareceres jurídicos fundamentados com jurisprudência</p>
            </div>
            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Título do Parecer *</label>
                        <input type="text" value={formData.titulo} onChange={(e) => setFormData((p) => ({ ...p, titulo: e.target.value }))} required placeholder="Ex: Análise sobre prescrição trabalhista" />
                    </div>
                    <div className="form-group">
                        <label>Conteúdo/Questão *</label>
                        <textarea value={formData.conteudo} onChange={(e) => setFormData((p) => ({ ...p, conteudo: e.target.value }))} rows={8} required placeholder="Descreva a situação jurídica para análise..." />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Área do Direito</label>
                            <select value={formData.area} onChange={(e) => setFormData((p) => ({ ...p, area: e.target.value }))}>
                                <option value="geral">Geral</option>
                                <option value="previdenciario">Previdenciário</option>
                                <option value="trabalhista">Trabalhista</option>
                                <option value="consumidor">Consumidor</option>
                                <option value="civil">Civil</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="checkbox" checked={formData.incluir_jurisprudencia} onChange={(e) => setFormData((p) => ({ ...p, incluir_jurisprudencia: e.target.checked }))} />
                                Incluir Jurisprudência
                            </label>
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>
                            {isLoading ? '⏳ Gerando...' : '📝 Gerar Parecer'}
                        </button>
                    </div>
                </form>
            </div>
            <LLMResponseArea content={response} title="Parecer Jurídico Gerado" />
        </div>
    );
};
