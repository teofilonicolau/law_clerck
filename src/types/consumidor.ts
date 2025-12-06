// ========================================
// PETIÇÕES CONSUMIDOR (2 endpoints)
// ========================================

export interface BaseConsumidorDTO {
    tipo_problema: string;
    empresa_ré: string;
    cnpj_empresa: string;
    endereco_empresa: string;
    descricao_problema: string;
    valor_prejuizo: number;
    data_ocorrencia: string;
    tentativa_solucao_amigavel: boolean;
    provas_disponíveis: string[];
    valor_produto_servico: number;
    nota_fiscal: boolean;
    garantia_vigente: boolean;
}

export type VicioProdutoDTO = BaseConsumidorDTO;
export type CobrancaIndevidaDTO = BaseConsumidorDTO;

export interface PeticaoConsumidorResponse {
    tipo: string;
    area: string;
    texto_peticao: string;
    dados_utilizados: BaseConsumidorDTO;
    ethics: {
        disclaimer: string;
        generated_at: string;
        requires_lawyer_review: boolean;
        ai_tool_version: string;
        responsibility_notice: string;
    };
}
