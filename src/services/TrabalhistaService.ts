import apiClient from './api';
import type {
    VinculoEmpregaticioDTO,
    QuesitosInsalubridadeDTO,
    PeticaoTrabalhistaResponse,
} from '@/types/trabalhista';

export const TrabalhistaService = {
    // 1. Vínculo Empregatício
    vinculoEmpregaticio: async (data: VinculoEmpregaticioDTO): Promise<PeticaoTrabalhistaResponse> => {
        const response = await apiClient.post<PeticaoTrabalhistaResponse>('/trabalhista/peticao-vinculo', data);
        return response.data;
    },

    // 2. Quesitos Insalubridade
    quesitosInsalubridade: async (data: QuesitosInsalubridadeDTO): Promise<PeticaoTrabalhistaResponse> => {
        const response = await apiClient.post<PeticaoTrabalhistaResponse>('/trabalhista/quesitos-insalubridade', data);
        return response.data;
    },
};

export default TrabalhistaService;
