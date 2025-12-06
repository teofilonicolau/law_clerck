// ========================================
// PETIÇÕES PROCESSUAL CIVIL (2 endpoints)
// ========================================

export interface BaseProcessualCivilDTO {
    tipo_peticao: string;
    numero_processo: string;
    parte_contraria: string;
    cpf_cnpj_parte_contraria: string;
    endereco_parte_contraria: string;
    descricao_pedido: string;
    valor_execucao: number;
    titulo_executivo: string;
    data_vencimento: string;
    imovel_endereco: string;
    valor_aluguel: number;
    meses_atraso: number;
    documentos_anexos: string[];
    urgencia_fundamentacao: string;
}

export type PeticaoExecucaoDTO = BaseProcessualCivilDTO;
export type PeticaoMonitoriaDTO = BaseProcessualCivilDTO;

export interface PeticaoProcessualCivilResponse {
    tipo: string;
    area: string;
    texto_peticao: string;
    dados_utilizados: BaseProcessualCivilDTO;
    ethics: {
        disclaimer: string;
        generated_at: string;
        requires_lawyer_review: boolean;
        ai_tool_version: string;
        responsibility_notice: string;
    };
}
