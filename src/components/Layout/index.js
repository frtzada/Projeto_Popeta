import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../styles/main.css';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
`;

const Main = styled.main`
  flex: 1;
  padding-top: 80px; // Altura do Navbar
  padding-bottom: 48px; // theme.spacing.xxl
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout; 