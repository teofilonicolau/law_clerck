import React, { useState } from 'react';
import { CalculadoraService } from '@/services/CalculadoraService';
import type { VerbasRescisoriasDTO } from '@/types/calculadoras';
import { CalculationCard } from '@/components/common/CalculationCard';
import '../ConsultaJuridicaPage.css';

export const VerbasRescisoriasPage: React.FC = () => {
    const [formData, setFormData] = useState<VerbasRescisoriasDTO>({
        salario: 2000,
        data_admissao: '',
        data_rescisao: '',
        tipo_rescisao: 'sem_justa_causa',
    });

    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: name === 'salario' ? Number(value) : value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await CalculadoraService.verbasRescisorias(formData);
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
                <h1>💼 Verbas Rescisórias</h1>
                <p className="page-description">Calcule as verbas rescisórias devidas</p>
            </div>

            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Salário (R$)</label>
                            <input type="number" step="0.01" name="salario" value={formData.salario} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Tipo de Rescisão</label>
                            <select name="tipo_rescisao" value={formData.tipo_rescisao} onChange={handleChange} required>
                                <option value="sem_justa_causa">Sem Justa Causa</option>
                                <option value="com_justa_causa">Com Justa Causa</option>
                                <option value="pedido_demissao">Pedido de Demissão</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Data de Admissão</label>
                            <input type="date" name="data_admissao" value={formData.data_admissao} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Data de Rescisão</label>
                            <input type="date" name="data_rescisao" value={formData.data_rescisao} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>
                            {isLoading ? '⏳ Calculando...' : '🧮 Calcular Verbas'}
                        </button>
                    </div>
                </form>
            </div>

            {result && <CalculationCard title="Resultado: Verbas Rescisórias" result={result} />}
        </div>
    );
};
