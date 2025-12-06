import apiClient from './api';
import type {
    CobrancaCivilDTO,
    IndenizacaoDTO,
    PeticaoCivilResponse,
} from '@/types/civil';

export const CivilService = {
    // 1. Cobrança
    cobranca: async (data: CobrancaCivilDTO): Promise<PeticaoCivilResponse> => {
        const response = await apiClient.post<PeticaoCivilResponse>('/civil/peticao-cobranca', data);
        return response.data;
    },

    // 2. Indenização
    indenizacao: async (data: IndenizacaoDTO): Promise<PeticaoCivilResponse> => {
        const response = await apiClient.post<PeticaoCivilResponse>('/civil/peticao-indenizacao', data);
        return response.data;
    },
};

export default CivilService;
