// ========================================
// PETIÇÕES PREVIDENCIÁRIAS (10 endpoints)
// ========================================

export interface BasePrevidenciarioDTO {
    tipo_beneficio: string;
    numero_beneficio: string;
    der: string;
    dib: string;
    numero_processo_administrativo: string;
    motivo_recusa: string;
    nome: string;
    cpf: string;
    rg: string;
    orgao_emissor: string;
    endereco_completo: string;
    telefone: string;
    data_nascimento: string;
    tempo_contribuicao_total: number;
    historico_laboral: string;
    historico_contribuicoes: string;
    informacoes_medicas: string;
    laudos_medicos: string[];
    cid_principal: string;
    atividade_especial: boolean;
    exposicao_agentes_nocivos: string;
    valor_causa: number;
    justica_gratuita: boolean;
    tutela_antecipada: boolean;
    especialidade_perito: string;
    comarca: string;
    cidade_comarca: string;
    estado_comarca: string;
}

// Todas as 10 petições previdenciárias usam o mesmo DTO
export type AposentadoriaInvalidezDTO = BasePrevidenciarioDTO;
export type RevisaoVidaTodaDTO = BasePrevidenciarioDTO;
export type AposentadoriaTempoContribuicaoDTO = BasePrevidenciarioDTO;
export type AuxilioDoencaDTO = BasePrevidenciarioDTO;
export type PensaoMorteDTO = BasePrevidenciarioDTO;
export type AposentadoriaEspecialDTO = BasePrevidenciarioDTO;
export type BPCLoasDTO = BasePrevidenciarioDTO;
export type AposentadoriaRuralDTO = BasePrevidenciarioDTO;
export type SalarioMaternidadeDTO = BasePrevidenciarioDTO;
export type RevisaoBeneficioDTO = BasePrevidenciarioDTO;

export interface PeticaoPrevidenciariaResponse {
    tipo: string;
    area: string;
    texto_peticao: string;
    dados_utilizados: BasePrevidenciarioDTO;
    ethics: {
        disclaimer: string;
        generated_at: string;
        requires_lawyer_review: boolean;
        ai_tool_version: string;
        responsibility_notice: string;
    };
}

// Endpoint genérico com cálculo
export interface PeticaoComCalculoParams {
    tipo_peticao: string;
    incluir_calculo?: boolean;
}
