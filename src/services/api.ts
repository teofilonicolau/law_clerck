import axios from 'axios';

// Base URL da API
const BASE_URL = 'https://tamarai-backend-production.up.railway.app/api/v1';

// Criar instância do Axios
export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    },
    timeout: 30000, // 30 segundos
});

// Interceptor de Request (opcional - para adicionar tokens, etc)
apiClient.interceptors.request.use(
    (config) => {
        // Aqui você pode adicionar tokens de autenticação se necessário
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor de Response (tratamento de erros global)
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Tratamento de erros
        if (error.response) {
            // Erro de resposta do servidor
            console.error('Erro na resposta:', error.response.data);
            console.error('Status:', error.response.status);
        } else if (error.request) {
            // Erro de requisição (sem resposta)
            console.error('Erro na requisição:', error.request);
        } else {
            // Outro tipo de erro
            console.error('Erro:', error.message);
        }
        return Promise.reject(error);
    }
);

export default apiClient;
