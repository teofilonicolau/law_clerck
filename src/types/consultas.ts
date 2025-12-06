// ========================================
// CONSULTAS E IA (3 endpoints)
// ========================================

// Consulta Jurídica
export interface ConsultaJuridicaDTO {
    pergunta: string;
    area: string;
    firm_name: string;
    lawyer_name: string;
    signature_text: string;
    ai_persona: string;
}

export interface ConsultaJuridicaResponse {
    pergunta: string;
    area: string;
    escritorio: string;
    resposta: string;
    modelo: string;
    tokens_usados: number;
    area_consultada: string;
    status: string;
}

// Análise de Texto
export interface AnaliseTextoDTO {
    texto: string;
    tipo_analise: string;
    firm_name: string;
    lawyer_name: string;
    signature_text: string;
    ai_persona: string;
}

export interface AnaliseTextoResponse {
    texto_original: string;
    escritorio: string;
    resultado: string;
    tipo_analise: string;
    palavras: number;
    caracteres: number;
    modelo: string;
    tokens_usados: number;
    status: string;
}

// Parecer Jurídico
export interface ParecerJuridicoDTO {
    titulo: string;
    conteudo: string;
    area: string;
    incluir_jurisprudencia: boolean;
    firm_name: string;
    lawyer_name: string;
    signature_text: string;
    ai_persona: string;
}

export interface ParecerJuridicoResponse {
    titulo: string;
    area: string;
    tipo: string;
    escritorio: string;
    relatorio: string;
    modelo: string;
    tokens_usados: number;
    incluiu_jurisprudencia: boolean;
    status: string;
}
