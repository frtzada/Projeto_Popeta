import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContatoContainer = styled.div`
  padding: 48px 0;
  min-height: 100vh;
  background-color: var(--surface);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
  padding: 0 16px;

  h1 {
    color: var(--primary);
    margin-bottom: 16px;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    color: var(--text);
  }
`;

const ContatoContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContatoInfo = styled.div`
  h2 {
    color: var(--primary);
    margin-bottom: 24px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  color: var(--text);

  svg {
    font-size: 1.5rem;
    color: var(--secondary);
  }

  p {
    margin: 0;
  }
`;

const Form = styled.form`
  background-color: var(--background);
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    color: var(--primary);
    margin-bottom: 24px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 24px;

  label {
    display: block;
    margin-bottom: 8px;
    color: var(--text);
  }

  input,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: 4px;
    background-color: var(--background);
    color: var(--text);
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: var(--primary);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--secondary);
  color: var(--background);
  padding: 16px 32px;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary);
  }
`;

const Contato = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Formulário enviado');
  };

  return (
    <ContatoContainer>
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Entre em Contato
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tem alguma dúvida ou sugestão? Entre em contato conosco!
        </motion.p>
      </Header>

      <ContatoContent>
        <ContatoInfo>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Informações de Contato
          </motion.h2>
          <InfoItem>
            <FiMail />
            <p>contato@popeta.com</p>
          </InfoItem>
          <InfoItem>
            <FiPhone />
            <p>(11) 9999-9999</p>
          </InfoItem>
          <InfoItem>
            <FiMapPin />
            <p>São Paulo, SP</p>
          </InfoItem>
        </ContatoInfo>

        <Form onSubmit={handleSubmit}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Envie sua Mensagem
          </motion.h2>
          <FormGroup>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" required />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <label htmlFor="assunto">Assunto</label>
            <input type="text" id="assunto" name="assunto" required />
          </FormGroup>
          <FormGroup>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" required></textarea>
          </FormGroup>
          <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
        </Form>
      </ContatoContent>
    </ContatoContainer>
  );
};

export default Contato; 