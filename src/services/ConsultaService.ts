import apiClient from './api';
import type {
    ConsultaJuridicaDTO, ConsultaJuridicaResponse,
    AnaliseTextoDTO, AnaliseTextoResponse,
    ParecerJuridicoDTO, ParecerJuridicoResponse,
} from '@/types/consultas';

export const ConsultaService = {
    // 1. Consulta Jurídica
    consultaJuridica: async (data: ConsultaJuridicaDTO): Promise<ConsultaJuridicaResponse> => {
        const response = await apiClient.post<ConsultaJuridicaResponse>('/consulta', data);
        return response.data;
    },

    // 2. Análise de Texto
    analiseTexto: async (data: AnaliseTextoDTO): Promise<AnaliseTextoResponse> => {
        const response = await apiClient.post<AnaliseTextoResponse>('/analise', data);
        return response.data;
    },

    // 3. Parecer Jurídico
    parecerJuridico: async (data: ParecerJuridicoDTO): Promise<ParecerJuridicoResponse> => {
        const response = await apiClient.post<ParecerJuridicoResponse>('/parecer-juridico', data);
        return response.data;
    },
};

export default ConsultaService;
