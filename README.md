<div align="center">

# ⚖️ LawClerk

### Petições Jurídicas com Inteligência Artificial

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<img src="https://img.shields.io/badge/Desenvolvido_por-Antigravity_AI-7C3AED?style=for-the-badge" alt="Desenvolvido por Antigravity AI" />
<img src="https://img.shields.io/badge/Powered_by-TamarAI-FCD34D?style=for-the-badge" alt="Powered by TamarAI" />

[Demo](https://lawclerk.vercel.app) · [Documentação](./docs) · [Reportar Bug](https://github.com/seu-usuario/lawclerk/issues)

</div>

---

## 📚 Sobre o Projeto

**LawClerk** é uma aplicação web moderna e intuitiva que revoluciona a forma como advogados criam petições jurídicas, realizam cálculos processuais e obtém consultas especializadas através de **Inteligência Artificial avançada**.

Com uma interface elegante e responsiva, o LawClerk oferece:

- 🤖 **IA Avançada** - Geração automática de petições com fundamentação jurídica
- 📊 **Calculadoras Jurídicas** - Cálculos precisos para todas as áreas do direito
- 💬 **Consultas Especializadas** - Análise de documentos e pareceres jurídicos
- 📱 **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Performance Ultra-Rápida** - Construído com Vite e React 18

---

## ✨ Funcionalidades

### 📝 Petições Jurídicas (18 tipos)

#### 🏛️ Direito Previdenciário
- ✅ Aposentadoria por Invalidez
- ✅ Aposentadoria por Tempo de Contribuição
- ✅ Aposentadoria Especial
- ✅ Aposentadoria Rural/Híbrida
- ✅ Pensão por Morte
- ✅ BPC/LOAS
- ✅ Salário Maternidade
- ✅ Auxílio Doença
- ✅ Revisão da Vida Toda
- ✅ Revisão de Benefício

#### 👔 Direito Trabalhista
- ✅ Reconhecimento de Vínculo Empregatício
- ✅ Quesitos de Insalubridade

#### 🛒 Direito do Consumidor
- ✅ Vício do Produto
- ✅ Cobrança Indevida

#### 📋 Direito Civil
- ✅ Ação de Cobrança
- ✅ Ação de Indenização

#### 📁 Processual Civil
- ✅ Petição de Execução
- ✅ Ação Monitória

---

### 🧮 Calculadoras Jurídicas (12 calculadoras)

#### Previdenciárias
- 📊 Conversão de Tempo Especial
- 📈 Revisão da Vida Toda
- ⏰ Período de Graça
- 📋 Regras de Transição EC 103/2019

#### Trabalhistas
- 💰 Cálculo de Horas Extras
- 📊 Verbas Rescisórias
- 🌙 Adicional Noturno

#### Gerais
- 👨‍👩‍👧 Pensão Alimentícia
- ⚖️ Liquidação de Sentença
- 💵 Juros de Mora
- 📈 Correção Monetária (INPC, IPCA, IGP-M)
- 💼 Valor da Causa

---

### 🤖 Ferramentas com IA (3 ferramentas)

- 💬 **Consulta Jurídica** - Tire dúvidas jurídicas especializadas
- 📄 **Análise de Texto** - Analise documentos e contratos
- 📋 **Parecer Jurídico** - Gere pareceres fundamentados com jurisprudência

---

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

### Frontend
- **[React 18.3](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5.6](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[Vite 5.4](https://vitejs.dev/)** - Build tool ultra-rápido
- **[React Router DOM 6.28](https://reactrouter.com/)** - Roteamento SPA
- **[Axios 1.7](https://axios-http.com/)** - Cliente HTTP

### Backend
- **[TamarAI API](https://tamarai-backend-production.up.railway.app)** - API de IA jurídica
- **[Railway](https://railway.app/)** - Hospedagem do backend

### DevOps & Deploy
- **[Vercel](https://vercel.com/)** / **[Netlify](https://www.netlify.com/)** - Deploy frontend
- **[GitHub](https://github.com/)** - Versionamento de código

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/lawclerk.git

# Entre na pasta do projeto
cd lawclerk

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://tamarai-backend-production.up.railway.app/api/v1
VITE_APP_NAME=LawClerk
VITE_APP_VERSION=1.0.0
```

---

## 🏗️ Build para Produção

```bash
# Gerar build de produção
npm run build

# Preview do build
npm run preview
```

---

## 📂 Estrutura do Projeto

```
lawclerk/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/          # Imagens, ícones
│   ├── components/      # Componentes reutilizáveis
│   │   ├── common/      # Componentes comuns
│   │   └── layout/      # Layout (Header, Sidebar, Footer)
│   ├── pages/           # Páginas da aplicação
│   │   ├── calculadoras/
│   │   ├── peticoes/
│   │   └── consultas/
│   ├── services/        # Serviços de API
│   ├── types/           # TypeScript types
│   ├── utils/           # Funções utilitárias
│   ├── styles/          # Estilos globais
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Entry point
├── .env.example         # Exemplo de variáveis de ambiente
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Screenshots

<div align="center">

### Home Page
![Home](./docs/screenshots/home.png)

### Gerador de Petições
![Petições](./docs/screenshots/peticoes.png)

### Calculadoras Jurídicas
![Calculadoras](./docs/screenshots/calculadoras.png)

</div>

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Desenvolvido por

<div align="center">

### 🤖 [Antigravity AI](https://deepmind.google)
**Advanced Agentic Coding Assistant**

Desenvolvido com ❤️ por **Antigravity**, o assistente de IA avançado do Google DeepMind

---

### ⚡ Powered by [TamarAI](https://tamarai.com)
**Inteligência Artificial Jurídica de Alta Performance**

Backend e IA fornecidos pela **TamarAI** - Tecnologia de ponta para automação jurídica

</div>

---

## 📞 Contato e Suporte

- 📧 Email: suporte@lawclerk.com
- 🌐 Website: [lawclerk.com](https://lawclerk.com)
- 💬 Discord: [Comunidade LawClerk](https://discord.gg/lawclerk)

---

<div align="center">

**⚖️ LawClerk - Transformando o Direito com Inteligência Artificial**

[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/seu-usuario/lawclerk)

</div>
