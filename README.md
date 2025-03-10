# Popeta - Plataforma de Espetáculos Interativos

O Popeta é uma plataforma web moderna para gerenciamento e venda de ingressos para espetáculos interativos, combinando arte, história e tecnologia para criar experiências únicas e memoráveis.

## 🚀 Tecnologias Utilizadas

- React.js
- Styled Components
- React Router
- React Query
- Framer Motion
- Axios
- Stripe (Pagamentos)
- JWT (Autenticação)

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Conta no Stripe (para processamento de pagamentos)
- Conta na AWS (para armazenamento de mídia)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/popeta.git
cd popeta
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env`
- Preencha as variáveis com suas credenciais

4. Inicie o servidor de desenvolvimento:
```bash
npm start
# ou
yarn start
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── context/       # Contextos React
├── services/      # Serviços de API
├── styles/        # Estilos globais
└── utils/         # Funções utilitárias
```

## 🌟 Funcionalidades

- ✅ Registro e autenticação de usuários
- ✅ Catálogo de espetáculos
- ✅ Sistema de compra de ingressos
- ✅ Integração com Stripe para pagamentos
- ✅ Painel administrativo
- ✅ Timeline interativa
- ✅ Upload e gerenciamento de mídia
- ✅ Análise de métricas e estatísticas

## 🔒 Segurança

- Autenticação JWT
- Proteção contra CSRF
- Validação de dados
- Sanitização de inputs
- HTTPS
- Proteção contra XSS

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- Desktop
- Tablet
- Mobile

## 🧪 Testes

Para executar os testes:
```bash
npm test
# ou
yarn test
```

## 📦 Build

Para criar uma build de produção:
```bash
npm run build
# ou
yarn build
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- Seu Nome - [@seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Stripe](https://stripe.com/)
- [AWS](https://aws.amazon.com/) 