// Petições Consumidor - Componentes para direito do consumidor
import React, { useState } from 'react';
import type { BaseConsumidorDTO, PeticaoConsumidorResponse } from '@/types/consumidor';
import { ConsumidorService } from '@/services/ConsumidorService';
import { LLMResponseArea } from '@/components/common/LLMResponseArea';
import '../ConsultaJuridicaPage.css';

interface PeticaoConsumidorFormProps {
    title: string;
    icon: string;
    description: string;
    serviceCall: (data: BaseConsumidorDTO) => Promise<PeticaoConsumidorResponse>;
}

export const PeticaoConsumidorForm: React.FC<PeticaoConsumidorFormProps> = ({ title, icon, description, serviceCall }) => {
    const [formData, setFormData] = useState<BaseConsumidorDTO>({
        tipo_problema: '',
        empresa_ré: '',
        cnpj_empresa: '',
        endereco_empresa: '',
        descricao_problema: '',
        valor_prejuizo: 0,
        data_ocorrencia: '',
        tentativa_solucao_amigavel: false,
        provas_disponíveis: [],
        valor_produto_servico: 0,
        nota_fiscal: false,
        garantia_vigente: false,
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
                    <h3>🏢 Dados da Empresa</h3>
                    <div className="form-group">
                        <label>Nome da Empresa *</label>
                        <input type="text" name="empresa_ré" value={formData.empresa_ré} onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>CNPJ *</label>
                            <input type="text" name="cnpj_empresa" value={formData.cnpj_empresa} onChange={handleChange} required maxLength={18} />
                        </div>
                        <div className="form-group">
                            <label>Data da Ocorrência *</label>
                            <input type="date" name="data_ocorrencia" value={formData.data_ocorrencia} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Endereço da Empresa</label>
                        <input type="text" name="endereco_empresa" value={formData.endereco_empresa} onChange={handleChange} />
                    </div>

                    <h3>📝 Descrição do Problema</h3>
                    <div className="form-group">
                        <label>Tipo do Problema *</label>
                        <input type="text" name="tipo_problema" value={formData.tipo_problema} onChange={handleChange} required placeholder="Ex: Vício do produto, Cobrança indevida" />
                    </div>
                    <div className="form-group">
                        <label>Descrição Detalhada *</label>
                        <textarea name="descricao_problema" value={formData.descricao_problema} onChange={handleChange} rows={4} required />
                    </div>

                    <h3>💰 Valores</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Valor do Produto/Serviço (R$)</label>
                            <input type="number" step="0.01" name="valor_produto_servico" value={formData.valor_produto_servico} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Valor do Prejuízo (R$) *</label>
                            <input type="number" step="0.01" name="valor_prejuizo" value={formData.valor_prejuizo} onChange={handleChange} required />
                        </div>
                    </div>

                    <h3>📄 Informações Adicionais</h3>
                    <div className="form-group">
                        <label>
                            <input type="checkbox" name="nota_fiscal" checked={formData.nota_fiscal} onChange={handleChange} />
                            Possui Nota Fiscal
                        </label>
                        <label>
                            <input type="checkbox" name="garantia_vigente" checked={formData.garantia_vigente} onChange={handleChange} />
                            Garantia Vigente
                        </label>
                        <label>
                            <input type="checkbox" name="tentativa_solucao_amigavel" checked={formData.tentativa_solucao_amigavel} onChange={handleChange} />
                            Houve Tentativa de Solução Amigável
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

// Vício do Produto
export const VicioProdutoPage: React.FC = () => {
    return (
        <PeticaoConsumidorForm
            title="Vício do Produto"
            icon="📦"
            description="Petição para vício do produto conforme CDC"
            serviceCall={ConsumidorService.vicioProduto}
        />
    );
};

// Cobrança Indevida
export const CobrancaIndevidaPage: React.FC = () => {
    return (
        <PeticaoConsumidorForm
            title="Cobrança Indevida"
            icon="💳"
            description="Petição para cobrança indevida com repetição de indébito"
            serviceCall={ConsumidorService.cobrancaIndevida}
        />
    );
};
