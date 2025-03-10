import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCreditCard, FiUser, FiMail, FiPhone } from 'react-icons/fi';

const IngressosContainer = styled.div`
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

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
  background-color: var(--background);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormSection = styled.div`
  margin-bottom: 32px;

  h2 {
    color: var(--primary);
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  color: var(--text);
  font-weight: 500;
`;

const Input = styled.input`
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const Select = styled.select`
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--background);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const ResumoPedido = styled.div`
  background-color: var(--surface);
  padding: 24px;
  border-radius: 4px;
  margin-bottom: 32px;
`;

const ResumoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: var(--text);
`;

const ResumoTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  font-weight: bold;
  color: var(--primary);
`;

const Ingressos = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    quantidade: '1',
    formaPagamento: 'cartao',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de processamento do pagamento
    console.log('Dados do formulário:', formData);
  };

  return (
    <IngressosContainer>
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Compra de Ingressos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Preencha seus dados para finalizar a compra dos ingressos
        </motion.p>
      </Header>

      <CheckoutContainer>
        <form onSubmit={handleSubmit}>
          <FormSection>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FiUser /> Dados Pessoais
            </motion.h2>
            <FormGrid>
              <FormGroup>
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormGrid>
          </FormSection>

          <FormSection>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FiCreditCard /> Pagamento
            </motion.h2>
            <FormGrid>
              <FormGroup>
                <Label htmlFor="quantidade">Quantidade de Ingressos</Label>
                <Select
                  id="quantidade"
                  name="quantidade"
                  value={formData.quantidade}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 Ingresso</option>
                  <option value="2">2 Ingressos</option>
                  <option value="3">3 Ingressos</option>
                  <option value="4">4 Ingressos</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="formaPagamento">Forma de Pagamento</Label>
                <Select
                  id="formaPagamento"
                  name="formaPagamento"
                  value={formData.formaPagamento}
                  onChange={handleChange}
                  required
                >
                  <option value="cartao">Cartão de Crédito</option>
                  <option value="pix">PIX</option>
                  <option value="boleto">Boleto</option>
                </Select>
              </FormGroup>
            </FormGrid>
          </FormSection>

          <ResumoPedido>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Resumo do Pedido
            </motion.h2>
            <ResumoItem>
              <span>Show de Rock</span>
              <span>R$ 100,00</span>
            </ResumoItem>
            <ResumoItem>
              <span>Quantidade: {formData.quantidade}</span>
              <span>R$ {100 * parseInt(formData.quantidade)},00</span>
            </ResumoItem>
            <ResumoItem>
              <span>Taxa de Serviço</span>
              <span>R$ 10,00</span>
            </ResumoItem>
            <ResumoTotal>
              <span>Total</span>
              <span>
                R$ {100 * parseInt(formData.quantidade) + 10},00
              </span>
            </ResumoTotal>
          </ResumoPedido>

          <motion.button
            type="submit"
            className="btn btn-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Finalizar Compra
          </motion.button>
        </form>
      </CheckoutContainer>
    </IngressosContainer>
  );
};

export default Ingressos; 