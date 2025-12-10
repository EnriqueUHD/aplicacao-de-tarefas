# 📝 Gerenciador de Tarefas

Projeto de conclusão do curso **DevStart** - Aplicação de gerenciamento de tarefas desenvolvida com React.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

## 📋 Sobre o Projeto

Este é um aplicativo de lista de tarefas (To-Do List) desenvolvido como projeto final do curso DevStart. O objetivo é aplicar os conceitos aprendidos durante o curso, incluindo:

- Componentes React
- Gerenciamento de estado com Context API
- Roteamento com React Router
- Manipulação de formulários
- Persistência de dados com localStorage
- Estilização com CSS modular

## ✨ Funcionalidades

- ✅ **Adicionar tarefas**: Crie novas tarefas facilmente
- ✏️ **Editar tarefas**: Modifique o texto de tarefas existentes
- 🗑️ **Excluir tarefas**: Remova tarefas concluídas ou indesejadas
- 💾 **Persistência local**: Suas tarefas são salvas automaticamente no navegador
- 🎨 **Interface minimalista**: Design limpo e intuitivo
- ✔️ **Validações**: Impede a criação de tarefas vazias

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** - Gerenciamento de rotas
- **Context API** - Gerenciamento de estado global
- **CSS Modules** - Estilização componentizada
- **LocalStorage** - Persistência de dados no navegador

## 📁 Estrutura do Projeto
```
src/
├── components/          # Componentes reutilizáveis
│   ├── ItemTarefa.jsx
│   ├── ItemTarefa.css
│   ├── ListaTarefas.jsx
│   └── ListaTarefas.css
├── context/            # Context API
│   └── TarefasContext.jsx
├── pages/              # Páginas da aplicação
│   ├── Home.jsx
│   ├── Home.css
│   ├── AdicionarTarefa.jsx
│   └── AdicionarTarefa.css
├── App.js              # Componente principal
├── App.css
├── index.js            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🔧 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 💻 Como Executar o Projeto

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/EnriqueUHD/aplicacao-de-tarefas
```

### 2️⃣ Acesse a pasta do projeto
```bash
cd gerenciador-tarefas
```

### 3️⃣ Instale as dependências
```bash
npm install
```

ou se preferir yarn:
```bash
yarn install
```

### 4️⃣ Execute a aplicação
```bash
npm start
```

ou com yarn:
```bash
yarn start
```

### 5️⃣ Acesse no navegador

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

## 📦 Dependências do Projeto
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x"
}
```

## 🎯 Como Usar

1. **Adicionar uma tarefa**: Clique no botão "+ Nova Tarefa", digite a descrição e clique em "Salvar Tarefa"
2. **Editar uma tarefa**: Na lista de tarefas, clique em "Editar", modifique o texto e clique em "Salvar"
3. **Excluir uma tarefa**: Clique no botão "Excluir" ao lado da tarefa que deseja remover
4. **Cancelar edição**: Durante a edição, clique em "Cancelar" para descartar as alterações


## 📝 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados os seguintes conceitos:

- **Componentização**: Divisão da aplicação em componentes reutilizáveis
- **Props e State**: Passagem de dados e gerenciamento de estado
- **Context API**: Compartilhamento de estado entre componentes
- **Hooks**: useState, useEffect, useContext
- **React Router**: Navegação entre páginas
- **Formulários**: Manipulação de inputs e validações
- **LocalStorage**: Persistência de dados no navegador
- **CSS Modular**: Organização e escopo de estilos

## 🐛 Possíveis Melhorias Futuras

- [ ] Adicionar funcionalidade de marcar tarefa como concluída
- [ ] Implementar filtros (todas, ativas, concluídas)
- [ ] Adicionar data de criação e prioridade
- [ ] Implementar busca de tarefas
- [ ] Adicionar animações nas transições
- [ ] Criar temas claro/escuro
- [ ] Implementar backend para sincronização

## 📄 Licença

Este projeto foi desenvolvido como parte do curso DevStart e está disponível para fins educacionais.

---

⭐ Desenvolvido como projeto de conclusão do curso **DevStart** 🚀
```
# aplicacao-de-tarefas
