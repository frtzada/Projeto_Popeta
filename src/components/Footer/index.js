import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: var(--surface);
  color: var(--text);
  padding: 48px 0;
  margin-top: auto;
  border-top: 1px solid var(--border);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
`;

const FooterSection = styled.div`
  h3 {
    color: var(--text);
    margin-bottom: 16px;
    font-size: 1.2rem;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      width: 40px;
      height: 2px;
      bottom: -8px;
      left: 0;
      background: var(--gradient-primary);
    }
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: var(--text-secondary);
  margin-bottom: 8px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary);
    transform: translateX(4px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const SocialIcon = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 50%;
  background-color: var(--background);

  &:hover {
    color: var(--text);
    background: var(--gradient-primary);
    transform: translateY(-2px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  color: var(--text-secondary);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Sobre Nós</h3>
          <p>
            O Popeta é uma plataforma completa para gerenciamento de eventos e shows,
            oferecendo soluções inovadoras para produtores e artistas.
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Links Rápidos</h3>
          <FooterLink to="/shows">Shows</FooterLink>
          <FooterLink to="/ingressos">Ingressos</FooterLink>
          <FooterLink to="/sobre">Sobre</FooterLink>
          <FooterLink to="/contato">Contato</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <p>Email: contato@popeta.com</p>
          <p>Telefone: (11) 9999-9999</p>
          <p>Endereço: São Paulo, SP</p>
        </FooterSection>

        <FooterSection>
          <h3>Redes Sociais</h3>
          <SocialLinks>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FiFacebook />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FiInstagram />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FiYoutube />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} Popeta. Todos os direitos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 