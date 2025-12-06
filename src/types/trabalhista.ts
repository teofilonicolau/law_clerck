// ========================================
// PETIÇÕES TRABALHISTAS (2 endpoints)
// ========================================

export interface BaseTrabalhistaDTO {
    tipo_acao: string;
    empresa_ré: string;
    cnpj_empresa: string;
    periodo_trabalho_inicio: string;
    periodo_trabalho_fim: string;
    cargo_funcao: string;
    salario_registrado: number;
    salario_real: number;
    jornada_contratual: string;
    jornada_real: string;
    horas_extras_habituais: boolean;
    adicional_insalubridade: boolean;
    adicional_periculosidade: boolean;
    equipamentos_seguranca: boolean;
    testemunhas: string[];
    documentos_comprobatorios: string[];
}

export type VinculoEmpregaticioDTO = BaseTrabalhistaDTO;
export type QuesitosInsalubridadeDTO = BaseTrabalhistaDTO;

export interface PeticaoTrabalhistaResponse {
    tipo: string;
    area: string;
    texto_peticao?: string;
    quesitos?: string[];
    total_quesitos?: number;
    dados_utilizados: BaseTrabalhistaDTO;
    ethics: {
        disclaimer: string;
        generated_at: string;
        requires_lawyer_review: boolean;
        ai_tool_version: string;
        responsibility_notice: string;
    };
}
