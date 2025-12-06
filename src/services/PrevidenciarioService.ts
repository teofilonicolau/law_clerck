import apiClient from './api';
import type {
    AposentadoriaInvalidezDTO,
    RevisaoVidaTodaDTO,
    AposentadoriaTempoContribuicaoDTO,
    AuxilioDoencaDTO,
    PensaoMorteDTO,
    AposentadoriaEspecialDTO,
    BPCLoasDTO,
    AposentadoriaRuralDTO,
    SalarioMaternidadeDTO,
    RevisaoBeneficioDTO,
    BasePrevidenciarioDTO,
    PeticaoPrevidenciariaResponse,
} from '@/types/previdenciario';

export const PrevidenciarioService = {
    // 1. Aposentadoria por Invalidez
    aposentadoriaInvalidez: async (data: AposentadoriaInvalidezDTO): Promise<PeticaoPrevidenciariaResponse> => {
        const response = await apiClient.post<PeticaoPrevidenciariaResponse>('/previdenciario/peticao-aposentadoria-invalidez', data);
        return response.data;
    },

    // 2. Revisão da Vida Toda
    revisaoVidaToda: async (data: RevisaoVidaTodaDTO): Promise<PeticaoPrevidenciariaResponse> => {
        const response = await apiClient.post<PeticaoPrevidenciariaResponse>('/previdenciario/peticao-revisao-vida-toda', data);
        return response.data;
    },

    // 3. Aposentadoria por Tempo de Contribuição
    aposentadoriaTempoContribuicao: async (data: AposentadoriaTempoContribuicaoDTO): Promise<PeticaoPrevidenciariaResponse> => {
        const response = await apiClient.post<PeticaoPrevidenciariaResponse>('/previdenciario/peticao-aposentadoria-tempo-contribuicao', data);
        return response.data;
    },

    // 4. Auxílio Doença
    auxilioDoenca: async (data: AuxilioDoencaDTO): Promise<PeticaoPrevidenciariaResponse> => {
        const response = await apiClient.post<PeticaoPrevidenciariaResponse>('/previdenciario/peticao-auxilio-doenca', data);
        return response.data;
    },

    // 5. Pensão por Morte
    pensaoMorte: async (data: PensaoMorteDTO): Promise<PeticaoPrevidenciariaResponse> => {
        const response = await apiClient.post<PeticaoPrevidenciariaResponse>('/previdenciario/peticao-pensao-morte', data);
        return response.data;
    },

    // 6. Aposentadoria Especial
    aposentadoriaEspecial: async (data: AposentadoriaEspecialDTO): Promise<PeticaoPrevidenciariaResponse> => {
        const response = await apiClient.post<PeticaoPrevidenciariaResponse>('/previdenciario/peticao-aposentadoria-especial', data);
        return response.data;
    },

    // 7. BPC/LOAS
    bpcLoas: async (data: BPCLoasDTO): Promise<PeticaoPrevidenciariaResponse> => {
        const response = await apiClient.post<PeticaoPrevidenciariaResponse>('/previdenciario/peticao-bpc-loas', data);
        return response.data;
    },

    // 8. Aposentadoria Rural
    aposentadoriaRural: async (data: AposentadoriaRuralDTO): Promise<PeticaoPrevidenciariaResponse> => {
        const response = await apiClient.post<PeticaoPrevidenciariaResponse>('/previdenciario/peticao-aposentadoria-rural', data);
        return response.data;
    },

    // 9. Salário Maternidade
    salarioMaternidade: async (data: SalarioMaternidadeDTO): Promise<PeticaoPrevidenciariaResponse> => {
        const response = await apiClient.post<PeticaoPrevidenciariaResponse>('/previdenciario/peticao-salario-maternidade', data);
        return response.data;
    },

    // 10. Revisão de Benefício
    revisaoBeneficio: async (data: RevisaoBeneficioDTO): Promise<PeticaoPrevidenciariaResponse> => {
        const response = await apiClient.post<PeticaoPrevidenciariaResponse>('/previdenciario/peticao-revisao-beneficio', data);
        return response.data;
    },

    // 11. Petição com Cálculo (endpoint genérico)
    peticaoComCalculo: async (
        tipoPeticao: string,
        data: BasePrevidenciarioDTO,
        incluirCalculo: boolean = false
    ): Promise<PeticaoPrevidenciariaResponse> => {
        const response = await apiClient.post<PeticaoPrevidenciariaResponse>(
            `/previdenciario/peticao-com-calculo/${tipoPeticao}`,
            data,
            { params: { incluir_calculo: incluirCalculo } }
        );
        return response.data;
    },
};
