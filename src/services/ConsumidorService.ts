import apiClient from './api';
import type {
    VicioProdutoDTO,
    CobrancaIndevidaDTO,
    PeticaoConsumidorResponse,
} from '@/types/consumidor';

export const ConsumidorService = {
    // 1. Vício do Produto
    vicioProduto: async (data: VicioProdutoDTO): Promise<PeticaoConsumidorResponse> => {
        const response = await apiClient.post<PeticaoConsumidorResponse>('/consumidor/peticao-vicio-produto', data);
        return response.data;
    },

    // 2. Cobrança Indevida
    cobrancaIndevida: async (data: CobrancaIndevidaDTO): Promise<PeticaoConsumidorResponse> => {
        const response = await apiClient.post<PeticaoConsumidorResponse>('/consumidor/peticao-cobranca-indevida', data);
        return response.data;
    },
};

export default ConsumidorService;
