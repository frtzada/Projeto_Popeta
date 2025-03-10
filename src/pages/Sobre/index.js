import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiHeart, FiAward } from 'react-icons/fi';

const SobreContainer = styled.div`
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
    max-width: 800px;
    margin: 0 auto;
    color: var(--text);
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

const HistoriaSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 48px;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HistoriaContent = styled.div`
  h2 {
    color: var(--primary);
    margin-bottom: 24px;
  }

  p {
    color: var(--text);
    line-height: 1.8;
    margin-bottom: 16px;
  }
`;

const HistoriaImage = styled.div`
  height: 400px;
  background-image: url('/images/historia.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ValoresSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const ValoresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
`;

const ValorCard = styled(motion.div)`
  text-align: center;
  padding: 32px;
  background-color: var(--background);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 3rem;
    color: var(--secondary);
    margin-bottom: 16px;
  }

  h3 {
    color: var(--primary);
    margin-bottom: 16px;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const Sobre = () => {
  return (
    <SobreContainer>
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nossa História
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          O Popeta nasceu da paixão por eventos e shows. Nossa missão é simplificar
          o gerenciamento de eventos e conectar artistas com seu público.
        </motion.p>
      </Header>

      <HistoriaSection>
        <HistoriaContent>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Como tudo começou
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Em 2024, um grupo de entusiastas de eventos se uniu para criar uma
            plataforma que revolucionaria a forma como shows e eventos são
            gerenciados.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hoje, o Popeta é uma referência em soluções para eventos, oferecendo
            ferramentas inovadoras para produtores e artistas.
          </motion.p>
        </HistoriaContent>
        <HistoriaImage />
      </HistoriaSection>

      <ValoresSection>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Nossos Valores
        </motion.h2>
        <ValoresGrid>
          <ValorCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FiTarget />
            <h3>Missão</h3>
            <p>
              Simplificar o gerenciamento de eventos e conectar artistas com seu
              público de forma eficiente e transparente.
            </p>
          </ValorCard>

          <ValorCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FiUsers />
            <h3>Comunidade</h3>
            <p>
              Construir uma comunidade forte e colaborativa entre artistas,
              produtores e público.
            </p>
          </ValorCard>

          <ValorCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FiHeart />
            <h3>Paixão</h3>
            <p>
              Amar o que fazemos e transmitir essa paixão para todos os nossos
              usuários.
            </p>
          </ValorCard>

          <ValorCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FiAward />
            <h3>Excelência</h3>
            <p>
              Buscar constantemente a excelência em tudo que fazemos, desde o
              atendimento até as soluções tecnológicas.
            </p>
          </ValorCard>
        </ValoresGrid>
      </ValoresSection>
    </SobreContainer>
  );
};

export default Sobre; 