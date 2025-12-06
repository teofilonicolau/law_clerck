// ========================================
// PETIÇÕES CIVIL (2 endpoints)
// ========================================

export interface BaseCivilDTO {
    tipo_acao: string;
    parte_contraria: string;
    cpf_cnpj_parte_contraria: string;
    endereco_parte_contraria: string;
    descricao_caso: string;
    valor_causa: number;
    data_fato_gerador: string;
    documentos_comprobatorios: string[];
    tentativa_acordo_extrajudicial: boolean;
    urgencia_caso: boolean;
    valor_divida: number;
    valor_danos_materiais: number;
    valor_danos_morais: number;
    regime_casamento: string;
    filhos_menores: boolean;
    bens_inventario: string[];
}

export type CobrancaCivilDTO = BaseCivilDTO;
export type IndenizacaoDTO = BaseCivilDTO;

export interface PeticaoCivilResponse {
    tipo: string;
    area: string;
    texto_peticao: string;
    dados_utilizados: BaseCivilDTO;
    ethics: {
        disclaimer: string;
        generated_at: string;
        requires_lawyer_review: boolean;
        ai_tool_version: string;
        responsibility_notice: string;
    };
}
