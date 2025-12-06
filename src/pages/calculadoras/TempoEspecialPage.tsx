import React, { useState } from 'react';
import { CalculadoraService } from '@/services/CalculadoraService';
import type { TempoEspecialDTO } from '@/types/calculadoras';
import { CalculationCard } from '@/components/common/CalculationCard';
import '../ConsultaJuridicaPage.css';

export const TempoEspecialPage: React.FC = () => {
    const [formData, setFormData] = useState<TempoEspecialDTO>({
        tempo_rural: 0,
        tempo_urbano: 0,
        tempo_especial: 0,
        data_inicio_especial: '',
    });

    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: name.includes('tempo') ? Number(value) : value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await CalculadoraService.tempoEspecial(formData);
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
                <h1>⏱️ Calculadora de Tempo Especial</h1>
                <p className="page-description">
                    Converta tempo de atividade especial em tempo comum para aposentadoria
                </p>
            </div>

            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Tempo Rural (meses)</label>
                            <input type="number" name="tempo_rural" value={formData.tempo_rural} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Tempo Urbano (meses)</label>
                            <input type="number" name="tempo_urbano" value={formData.tempo_urbano} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Tempo Especial (meses)</label>
                            <input type="number" name="tempo_especial" value={formData.tempo_especial} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Data Início Atividade Especial</label>
                            <input type="date" name="data_inicio_especial" value={formData.data_inicio_especial} onChange={handleChange} required />
                        </div>
                    </div>

                    {error && <div className="error-message">⚠️ {error}</div>}

                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>
                            {isLoading ? '⏳ Calculando...' : '🧮 Calcular'}
                        </button>
                    </div>
                </form>
            </div>

            {result && <CalculationCard title="Resultado: Tempo Especial Convertido" result={result} />}
        </div>
    );
};
