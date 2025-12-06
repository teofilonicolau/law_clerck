import apiClient from './api';
import type {
    TempoEspecialDTO, TempoEspecialResponse,
    PeriodoGracaDTO, PeriodoGracaResponse,
    ValorCausaDTO, ValorCausaResponse,
    RegraTransicaoEC103DTO, RegraTransicaoEC103Response,
    RevisaoVidaTodaCalcDTO, RevisaoVidaTodaCalcResponse,
    HorasExtrasDTO, HorasExtrasResponse,
    VerbasRescisoriasDTO, VerbasRescisoriasResponse,
    AdicionalNoturnoDTO, AdicionalNoturnoResponse,
    PensaoAlimenticiaDTO, PensaoAlimenticiaResponse,
    LiquidacaoSentencaDTO, LiquidacaoSentencaResponse,
    JurosMoraDTO, JurosMoraResponse,
    CorrecaoMonetariaDTO, CorrecaoMonetariaResponse,
} from '@/types/calculadoras';

export const CalculadoraService = {
    // 1. Tempo Especial
    tempoEspecial: async (data: TempoEspecialDTO): Promise<TempoEspecialResponse> => {
        const response = await apiClient.post<TempoEspecialResponse>('/tempo-especial', data);
        return response.data;
    },

    // 2. Período de Graça
    periodoGraca: async (data: PeriodoGracaDTO): Promise<PeriodoGracaResponse> => {
        const response = await apiClient.post<PeriodoGracaResponse>('/periodo-graca', data);
        return response.data;
    },

    // 3. Valor da Causa
    valorCausa: async (data: ValorCausaDTO): Promise<ValorCausaResponse> => {
        const response = await apiClient.post<ValorCausaResponse>('/valor-causa', data);
        return response.data;
    },

    // 4. Regra de Transição EC 103/2019
    regraTransicaoEC103: async (data: RegraTransicaoEC103DTO): Promise<RegraTransicaoEC103Response> => {
        const response = await apiClient.post<RegraTransicaoEC103Response>('/regra-transicao-ec103', data);
        return response.data;
    },

    // 5. Revisão da Vida Toda (Calculadora)
    revisaoVidaToda: async (data: RevisaoVidaTodaCalcDTO): Promise<RevisaoVidaTodaCalcResponse> => {
        const response = await apiClient.post<RevisaoVidaTodaCalcResponse>('/revisao-vida-toda', data);
        return response.data;
    },

    // 6. Horas Extras
    horasExtras: async (data: HorasExtrasDTO): Promise<HorasExtrasResponse> => {
        const response = await apiClient.post<HorasExtrasResponse>('/horas-extras', data);
        return response.data;
    },

    // 7. Verbas Rescisórias
    verbasRescisorias: async (data: VerbasRescisoriasDTO): Promise<VerbasRescisoriasResponse> => {
        const response = await apiClient.post<VerbasRescisoriasResponse>('/verbas-rescisorias', data);
        return response.data;
    },

    // 8. Adicional Noturno
    adicionalNoturno: async (data: AdicionalNoturnoDTO): Promise<AdicionalNoturnoResponse> => {
        const response = await apiClient.post<AdicionalNoturnoResponse>('/adicional-noturno', data);
        return response.data;
    },

    // 9. Pensão Alimentícia
    pensaoAlimenticia: async (data: PensaoAlimenticiaDTO): Promise<PensaoAlimenticiaResponse> => {
        const response = await apiClient.post<PensaoAlimenticiaResponse>('/pensao-alimenticia', data);
        return response.data;
    },

    // 10. Liquidação de Sentença
    liquidacaoSentenca: async (data: LiquidacaoSentencaDTO): Promise<LiquidacaoSentencaResponse> => {
        const response = await apiClient.post<LiquidacaoSentencaResponse>('/liquidacao-sentenca', data);
        return response.data;
    },

    // 11. Juros de Mora
    jurosMora: async (data: JurosMoraDTO): Promise<JurosMoraResponse> => {
        const response = await apiClient.post<JurosMoraResponse>('/juros-mora', data);
        return response.data;
    },

    // 12. Correção Monetária
    correcaoMonetaria: async (data: CorrecaoMonetariaDTO): Promise<CorrecaoMonetariaResponse> => {
        const response = await apiClient.post<CorrecaoMonetariaResponse>('/correcao-monetaria', data);
        return response.data;
    },
};

export default CalculadoraService;
