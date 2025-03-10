import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
  background-color: var(--surface);
`;

const ErrorCode = styled(motion.h1)`
  font-size: 8rem;
  color: var(--primary);
  margin-bottom: 16px;
  line-height: 1;
`;

const ErrorMessage = styled(motion.h2)`
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 24px;
`;

const ErrorDescription = styled(motion.p)`
  max-width: 600px;
  color: var(--text-secondary);
  margin-bottom: 32px;
  line-height: 1.6;
`;

const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--secondary);
  color: var(--background);
  padding: 16px 32px;
  border-radius: 4px;
  font-weight: bold;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: var(--primary);
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <ErrorCode
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </ErrorCode>

      <ErrorMessage
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Página não encontrada
      </ErrorMessage>

      <ErrorDescription
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Desculpe, a página que você está procurando não existe ou foi movida.
        Vamos voltar para a página inicial e continuar explorando nossos
        espetáculos!
      </ErrorDescription>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <HomeButton to="/">
          <FiHome /> Voltar para Home
        </HomeButton>
      </motion.div>
    </NotFoundContainer>
  );
};

export default NotFound; 