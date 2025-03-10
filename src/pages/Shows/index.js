import styled from 'styled-components';
import { motion } from 'framer-motion';

const ShowsContainer = styled.div`
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

const ShowsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
`;

const ShowCard = styled(motion.div)`
  background-color: var(--background);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 24px;

    h3 {
      color: var(--primary);
      margin-bottom: 8px;
    }

    p {
      color: var(--text-secondary);
      margin-bottom: 16px;
    }

    .price {
      color: var(--secondary);
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

const Shows = () => {
  const shows = [
    {
      id: 1,
      title: 'Show de Rock',
      date: '15 de Abril, 2024',
      location: 'Arena Show',
      price: 'R$ 100,00',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 2,
      title: 'Festival de Jazz',
      date: '20 de Maio, 2024',
      location: 'Teatro Municipal',
      price: 'R$ 150,00',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 3,
      title: 'Show de MPB',
      date: '10 de Junho, 2024',
      location: 'Centro de Convenções',
      price: 'R$ 120,00',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  return (
    <ShowsContainer>
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Shows Disponíveis
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Confira nossa programação de shows e eventos
        </motion.p>
      </Header>

      <ShowsGrid>
        {shows.map((show) => (
          <ShowCard
            key={show.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={show.image} alt={show.title} />
            <div className="content">
              <h3>{show.title}</h3>
              <p>{show.date}</p>
              <p>{show.location}</p>
              <p className="price">{show.price}</p>
            </div>
          </ShowCard>
        ))}
      </ShowsGrid>
    </ShowsContainer>
  );
};

export default Shows; 