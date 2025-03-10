import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para tratar erros de autenticação
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Serviços de Autenticação
export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getCurrentUser: () => api.get('/auth/me'),
  updateProfile: (userData) => api.put('/auth/profile', userData),
};

// Serviços de Espetáculos
export const espetaculosService = {
  getAll: () => api.get('/espetaculos'),
  getById: (id) => api.get(`/espetaculos/${id}`),
  create: (espetaculoData) => api.post('/espetaculos', espetaculoData),
  update: (id, espetaculoData) => api.put(`/espetaculos/${id}`, espetaculoData),
  delete: (id) => api.delete(`/espetaculos/${id}`),
};

// Serviços de Ingressos
export const ingressosService = {
  create: (ingressoData) => api.post('/ingressos', ingressoData),
  getByUser: () => api.get('/ingressos/user'),
  getById: (id) => api.get(`/ingressos/${id}`),
  validate: (id) => api.post(`/ingressos/${id}/validate`),
};

// Serviços de Pagamento
export const pagamentoService = {
  createPaymentIntent: (data) => api.post('/pagamentos/intent', data),
  confirmPayment: (paymentId) => api.post(`/pagamentos/${paymentId}/confirm`),
  getPaymentStatus: (paymentId) => api.get(`/pagamentos/${paymentId}/status`),
};

// Serviços de Estatísticas
export const estatisticasService = {
  getDashboard: () => api.get('/estatisticas/dashboard'),
  getVendas: (periodo) => api.get(`/estatisticas/vendas?periodo=${periodo}`),
  getUsuarios: () => api.get('/estatisticas/usuarios'),
};

// Serviços de Conteúdo
export const conteudoService = {
  getTimeline: () => api.get('/conteudo/timeline'),
  getConteudoById: (id) => api.get(`/conteudo/${id}`),
  createConteudo: (conteudoData) => api.post('/conteudo', conteudoData),
  updateConteudo: (id, conteudoData) => api.put(`/conteudo/${id}`, conteudoData),
  deleteConteudo: (id) => api.delete(`/conteudo/${id}`),
};

export default api; 