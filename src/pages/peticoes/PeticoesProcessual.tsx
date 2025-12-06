// Petições Processual Civil - Componentes para direito processual civil
import React, { useState } from 'react';
import type { BaseProcessualCivilDTO, PeticaoProcessualCivilResponse } from '@/types/processualCivil';
import { ProcessualCivilService } from '@/services/ProcessualCivilService';
import { LLMResponseArea } from '@/components/common/LLMResponseArea';
import '../ConsultaJuridicaPage.css';

interface PeticaoProcessualFormProps {
    title: string;
    icon: string;
    description: string;
    serviceCall: (data: BaseProcessualCivilDTO) => Promise<PeticaoProcessualCivilResponse>;
}

export const PeticaoProcessualForm: React.FC<PeticaoProcessualFormProps> = ({ title, icon, description, serviceCall }) => {
    const [formData, setFormData] = useState<BaseProcessualCivilDTO>({
        tipo_peticao: '',
        numero_processo: '',
        parte_contraria: '',
        cpf_cnpj_parte_contraria: '',
        endereco_parte_contraria: '',
        descricao_pedido: '',
        valor_execucao: 0,
        titulo_executivo: '',
        data_vencimento: '',
        imovel_endereco: '',
        valor_aluguel: 0,
        meses_atraso: 0,
        documentos_anexos: [],
        urgencia_fundamentacao: '',
    });

    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'number') {
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
            setResponse(result.texto_peticao);
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
                    <h3>📋 Dados do Processo</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Tipo de Petição *</label>
                            <input type="text" name="tipo_peticao" value={formData.tipo_peticao} onChange={handleChange} required placeholder="Ex: Execução, Monitória" />
                        </div>
                        <div className="form-group">
                            <label>Número do Processo</label>
                            <input type="text" name="numero_processo" value={formData.numero_processo} onChange={handleChange} />
                        </div>
                    </div>

                    <h3>👤 Parte Contrária (Executado/Requerido)</h3>
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
                            <label>Endereço Completo *</label>
                            <input type="text" name="endereco_parte_contraria" value={formData.endereco_parte_contraria} onChange={handleChange} required />
                        </div>
                    </div>

                    <h3>💰 Dados da Execução/Monitória</h3>
                    <div className="form-group">
                        <label>Título Executivo *</label>
                        <textarea name="titulo_executivo" value={formData.titulo_executivo} onChange={handleChange} rows={3} required placeholder="Descreva o título executivo (nota promissória, contrato, etc.)" />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Valor da Execução (R$) *</label>
                            <input type="number" step="0.01" name="valor_execucao" value={formData.valor_execucao} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Data de Vencimento *</label>
                            <input type="date" name="data_vencimento" value={formData.data_vencimento} onChange={handleChange} required />
                        </div>
                    </div>

                    <h3>📝 Descrição do Pedido</h3>
                    <div className="form-group">
                        <label>Descrição Detalhada *</label>
                        <textarea name="descricao_pedido" value={formData.descricao_pedido} onChange={handleChange} rows={4} required />
                    </div>

                    <h3>📄 Informações Complementares</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Endereço do Imóvel (se aplicável)</label>
                            <input type="text" name="imovel_endereco" value={formData.imovel_endereco} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Valor Aluguel (R$)</label>
                            <input type="number" step="0.01" name="valor_aluguel" value={formData.valor_aluguel} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Meses em Atraso</label>
                            <input type="number" name="meses_atraso" value={formData.meses_atraso} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Fundamentação de Urgência</label>
                            <textarea name="urgencia_fundamentacao" value={formData.urgencia_fundamentacao} onChange={handleChange} rows={2} />
                        </div>
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

// Petição de Execução
export const PeticaoExecucaoPage: React.FC = () => {
    return (
        <PeticaoProcessualForm
            title="Petição de Execução"
            icon="⚖️"
            description="Petição inicial de execução de título executivo extrajudicial"
            serviceCall={ProcessualCivilService.peticaoExecucao}
        />
    );
};

// Ação Monitória
export const AcaoMonitoriaPage: React.FC = () => {
    return (
        <PeticaoProcessualForm
            title="Ação Monitória"
            icon="📜"
            description="Petição inicial de ação monitória"
            serviceCall={ProcessualCivilService.peticaoMonitoria}
        />
    );
};
