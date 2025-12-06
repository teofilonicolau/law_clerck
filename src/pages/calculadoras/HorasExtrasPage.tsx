import React, { useState } from 'react';
import { CalculadoraService } from '@/services/CalculadoraService';
import type { HorasExtrasDTO } from '@/types/calculadoras';
import { CalculationCard } from '@/components/common/CalculationCard';
import '../ConsultaJuridicaPage.css';

export const HorasExtrasPage: React.FC = () => {
    const [formData, setFormData] = useState<HorasExtrasDTO>({
        jornada_contratual: 8,
        jornada_real: 10,
        dias_trabalhados: 22,
        valor_hora: 15,
    });

    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await CalculadoraService.horasExtras(formData);
            setResult(response.calculo);
        } catch (err) {
            alert('Erro ao calcular');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>⏰ Calculadora de Horas Extras</h1>
                <p className="page-description">Calcule o valor das horas extras trabalhadas</p>
            </div>

            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Jornada Contratual (horas/dia)</label>
                            <input type="number" name="jornada_contratual" value={formData.jornada_contratual} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Jornada Real (horas/dia)</label>
                            <input type="number" name="jornada_real" value={formData.jornada_real} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Dias Trabalhados</label>
                            <input type="number" name="dias_trabalhados" value={formData.dias_trabalhados} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Valor da Hora (R$)</label>
                            <input type="number" step="0.01" name="valor_hora" value={formData.valor_hora} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>
                            {isLoading ? '⏳ Calculando...' : '🧮 Calcular Horas Extras'}
                        </button>
                    </div>
                </form>
            </div>

            {result && <CalculationCard title="Resultado: Horas Extras" result={result} />}
        </div>
    );
};
