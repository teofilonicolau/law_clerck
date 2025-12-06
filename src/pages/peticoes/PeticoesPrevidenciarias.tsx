// Template genérico para criar petições rapidamente
import React, { useState } from 'react';
import type { BasePrevidenciarioDTO } from '@/types/previdenciario';
import { PrevidenciarioService } from '@/services/PrevidenciarioService';
import { LLMResponseArea } from '@/components/common/LLMResponseArea';
import '../ConsultaJuridicaPage.css';

interface PeticaoFormProps {
    title: string;
    icon: string;
    description: string;
    serviceCall: (data: BasePrevidenciarioDTO) => Promise<any>;
}

export const PeticaoGenericaForm: React.FC<PeticaoFormProps> = ({ title, icon, description, serviceCall }) => {
    const [formData, setFormData] = useState<BasePrevidenciarioDTO>({
        tipo_beneficio: '',
        numero_beneficio: '',
        der: '',
        dib: '',
        numero_processo_administrativo: '',
        motivo_recusa: '',
        nome: '',
        cpf: '',
        rg: '',
        orgao_emissor: '',
        endereco_completo: '',
        telefone: '',
        data_nascimento: '',
        tempo_contribuicao_total: 0,
        historico_laboral: '',
        historico_contribuicoes: '',
        informacoes_medicas: '',
        laudos_medicos: [],
        cid_principal: '',
        atividade_especial: false,
        exposicao_agentes_nocivos: '',
        valor_causa: 0,
        justica_gratuita: true,
        tutela_antecipada: false,
        especialidade_perito: '',
        comarca: '',
        cidade_comarca: '',
        estado_comarca: '',
    });

    const [response, setResponse] = useState('');
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
                    <h3>🧑 Dados Pessoais</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Nome Completo *</label>
                            <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>CPF *</label>
                            <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required maxLength={14} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>RG</label>
                            <input type="text" name="rg" value={formData.rg} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Órgão Emissor</label>
                            <input type="text" name="orgao_emissor" value={formData.orgao_emissor} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Endereço Completo *</label>
                        <input type="text" name="endereco_completo" value={formData.endereco_completo} onChange={handleChange} required />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Data de Nascimento</label>
                            <input type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} />
                        </div>
                    </div>

                    <h3>📋 Benefício e Processo</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Tipo de Benefício *</label>
                            <input type="text" name="tipo_beneficio" value={formData.tipo_beneficio} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Número do Benefício</label>
                            <input type="text" name="numero_beneficio" value={formData.numero_beneficio} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>DER (Data Entrada Requerimento)</label>
                            <input type="date" name="der" value={formData.der} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>DIB (Data Início Benefício)</label>
                            <input type="date" name="dib" value={formData.dib} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Número do Processo Administrativo</label>
                        <input type="text" name="numero_processo_administrativo" value={formData.numero_processo_administrativo} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Motivo da Recusa *</label>
                        <textarea name="motivo_recusa" value={formData.motivo_recusa} onChange={handleChange} rows={3} required />
                    </div>

                    <h3>⚖️ Dados Jurídicos</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Comarca *</label>
                            <input type="text" name="comarca" value={formData.comarca} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Cidade - UF</label>
                            <input type="text" name="cidade_comarca" value={formData.cidade_comarca} onChange={handleChange} placeholder="Ex: São Paulo - SP" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Valor da Causa (R$)</label>
                            <input type="number" step="0.01" name="valor_causa" value={formData.valor_causa} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="checkbox" name="justica_gratuita" checked={formData.justica_gratuita} onChange={handleChange} />
                                Justiça Gratuita
                            </label>
                            <label>
                                <input type="checkbox" name="tutela_antecipada" checked={formData.tutela_antecipada} onChange={handleChange} />
                                Tutela Antecipada
                            </label>
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

// Exemplo de uso - Aposentadoria por Invalidez
export const AposentadoriaInvalidezPage: React.FC = () => {
    return (
        <PeticaoGenericaForm
            title="Aposentadoria por Invalidez"
            icon="📱"
            description="Petição inicial para aposentadoria por invalidez (incapacidade total e permanente)"
            serviceCall={PrevidenciarioService.aposentadoriaInvalidez}
        />
    );
};

// Aposentadoria Especial
export const AposentadoriaEspecialPage: React.FC = () => {
    return (
        <PeticaoGenericaForm
            title="Aposentadoria Especial"
            icon="⚠️"
            description="Petição para aposentadoria especial (atividades insalubres/perigosas)"
            serviceCall={PrevidenciarioService.aposentadoriaEspecial}
        />
    );
};

// BPC/LOAS
export const BPCLoasPage: React.FC = () => {
    return (
        <PeticaoGenericaForm
            title="BPC/LOAS"
            icon="🤝"
            description="Petição para Benefício de Prestação Continuada (BPC/LOAS)"
            serviceCall={PrevidenciarioService.bpcLoas}
        />
    );
};

// Aposentadoria por Tempo de Contribuição
export const AposentadoriaTempoContribuicaoPage: React.FC = () => {
    return (
        <PeticaoGenericaForm
            title="Aposentadoria por Tempo de Contribuição"
            icon="⏰"
            description="Petição para aposentadoria por tempo de contribuição"
            serviceCall={PrevidenciarioService.aposentadoriaTempoContribuicao}
        />
    );
};

// Auxílio Doença
export const AuxilioDoencaPage: React.FC = () => {
    return (
        <PeticaoGenericaForm
            title="Auxílio Doença"
            icon="🏥"
            description="Petição para concessão de auxílio-doença"
            serviceCall={PrevidenciarioService.auxilioDoenca}
        />
    );
};

// Pensão por Morte
export const PensaoMortePage: React.FC = () => {
    return (
        <PeticaoGenericaForm
            title="Pensão por Morte"
            icon="💐"
            description="Petição para concessão de pensão por morte"
            serviceCall={PrevidenciarioService.pensaoMorte}
        />
    );
};

// Aposentadoria Rural/Híbrida
export const AposentadoriaRuralPage: React.FC = () => {
    return (
        <PeticaoGenericaForm
            title="Aposentadoria Rural/Híbrida"
            icon="🌾"
            description="Petição para aposentadoria híbrida ou rural"
            serviceCall={PrevidenciarioService.aposentadoriaRural}
        />
    );
};

// Salário Maternidade
export const SalarioMaternidadePage: React.FC = () => {
    return (
        <PeticaoGenericaForm
            title="Salário Maternidade"
            icon="👶"
            description="Petição para concessão de salário-maternidade"
            serviceCall={PrevidenciarioService.salarioMaternidade}
        />
    );
};

// Revisão da Vida Toda
export const RevisaoVidaTodaPeticaoPage: React.FC = () => {
    return (
        <PeticaoGenericaForm
            title="Revisão da Vida Toda"
            icon="📊"
            description="Petição para revisão da vida toda (inclusão de salários anteriores a 1994)"
            serviceCall={PrevidenciarioService.revisaoVidaToda}
        />
    );
};

// Revisão de Benefício (Genérica)
export const RevisaoBeneficioPage: React.FC = () => {
    return (
        <PeticaoGenericaForm
            title="Revisão de Benefício"
            icon="🔍"
            description="Petição genérica para revisão de benefício previdenciário"
            serviceCall={PrevidenciarioService.revisaoBeneficio}
        />
    );
};
