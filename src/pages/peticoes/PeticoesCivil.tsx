// Petições Cível - Componentes para direito civil
import React, { useState } from 'react';
import type { BaseCivilDTO, PeticaoCivilResponse } from '@/types/civil';
import { CivilService } from '@/services/CivilService';
import { LLMResponseArea } from '@/components/common/LLMResponseArea';
import '../ConsultaJuridicaPage.css';

interface PeticaoCivilFormProps {
    title: string;
    icon: string;
    description: string;
    serviceCall: (data: BaseCivilDTO) => Promise<PeticaoCivilResponse>;
}

export const PeticaoCivilForm: React.FC<PeticaoCivilFormProps> = ({ title, icon, description, serviceCall }) => {
    const [formData, setFormData] = useState<BaseCivilDTO>({
        tipo_acao: '',
        parte_contraria: '',
        cpf_cnpj_parte_contraria: '',
        endereco_parte_contraria: '',
        descricao_caso: '',
        valor_causa: 0,
        data_fato_gerador: '',
        documentos_comprobatorios: [],
        tentativa_acordo_extrajudicial: false,
        urgencia_caso: false,
        valor_divida: 0,
        valor_danos_materiais: 0,
        valor_danos_morais: 0,
        regime_casamento: '',
        filhos_menores: false,
        bens_inventario: [],
    });

    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            const result = await serviceCall(formData); setResponse(result.texto_peticao);
        } catch (err) {
            alert('Erro ao gerar petição');
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
                    <h3>👤 Parte Contrária</h3>
                    <div className="form-group">
                        <label>Nome/Razão Social *</label>
                        <input type="text" name="parte_contraria" value={formData.parte_contraria} onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>CPF/CNPJ *</label>
                            <input type="text" name="cpf_cnpj_parte_contraria" value={formData.cpf_cnpj_parte_contraria} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Data do Fato Gerador *</label>
                            <input type="date" name="data_fato_gerador" value={formData.data_fato_gerador} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Endereço Completo *</label>
                        <input type="text" name="endereco_parte_contraria" value={formData.endereco_parte_contraria} onChange={handleChange} required />
                    </div>

                    <h3>📝 Descrição do Caso</h3>
                    <div className="form-group">
                        <label>Tipo de Ação *</label>
                        <input type="text" name="tipo_acao" value={formData.tipo_acao} onChange={handleChange} required placeholder="Ex: Cobrança, Indenização" />
                    </div>
                    <div className="form-group">
                        <label>Descrição Detalhada *</label>
                        <textarea name="descricao_caso" value={formData.descricao_caso} onChange={handleChange} rows={5} required />
                    </div>

                    <h3>💰 Valores</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Valor da Causa (R$) *</label>
                            <input type="number" step="0.01" name="valor_causa" value={formData.valor_causa} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Valor da Dívida (R$)</label>
                            <input type="number" step="0.01" name="valor_divida" value={formData.valor_divida} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Danos Materiais (R$)</label>
                            <input type="number" step="0.01" name="valor_danos_materiais" value={formData.valor_danos_materiais} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Danos Morais (R$)</label>
                            <input type="number" step="0.01" name="valor_danos_morais" value={formData.valor_danos_morais} onChange={handleChange} />
                        </div>
                    </div>

                    <h3>📄 Informações Adicionais</h3>
                    <div className="form-group">
                        <label>
                            <input type="checkbox" name="tentativa_acordo_extrajudicial" checked={formData.tentativa_acordo_extrajudicial} onChange={handleChange} />
                            Houve Tentativa de Acordo Extrajudicial
                        </label>
                        <label>
                            <input type="checkbox" name="urgencia_caso" checked={formData.urgencia_caso} onChange={handleChange} />
                            Caso Urgente
                        </label>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="theme-button" disabled={isLoading}>
                            {isLoading ? '⏳ Gerando Petição...' : '📝 Gerar Petição'}
                        </button>
                    </div>
                </form>
            </div>

            <LLMResponseArea content={response} title="Petição Gerada" />
        </div>
    );
};

// Ação de Cobrança
export const AcaoCobrancaPage: React.FC = () => {
    return (
        <PeticaoCivilForm
            title="Ação de Cobrança"
            icon="💰"
            description="Petição inicial de ação de cobrança"
            serviceCall={CivilService.cobranca}
        />
    );
};

// Ação de Indenização
export const AcaoIndenizacaoPage: React.FC = () => {
    return (
        <PeticaoCivilForm
            title="Ação de Indenização"
            icon="⚖️"
            description="Petição de ação de indenização por danos materiais e/ou morais"
            serviceCall={CivilService.indenizacao}
        />
    );
};
