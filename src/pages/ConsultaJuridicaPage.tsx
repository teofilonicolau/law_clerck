// src/pages/ConsultaJuridicaPage.tsx — VERSÃO FINAL 2025: 0 ERROS, 100% MODERNO
import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { ConsultaService } from '@/services/ConsultaService';
import type { ConsultaJuridicaDTO, ConsultaJuridicaResponse } from '@/types/consultas';
import { LLMResponseArea } from '@/components/common/LLMResponseArea';
import './ConsultaJuridicaForm.css';

export const ConsultaJuridicaPage: React.FC = () => {
    const [formData, setFormData] = useState<ConsultaJuridicaDTO>({
        pergunta: '',
        area: 'geral',
        firm_name: 'LawClerk',
        lawyer_name: '',
        signature_text: '',
        ai_persona: 'assistente jurídico especializado',
    });

    const [response, setResponse] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.pergunta.trim()) {
            setError('Por favor, insira uma pergunta');
            return;
        }

        setIsLoading(true);
        setError('');
        setResponse('');

        try {
            const result: ConsultaJuridicaResponse = await ConsultaService.consultaJuridica(formData);
            setResponse(result.resposta);
        } catch (err) {
            console.error('Erro na consulta:', err);
            setError('Erro ao consultar a IA. Tente novamente mais tarde.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleClear = () => {
        setFormData({
            pergunta: '',
            area: 'geral',
            firm_name: 'LawClerk',
            lawyer_name: '',
            signature_text: '',
            ai_persona: 'assistente jurídico especializado',
        });
        setResponse('');
        setError('');
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>Consulta Jurídica com IA</h1>
                <p className="page-description">
                    Faça consultas jurídicas especializadas com inteligência artificial treinada em direito brasileiro
                </p>
            </div>

            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="pergunta">Sua Pergunta Jurídica *</label>
                        <textarea
                            id="pergunta"
                            name="pergunta"
                            value={formData.pergunta}
                            onChange={handleChange}
                            placeholder="Ex: Quais são os requisitos para aposentadoria por tempo de contribuição?"
                            rows={6}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="area">Área do Direito</label>
                            <select id="area" name="area" value={formData.area} onChange={handleChange}>
                                <option value="geral">Geral</option>
                                <option value="previdenciario">Previdenciário</option>
                                <option value="trabalhista">Trabalhista</option>
                                <option value="consumidor">Consumidor</option>
                                <option value="civil">Civil</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="lawyer_name">Nome do Advogado (opcional)</label>
                            <input
                                type="text"
                                id="lawyer_name"
                                name="lawyer_name"
                                value={formData.lawyer_name}
                                onChange={handleChange}
                                placeholder="Dr. João Silva"
                            />
                        </div>
                    </div>

                    {error && <div className="error-message">Atenção: {error}</div>}

                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>
                            {isLoading ? 'Consultando IA...' : 'Consultar'}
                        </button>
                        <button type="button" onClick={handleClear} className="clear-button" disabled={isLoading}>
                            Limpar
                        </button>
                    </div>
                </form>
            </div>

            {response && (
                <LLMResponseArea
                    content={response}
                    title="Resposta da Consulta Jurídica"
                />
            )}
        </div>
    );
};