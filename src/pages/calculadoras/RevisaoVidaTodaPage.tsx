import React, { useState } from 'react';
import { CalculadoraService } from '@/services/CalculadoraService';
import type { RevisaoVidaTodaCalcDTO } from '@/types/calculadoras';
import { CalculationCard } from '@/components/common/CalculationCard';
import '../ConsultaJuridicaPage.css';

export const RevisaoVidaTodaPage: React.FC = () => {
    const [formData, setFormData] = useState<RevisaoVidaTodaCalcDTO>({
        salarios_antes_1994: [],
        salarios_depois_1994: [],
        data_dib: '',
    });

    const [salarioAntes, setSalarioAntes] = useState('');
    const [salarioDepois, setSalarioDepois] = useState('');
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const addSalarioAntes = () => {
        if (salarioAntes) {
            setFormData((prev) => ({ ...prev, salarios_antes_1994: [...prev.salarios_antes_1994, Number(salarioAntes)] }));
            setSalarioAntes('');
        }
    };

    const addSalarioDepois = () => {
        if (salarioDepois) {
            setFormData((prev) => ({ ...prev, salarios_depois_1994: [...prev.salarios_depois_1994, Number(salarioDepois)] }));
            setSalarioDepois('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await CalculadoraService.revisaoVidaToda(formData);
            setResult(response.calculo);
        } catch (err: any) {
            setError('Erro ao calcular. Verifique os dados e tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>📊 Revisão da Vida Toda</h1>
                <p className="page-description">Calcule se a revisão da vida toda é vantajosa para o benefício</p>
            </div>

            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Salários Antes de 1994</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input type="number" value={salarioAntes} onChange={(e) => setSalarioAntes(e.target.value)} placeholder="R$ 1000.00" />
                            <button type="button" onClick={addSalarioAntes} className="theme-button">➕ Adicionar</button>
                        </div>
                        <small>Total: {formData.salarios_antes_1994.length} salários</small>
                    </div>

                    <div className="form-group">
                        <label>Salários Depois de 1994</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input type="number" value={salarioDepois} onChange={(e) => setSalarioDepois(e.target.value)} placeholder="R$ 1500.00" />
                            <button type="button" onClick={addSalarioDepois} className="theme-button">➕ Adicionar</button>
                        </div>
                        <small>Total: {formData.salarios_depois_1994.length} salários</small>
                    </div>

                    <div className="form-group">
                        <label>Data DIB (Data de Início do Benefício)</label>
                        <input type="date" value={formData.data_dib} onChange={(e) => setFormData((p) => ({ ...p, data_dib: e.target.value }))} required />
                    </div>

                    {error && <div className="error-message">⚠️ {error}</div>}

                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading || formData.salarios_antes_1994.length === 0}>
                            {isLoading ? '⏳ Calculando...' : '🧮 Calcular Revisão'}
                        </button>
                    </div>
                </form>
            </div>

            {result && <CalculationCard title="Resultado: Revisão da Vida Toda" result={result} />}
        </div>
    );
};
