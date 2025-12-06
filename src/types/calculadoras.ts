// ========================================
// CALCULADORAS (12 endpoints)
// ========================================

// Tempo Especial
export interface TempoEspecialDTO {
    tempo_rural: number;
    tempo_urbano: number;
    tempo_especial: number;
    data_inicio_especial: string;
}

export interface TempoEspecialResponse {
    calculo: {
        tempo_rural_meses: number;
        tempo_urbano_meses: number;
        tempo_especial_meses: number;
        tempo_especial_convertido_homem: number;
        tempo_especial_convertido_mulher: number;
        total_homem: number;
        total_mulher: number;
        total_anos_homem: number;
        total_anos_mulher: number;
        total_formatado_homem: string;
        total_formatado_mulher: string;
        tempo_especial_formatado: string;
        validacao: {
            tempo_valido: boolean;
            alertas: string[];
            limite_maximo_meses: number;
            limite_maximo_anos: number;
        };
        data_inicio_atividade_especial: string;
        periodo_exposicao_meses: number;
        periodo_exposicao_formatado: string;
    };
    uso: string;
    status: string;
}

// Período de Graça
export interface PeriodoGracaDTO {
    tipo_segurado: string;
    ultima_contribuicao: string;
}

export interface PeriodoGracaResponse {
    resultado: {
        tem_periodo_graca: boolean;
        dias_sem_contribuir: number;
        periodo_graca_valido: boolean;
        dias_restantes: number;
        observacao: string;
    };
    status: string;
}

// Valor da Causa
export interface ValorCausaDTO {
    parcelas_vencidas: number;
    valor_mensal: number;
}

export interface ValorCausaResponse {
    valor_causa: number;
    moeda: string;
    status: string;
}

// Regras de Transição EC 103/2019
export interface RegraTransicaoEC103DTO {
    sexo: string;
    idade_atual: number;
    tempo_contribuicao_atual: number;
    tempo_contribuicao_em_13_11_2019: number;
}

export interface RegraTransicaoEC103Response {
    resultado: {
        melhor_regra: any;
        todas_regras: any[];
        regras_elegiveis: any[];
        total_regras_elegiveis: number;
        total_regras_analisadas: number;
    };
    ec103: boolean;
    status: string;
}

// Revisão da Vida Toda
export interface RevisaoVidaTodaCalcDTO {
    salarios_antes_1994: number[];
    salarios_depois_1994: number[];
    data_dib: string;
}

export interface RevisaoVidaTodaCalcResponse {
    calculo: {
        media_vida_toda: number;
        media_pos_1994: number;
        diferenca_mensal: number;
        meses_desde_dib: number;
        valor_devido_bruto: number;
        vantajosa: boolean;
        observacao: string;
    };
    area: string;
    status: string;
}

// Horas Extras
export interface HorasExtrasDTO {
    jornada_contratual: number;
    jornada_real: number;
    dias_trabalhados: number;
    valor_hora: number;
}

export interface HorasExtrasResponse {
    calculo: {
        horas_extras_diarias: number;
        valor_total: number;
        observacao: string;
    };
    area: string;
    status: string;
}

// Verbas Rescisórias
export interface VerbasRescisoriasDTO {
    salario: number;
    data_admissao: string;
    data_rescisao: string;
    tipo_rescisao: string;
}

export interface VerbasRescisoriasResponse {
    calculo: {
        verbas_detalhadas: any;
        tempo_servico: any;
        total_verbas_rescisorias: number;
        tipo_rescisao: string;
    };
    area: string;
    tipo: string;
    status: string;
}

// Adicional Noturno
export interface AdicionalNoturnoDTO {
    salario_base: number;
    horas_noturnas: number;
    dias_trabalhados: number;
}

export interface AdicionalNoturnoResponse {
    calculo: {
        horas_noturnas_diarias: number;
        total_horas_noturnas: number;
        valor_hora_normal: number;
        valor_hora_noturna: number;
        valor_adicional: number;
        percentual_adicional: string;
    };
    area: string;
    status: string;
}

// Pensão Alimentícia
export interface PensaoAlimenticiaDTO {
    renda_alimentante: number;
    numero_filhos: number;
    percentual_sugerido: number;
}

export interface PensaoAlimenticiaResponse {
    calculo: {
        renda_alimentante: number;
        renda_disponivel: number;
        numero_filhos: number;
        percentual_aplicado: string;
        valor_por_filho: number;
        valor_total_pensao: number;
        observacao: string;
    };
    area: string;
    status: string;
}

// Liquidação de Sentença
export interface LiquidacaoSentencaDTO {
    valor_principal: number;
    data_sentenca: string;
    incluir_honorarios: boolean;
}

export interface LiquidacaoSentencaResponse {
    calculo: {
        valor_principal: number;
        correcao_monetaria: number;
        juros_mora: number;
        honorarios_advocaticios: number;
        valor_total_liquidacao: number;
        data_calculo: string;
    };
    area: string;
    status: string;
}

// Juros de Mora
export interface JurosMoraDTO {
    valor_principal: number;
    data_vencimento: string;
    taxa_mensal: number;
}

export interface JurosMoraResponse {
    calculo: {
        dias_atraso: number;
        juros: number;
        valor_total: number;
    };
    area: string;
    status: string;
}

// Correção Monetária
export interface CorrecaoMonetariaDTO {
    valor: number;
    data_inicial: string;
    indice: string;
}

export interface CorrecaoMonetariaResponse {
    calculo: {
        valor_original: number;
        data_inicial: string;
        data_final: string;
        anos_decorridos: number;
        indice_utilizado: string;
        taxa_anual: string;
        fator_correcao: number;
        valor_corrigido: number;
        valor_correcao: number;
    };
    area: string;
    status: string;
}
