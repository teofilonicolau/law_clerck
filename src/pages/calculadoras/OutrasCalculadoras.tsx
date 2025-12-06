import React, { useState } from 'react';
import { CalculadoraService } from '@/services/CalculadoraService';
import type { AdicionalNoturnoDTO, PensaoAlimenticiaDTO, LiquidacaoSentencaDTO, JurosMoraDTO, CorrecaoMonetariaDTO, PeriodoGracaDTO, ValorCausaDTO, RegraTransicaoEC103DTO } from '@/types/calculadoras';
import { CalculationCard } from '@/components/common/CalculationCard';
import '../ConsultaJuridicaPage.css';

// Adicional Noturno
export const AdicionalNoturnoPage: React.FC = () => {
    const [formData, setFormData] = useState<AdicionalNoturnoDTO>({ salario_base: 2000, horas_noturnas: 4, dias_trabalhados: 22 });
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await CalculadoraService.adicionalNoturno(formData);
            setResult(response.calculo);
        } catch (err) {
            alert('Erro');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>🌙 Adicional Noturno</h1>
            </div>
            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Salário Base (R$)</label>
                            <input type="number" step="0.01" value={formData.salario_base} onChange={(e) => setFormData((p) => ({ ...p, salario_base: Number(e.target.value) }))} required />
                        </div>
                        <div className="form-group">
                            <label>Horas Noturnas/Dia</label>
                            <input type="number" value={formData.horas_noturnas} onChange={(e) => setFormData((p) => ({ ...p, horas_noturnas: Number(e.target.value) }))} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Dias Trabalhados</label>
                        <input type="number" value={formData.dias_trabalhados} onChange={(e) => setFormData((p) => ({ ...p, dias_trabalhados: Number(e.target.value) }))} required />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>{isLoading ? '⏳ Calculando...' : '🧮 Calcular'}</button>
                    </div>
                </form>
            </div>
            {result && <CalculationCard title="Resultado: Adicional Noturno" result={result} />}
        </div>
    );
};

// Pensão Alimentícia
export const PensaoAlimenticiaPage: React.FC = () => {
    const [formData, setFormData] = useState<PensaoAlimenticiaDTO>({ renda_alimentante: 5000, numero_filhos: 1, percentual_sugerido: 30 });
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await CalculadoraService.pensaoAlimenticia(formData);
            setResult(response.calculo);
        } catch (err) {
            alert('Erro');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>👨‍👩‍👧‍👦 Pensão Alimentícia</h1>
            </div>
            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Renda do Alimentante (R$)</label>
                            <input type="number" step="0.01" value={formData.renda_alimentante} onChange={(e) => setFormData((p) => ({ ...p, renda_alimentante: Number(e.target.value) }))} required />
                        </div>
                        <div className="form-group">
                            <label>Número de Filhos</label>
                            <input type="number" value={formData.numero_filhos} onChange={(e) => setFormData((p) => ({ ...p, numero_filhos: Number(e.target.value) }))} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Percentual Sugerido (%)</label>
                        <input type="number" value={formData.percentual_sugerido} onChange={(e) => setFormData((p) => ({ ...p, percentual_sugerido: Number(e.target.value) }))} required />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>{isLoading ? '⏳ Calculando...' : '🧮 Calcular'}</button>
                    </div>
                </form>
            </div>
            {result && <CalculationCard title="Resultado: Pensão Alimentícia" result={result} />}
        </div>
    );
};

// Liquidação de Sentença
export const LiquidacaoSentencaPage: React.FC = () => {
    const [formData, setFormData] = useState<LiquidacaoSentencaDTO>({ valor_principal: 10000, data_sentenca: '', incluir_honorarios: true });
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await CalculadoraService.liquidacaoSentenca(formData);
            setResult(response.calculo);
        } catch (err) {
            alert('Erro');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>⚖️ Liquidação de Sentença</h1>
            </div>
            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Valor Principal (R$)</label>
                        <input type="number" step="0.01" value={formData.valor_principal} onChange={(e) => setFormData((p) => ({ ...p, valor_principal: Number(e.target.value) }))} required />
                    </div>
                    <div className="form-group">
                        <label>Data da Sentença</label>
                        <input type="date" value={formData.data_sentenca} onChange={(e) => setFormData((p) => ({ ...p, data_sentenca: e.target.value }))} required />
                    </div>
                    <div className="form-group">
                        <label>
                            <input type="checkbox" checked={formData.incluir_honorarios} onChange={(e) => setFormData((p) => ({ ...p, incluir_honorarios: e.target.checked }))} />
                            Incluir Honorários Advocatícios
                        </label>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>{isLoading ? '⏳ Calculando...' : '🧮 Calcular'}</button>
                    </div>
                </form>
            </div>
            {result && <CalculationCard title="Resultado: Liquidação" result={result} />}
        </div>
    );
};

// Juros de Mora
export const JurosMoraPage: React.FC = () => {
    const [formData, setFormData] = useState<JurosMoraDTO>({ valor_principal: 5000, data_vencimento: '', taxa_mensal: 1 });
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await CalculadoraService.jurosMora(formData);
            setResult(response.calculo);
        } catch (err) {
            alert('Erro');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>💰 Juros de Mora</h1>
            </div>
            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Valor Principal (R$)</label>
                            <input type="number" step="0.01" value={formData.valor_principal} onChange={(e) => setFormData((p) => ({ ...p, valor_principal: Number(e.target.value) }))} required />
                        </div>
                        <div className="form-group">
                            <label>Taxa Mensal (%)</label>
                            <input type="number" step="0.01" value={formData.taxa_mensal} onChange={(e) => setFormData((p) => ({ ...p, taxa_mensal: Number(e.target.value) }))} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Data de Vencimento</label>
                        <input type="date" value={formData.data_vencimento} onChange={(e) => setFormData((p) => ({ ...p, data_vencimento: e.target.value }))} required />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>{isLoading ? '⏳ Calculando...' : '🧮 Calcular'}</button>
                    </div>
                </form>
            </div>
            {result && <CalculationCard title="Resultado: Juros de Mora" result={result} />}
        </div>
    );
};

