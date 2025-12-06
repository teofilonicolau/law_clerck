// Petições Trabalhistas - Componentes para formulários trabalhistas
import React, { useState } from 'react';
import type { BaseTrabalhistaDTO, PeticaoTrabalhistaResponse } from '@/types/trabalhista';
import { TrabalhistaService } from '@/services/TrabalhistaService';
import { LLMResponseArea } from '@/components/common/LLMResponseArea';
import '../ConsultaJuridicaPage.css';

interface PeticaoTrabalhistaFormProps {
    title: string;
    icon: string;
    description: string;
    serviceCall: (data: BaseTrabalhistaDTO) => Promise<PeticaoTrabalhistaResponse>;
    isQuesitos?: boolean;
}

export const PeticaoTrabalhistaForm: React.FC<PeticaoTrabalhistaFormProps> = ({
    title,
    icon,
    description,
    serviceCall,
    isQuesitos = false
}) => {
    const [formData, setFormData] = useState<BaseTrabalhistaDTO>({
        tipo_acao: '',
        empresa_ré: '',
        cnpj_empresa: '',
        periodo_trabalho_inicio: '',
        periodo_trabalho_fim: '',
        cargo_funcao: '',
        salario_registrado: 0,
        salario_real: 0,
        jornada_contratual: '44h semanais',
        jornada_real: '',
        horas_extras_habituais: false,
        adicional_insalubridade: false,
        adicional_periculosidade: false,
        equipamentos_seguranca: true,
        testemunhas: [],
        documentos_comprobatorios: [],
    });

    const [response, setResponse] = useState<string>('');
    const [quesitos, setQuesitos] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setFormData((p) => ({ ...p, [name]: (e.target as HTMLInputElement).checked }));
        } else if (type === 'number') {
            setFormData((p) => ({ ...p, [name]: Number(value) }));
        } else {
            setFormData((p) => ({ ...p, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const result = await serviceCall(formData);
            if (isQuesitos && result.quesitos) {
                setQuesitos(result.quesitos);
                setResponse(''); // Limpa texto se for quesitos
            } else {
                setResponse(result.texto_peticao || '');
                setQuesitos([]); // Limpa quesitos se for texto
            }
        } catch (err) {
            alert('Erro ao gerar petição/quesitos');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="consulta-juridica-page">
            <div className="page-header">
                <h1>{icon} {title}</h1>
                <p className="page-description">{description}</p>
            </div>

            <div className="form-container theme-card">
                <form onSubmit={handleSubmit}>
                    <h3>🏢 Dados da Empresa</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Nome da Empresa Ré *</label>
                            <input type="text" name="empresa_ré" value={formData.empresa_ré} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>CNPJ *</label>
                            <input type="text" name="cnpj_empresa" value={formData.cnpj_empresa} onChange={handleChange} required maxLength={18} />
                        </div>
                    </div>

                    <h3>💼 Dados do Trabalho</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Período Início *</label>
                            <input type="date" name="periodo_trabalho_inicio" value={formData.periodo_trabalho_inicio} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Período Fim *</label>
                            <input type="date" name="periodo_trabalho_fim" value={formData.periodo_trabalho_fim} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Cargo/Função *</label>
                        <input type="text" name="cargo_funcao" value={formData.cargo_funcao} onChange={handleChange} required />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Salário Registrado (R$)</label>
                            <input type="number" step="0.01" name="salario_registrado" value={formData.salario_registrado} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Salário Real (R$) *</label>
                            <input type="number" step="0.01" name="salario_real" value={formData.salario_real} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Jornada Contratual</label>
                            <input type="text" name="jornada_contratual" value={formData.jornada_contratual} onChange={handleChange} placeholder="Ex: 44h semanais" />
                        </div>
                        <div className="form-group">
                            <label>Jornada Real *</label>
                            <input type="text" name="jornada_real" value={formData.jornada_real} onChange={handleChange} required placeholder="Ex: 60h semanais" />
                        </div>
                    </div>

                    <h3>⚠️ Condições de Trabalho</h3>
                    <div className="form-group">
                        <label>
                            <input type="checkbox" name="horas_extras_habituais" checked={formData.horas_extras_habituais} onChange={handleChange} />
                            Horas Extras Habituais
                        </label>
                        <label>
                            <input type="checkbox" name="adicional_insalubridade" checked={formData.adicional_insalubridade} onChange={handleChange} />
                            Adicional de Insalubridade
                        </label>
                        <label>
                            <input type="checkbox" name="adicional_periculosidade" checked={formData.adicional_periculosidade} onChange={handleChange} />
                            Adicional de Periculosidade
                        </label>
                        <label>
                            <input type="checkbox" name="equipamentos_seguranca" checked={formData.equipamentos_seguranca} onChange={handleChange} />
                            Fornecimento de EPIs
                        </label>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>
                            {isLoading ? '⏳ Gerando...' : isQuesitos ? '📝 Gerar Quesitos' : '📝 Gerar Petição'}
                        </button>
                    </div>
                </form>
            </div>

            {isQuesitos && quesitos.length > 0 ? (
                <div className="theme-card" style={{ marginTop: '2rem' }}>
                    <h2>Quesitos Gerados</h2>
                    <ol style={{ padding: '1rem 2rem' }}>
                        {quesitos.map((q, idx) => (
                            <li key={idx} style={{ marginBottom: '0.5rem' }}>{q}</li>
                        ))}
                    </ol>
                </div>
            ) : (
                <LLMResponseArea content={response} title={isQuesitos ? "Quesitos Gerados" : "Petição Gerada"} />
            )}
        </div>
    );
};

// Reconhecimento de Vínculo Empregatício
export const ReconhecimentoVinculoPage: React.FC = () => {
    return (
        <PeticaoTrabalhistaForm
            title="Reconhecimento de Vínculo Empregatício"
            icon="🤝"
            description="Petição para reconhecimento de vínculo empregatício"
            serviceCall={TrabalhistaService.vinculoEmpregaticio}
        />
    );
};

// Quesitos de Insalubridade
export const QuesitosInsalubridadePage: React.FC = () => {
    return (
        <PeticaoTrabalhistaForm
            title="Quesitos de Insalubridade"
            icon="⚠️"
            description="Gera quesitos para perícia de insalubridade"
            serviceCall={TrabalhistaService.quesitosInsalubridade}
            isQuesitos={true}
        />
    );
};
