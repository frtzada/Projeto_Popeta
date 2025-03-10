import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiTag } from 'react-icons/fi';

const EspetaculosContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  padding: 0 ${({ theme }) => theme.spacing.md};

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const FilterSection = styled.div`
  max-width: 1200px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const EspetaculosGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const EspetaculoCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.div`
  height: 200px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`;

const CardDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.darkGray};
`;

const CardButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const mockEspetaculos = [
  {
    id: 1,
    titulo: 'A História do Brasil',
    descricao: 'Uma jornada interativa pelos principais momentos da história do Brasil.',
    data: '15/04/2024',
    horario: '19:00',
    local: 'Teatro Municipal',
    categoria: 'História',
    imagem: '/images/espetaculo1.jpg',
  },
  {
    id: 2,
    titulo: 'Arte Moderna',
    descricao: 'Explore as principais correntes artísticas do século XX.',
    data: '20/04/2024',
    horario: '20:00',
    local: 'Centro Cultural',
    categoria: 'Arte',
    imagem: '/images/espetaculo2.jpg',
  },
  {
    id: 3,
    titulo: 'Literatura Brasileira',
    descricao: 'Uma viagem pelos clássicos da literatura brasileira.',
    data: '25/04/2024',
    horario: '18:00',
    local: 'Biblioteca Municipal',
    categoria: 'Literatura',
    imagem: '/images/espetaculo3.jpg',
  },
];

const Espetaculos = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const categorias = ['Todos', 'História', 'Arte', 'Literatura'];

  const espetaculosFiltrados =
    categoriaAtiva === 'Todos'
      ? mockEspetaculos
      : mockEspetaculos.filter((espetaculo) => espetaculo.categoria === categoriaAtiva);

  return (
    <EspetaculosContainer>
      <Header>
        <h1>Nossos Espetáculos</h1>
        <p>
          Explore nossa programação de espetáculos interativos e mergulhe em
          experiências únicas de arte e história.
        </p>
      </Header>

      <FilterSection>
        {categorias.map((categoria) => (
          <FilterButton
            key={categoria}
            active={categoriaAtiva === categoria}
            onClick={() => setCategoriaAtiva(categoria)}
          >
            {categoria}
          </FilterButton>
        ))}
      </FilterSection>

      <EspetaculosGrid>
        {espetaculosFiltrados.map((espetaculo) => (
          <EspetaculoCard
            key={espetaculo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardImage image={espetaculo.imagem} />
            <CardContent>
              <CardTitle>{espetaculo.titulo}</CardTitle>
              <CardInfo>
                <FiCalendar /> {espetaculo.data}
              </CardInfo>
              <CardInfo>
                <FiClock /> {espetaculo.horario}
              </CardInfo>
              <CardInfo>
                <FiMapPin /> {espetaculo.local}
              </CardInfo>
              <CardInfo>
                <FiTag /> {espetaculo.categoria}
              </CardInfo>
              <CardDescription>{espetaculo.descricao}</CardDescription>
              <CardButton>Comprar Ingresso</CardButton>
            </CardContent>
          </EspetaculoCard>
        ))}
      </EspetaculosGrid>
    </EspetaculosContainer>
  );
};

export default Espetaculos; 