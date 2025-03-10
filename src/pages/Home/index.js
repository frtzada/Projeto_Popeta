import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.9), rgba(46, 204, 113, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--background);
  padding: 16px;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 24px;
  font-family: 'Poppins', sans-serif;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 32px;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--secondary);
  color: var(--background);
  padding: 16px 32px;
  border-radius: 4px;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const FeaturesSection = styled.section`
  padding: 48px 0;
  background-color: var(--surface);
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
`;

const FeatureCard = styled(motion.div)`
  background-color: var(--background);
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    color: var(--primary);
    margin-bottom: 16px;
  }

  p {
    color: var(--text-secondary);
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bem-vindo ao Popeta
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sua plataforma para gerenciar eventos e shows
          </HeroSubtitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CTAButton to="/shows">
              Ver Shows <FiArrowRight />
            </CTAButton>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Gerenciamento de Shows</h3>
            <p>Organize e gerencie seus shows de forma simples e eficiente</p>
          </FeatureCard>
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Venda de Ingressos</h3>
            <p>Sistema integrado para venda e controle de ingressos</p>
          </FeatureCard>
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Relatórios e Análises</h3>
            <p>Acompanhe o desempenho dos seus eventos com relatórios detalhados</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </>
  );
};

export default Home; 