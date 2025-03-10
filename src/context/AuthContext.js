import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Verificar se existe um token no localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Aqui você pode fazer uma chamada para a API para validar o token
      // e obter os dados do usuário
      fetchUserData(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      // Aqui você faria a chamada para sua API
      // const response = await api.get('/user/me', {
      //   headers: { Authorization: `Bearer ${token}` }
      // });
      // setUser(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      // Aqui você faria a chamada para sua API de login
      // const response = await api.post('/auth/login', { email, password });
      // const { token, user } = response.data;
      
      // Simulando uma resposta da API
      const mockResponse = {
        token: 'mock-token',
        user: {
          id: 1,
          name: 'Usuário Teste',
          email: 'teste@email.com',
          role: 'user'
        }
      };

      localStorage.setItem('token', mockResponse.token);
      setUser(mockResponse.user);
      
      // Redireciona para a página anterior ou para a home
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login', { state: { from: location } });
  };

  const register = async (userData) => {
    try {
      // Aqui você faria a chamada para sua API de registro
      // const response = await api.post('/auth/register', userData);
      // const { token, user } = response.data;
      
      // Simulando uma resposta da API
      const mockResponse = {
        token: 'mock-token',
        user: {
          id: 1,
          name: userData.name,
          email: userData.email,
          role: 'user'
        }
      };

      localStorage.setItem('token', mockResponse.token);
      setUser(mockResponse.user);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Erro ao registrar:', error);
      throw error;
    }
  };

  const updateUser = async (userData) => {
    try {
      // Aqui você faria a chamada para sua API para atualizar os dados do usuário
      // const response = await api.put('/user/me', userData, {
      //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      // });
      // setUser(response.data);
      
      // Simulando uma resposta da API
      setUser(prev => ({ ...prev, ...userData }));
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    register,
    updateUser,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}; 