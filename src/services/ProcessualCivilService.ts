import apiClient from './api';
import type {
    PeticaoExecucaoDTO,
    PeticaoMonitoriaDTO,
    PeticaoProcessualCivilResponse,
} from '@/types/processualCivil';

export const ProcessualCivilService = {
    // 1. Petição de Execução
    peticaoExecucao: async (data: PeticaoExecucaoDTO): Promise<PeticaoProcessualCivilResponse> => {
        const response = await apiClient.post<PeticaoProcessualCivilResponse>('/processual-civil/peticao-execucao', data);
        return response.data;
    },

    // 2. Petição Monitória
    peticaoMonitoria: async (data: PeticaoMonitoriaDTO): Promise<PeticaoProcessualCivilResponse> => {
        const response = await apiClient.post<PeticaoProcessualCivilResponse>('/processual-civil/peticao-monitoria', data);
        return response.data;
    },
};

export default ProcessualCivilService;