// Correção Monetária
export const CorrecaoMonetariaPage: React.FC = () => {
    const [formData, setFormData] = useState<CorrecaoMonetariaDTO>({ valor: 1000, data_inicial: '', indice: 'IPCA' });
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await CalculadoraService.correcaoMonetaria(formData);
            setResult(response.calculo);
        } catch (err) {
            alert('Erro');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>📈 Correção Monetária</h1>
            </div>
            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Valor (R$)</label>
                            <input type="number" step="0.01" value={formData.valor} onChange={(e) => setFormData((p) => ({ ...p, valor: Number(e.target.value) }))} required />
                        </div>
                        <div className="form-group">
                            <label>Índice</label>
                            <select value={formData.indice} onChange={(e) => setFormData((p) => ({ ...p, indice: e.target.value }))} required>
                                <option value="IPCA">IPCA</option>
                                <option value="IGP-M">IGP-M</option>
                                <option value="INPC">INPC</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Data Inicial</label>
                        <input type="date" value={formData.data_inicial} onChange={(e) => setFormData((p) => ({ ...p, data_inicial: e.target.value }))} required />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>{isLoading ? '⏳ Calculando...' : '🧮 Calcular'}</button>
                    </div>
                </form>
            </div>
            {result && <CalculationCard title="Resultado: Correção Monetária" result={result} />}
        </div>
    );
};

// Período de Graça
export const PeriodoGracaPage: React.FC = () => {
    const [formData, setFormData] = useState<PeriodoGracaDTO>({ tipo_segurado: 'empregado', ultima_contribuicao: '' });
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await CalculadoraService.periodoGraca(formData);
            setResult(response.resultado);
        } catch (err) {
            alert('Erro');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>📅 Período de Graça</h1>
            </div>
            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Tipo de Segurado</label>
                        <select value={formData.tipo_segurado} onChange={(e) => setFormData((p) => ({ ...p, tipo_segurado: e.target.value }))} required>
                            <option value="empregado">Empregado</option>
                            <option value="autonomo">Autônomo</option>
                            <option value="facultativo">Facultativo</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Última Contribuição</label>
                        <input type="date" value={formData.ultima_contribuicao} onChange={(e) => setFormData((p) => ({ ...p, ultima_contribuicao: e.target.value }))} required />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>{isLoading ? '⏳ Calculando...' : '🧮 Calcular'}</button>
                    </div>
                </form>
            </div>
            {result && <CalculationCard title="Resultado: Período de Graça" result={result} />}
        </div>
    );
};

// Valor da Causa
export const ValorCausaPage: React.FC = () => {
    const [formData, setFormData] = useState<ValorCausaDTO>({ parcelas_vencidas: 12, valor_mensal: 1500 });
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await CalculadoraService.valorCausa(formData);
            setResult({ valor_causa: response.valor_causa, moeda: response.moeda });
        } catch (err) {
            alert('Erro');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>⚖️ Valor da Causa</h1>
            </div>
            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Parcelas Vencidas</label>
                            <input type="number" value={formData.parcelas_vencidas} onChange={(e) => setFormData((p) => ({ ...p, parcelas_vencidas: Number(e.target.value) }))} required />
                        </div>
                        <div className="form-group">
                            <label>Valor Mensal (R$)</label>
                            <input type="number" step="0.01" value={formData.valor_mensal} onChange={(e) => setFormData((p) => ({ ...p, valor_mensal: Number(e.target.value) }))} required />
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>{isLoading ? '⏳ Calculando...' : '🧮 Calcular'}</button>
                    </div>
                </form>
            </div>
            {result && <CalculationCard title="Resultado: Valor da Causa" result={result} />}
        </div>
    );
};

// Regra de Transição EC 103
export const RegraTransicaoEC103Page: React.FC = () => {
    const [formData, setFormData] = useState<RegraTransicaoEC103DTO>({ sexo: 'masculino', idade_atual: 60, tempo_contribuicao_atual: 360, tempo_contribuicao_em_13_11_2019: 300 });
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await CalculadoraService.regraTransicaoEC103(formData);
            setResult(response.resultado);
        } catch (err) {
            alert('Erro');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>🗂️ Regra de Transição EC 103/2019</h1>
            </div>
            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Sexo</label>
                            <select value={formData.sexo} onChange={(e) => setFormData((p) => ({ ...p, sexo: e.target.value }))} required>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Idade Atual</label>
                            <input type="number" value={formData.idade_atual} onChange={(e) => setFormData((p) => ({ ...p, idade_atual: Number(e.target.value) }))} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Tempo de Contribuição Atual (meses)</label>
                            <input type="number" value={formData.tempo_contribuicao_atual} onChange={(e) => setFormData((p) => ({ ...p, tempo_contribuicao_atual: Number(e.target.value) }))} required />
                        </div>
                        <div className="form-group">
                            <label>Tempo em 13/11/2019 (meses)</label>
                            <input type="number" value={formData.tempo_contribuicao_em_13_11_2019} onChange={(e) => setFormData((p) => ({ ...p, tempo_contribuicao_em_13_11_2019: Number(e.target.value) }))} required />
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>{isLoading ? '⏳ Calculando...' : '🧮 Calcular'}</button>
                    </div>
                </form>
            </div>
            {result && <CalculationCard title="Resultado: Regras de Transição" result={result} />}
        </div>
    );
};
