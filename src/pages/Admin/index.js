import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FiUsers,
  FiCalendar,
  FiDollarSign,
  FiBarChart2,
  FiPlus,
  FiEdit2,
  FiTrash2,
} from 'react-icons/fi';

const AdminContainer = styled.div`
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
`;

const DashboardGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto 48px;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
`;

const DashboardCard = styled(motion.div)`
  background-color: var(--background);
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  svg {
    font-size: 2.5rem;
    color: var(--secondary);
    margin-bottom: 16px;
  }

  h3 {
    color: var(--primary);
    margin-bottom: 8px;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
    color: var(--text);
  }
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  h2 {
    color: var(--primary);
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--secondary);
  color: var(--background);
  padding: 16px 32px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary);
  }
`;

const Table = styled.table`
  width: 100%;
  background-color: var(--background);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: var(--primary);
  color: var(--background);
  padding: 16px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 16px;
  border-bottom: 1px solid var(--border);
  color: var(--text);
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--primary);
  margin-right: 8px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary);
  }
`;

const Admin = () => {
  const [shows] = useState([
    {
      id: 1,
      nome: 'Show de Rock',
      data: '2024-04-15',
      local: 'Arena Show',
      ingressos: 1000,
      vendidos: 750,
    },
    {
      id: 2,
      nome: 'Festival de Jazz',
      data: '2024-05-20',
      local: 'Teatro Municipal',
      ingressos: 500,
      vendidos: 300,
    },
  ]);

  return (
    <AdminContainer>
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Painel Administrativo
        </motion.h1>
      </Header>

      <DashboardGrid>
        <DashboardCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FiUsers />
          <h3>Usuários</h3>
          <p>1,234</p>
        </DashboardCard>

        <DashboardCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FiCalendar />
          <h3>Eventos</h3>
          <p>12</p>
        </DashboardCard>

        <DashboardCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FiDollarSign />
          <h3>Vendas</h3>
          <p>R$ 45,678</p>
        </DashboardCard>

        <DashboardCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FiBarChart2 />
          <h3>Taxa de Conversão</h3>
          <p>75%</p>
        </DashboardCard>
      </DashboardGrid>

      <ContentSection>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Shows Cadastrados
          </motion.h2>
          <AddButton>
            <FiPlus /> Novo Show
          </AddButton>
        </SectionHeader>

        <Table>
          <thead>
            <tr>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Data</TableHeader>
              <TableHeader>Local</TableHeader>
              <TableHeader>Ingressos</TableHeader>
              <TableHeader>Vendidos</TableHeader>
              <TableHeader>Ações</TableHeader>
            </tr>
          </thead>
          <tbody>
            {shows.map((show) => (
              <tr key={show.id}>
                <TableCell>{show.nome}</TableCell>
                <TableCell>{show.data}</TableCell>
                <TableCell>{show.local}</TableCell>
                <TableCell>{show.ingressos}</TableCell>
                <TableCell>{show.vendidos}</TableCell>
                <TableCell>
                  <ActionButton>
                    <FiEdit2 />
                  </ActionButton>
                  <ActionButton>
                    <FiTrash2 />
                  </ActionButton>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContentSection>
    </AdminContainer>
  );
};

export default Admin; 