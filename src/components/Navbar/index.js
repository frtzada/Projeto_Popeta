import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = styled(motion.nav)`
  background-color: var(--surface);
  padding: 16px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  background-color: var(--surface);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: var(--text);
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--primary);
    
    &:after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  color: var(--text);
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--border);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background-color: var(--surface);
    padding: 16px;
    gap: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Popeta</Logo>
        <NavLinks>
          <NavLink to="/shows">Shows</NavLink>
          <NavLink to="/ingressos">Ingressos</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </NavContainer>
      <MobileMenu
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <NavLink to="/shows">Shows</NavLink>
        <NavLink to="/ingressos">Ingressos</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar; 