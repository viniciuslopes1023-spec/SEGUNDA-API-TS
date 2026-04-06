"# API de Gerenciamento de Usuários em TypeScript

## Descrição

Esta é uma API RESTful simples para gerenciamento de usuários, desenvolvida em TypeScript com Express.js. A API permite criar, listar, atualizar e deletar usuários, utilizando um banco de dados simulado em memória.

## Funcionalidades

- Criar novos usuários
- Listar todos os usuários
- Atualizar informações de usuários existentes
- Deletar usuários
- Validação básica de entrada (nome e email obrigatórios)

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **TypeScript**: Superset do JavaScript com tipagem estática
- **Express.js**: Framework web para Node.js
- **Banco de Dados Simulado**: Array em memória para armazenamento temporário

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd API-Alons-TS
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Compile o TypeScript (opcional, pois o ts-node-dev faz isso automaticamente):
   ```bash
   npx tsc
   ```

## Como Executar

Para executar a API em modo de desenvolvimento:
```bash
npx ts-node-dev src/server.ts
```

A API estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

```
src/
├── controller/
│   └── userControler.ts    # Controladores das rotas
├── database/
│   └── db.ts               # Simulação do banco de dados
├── routes/
│   └── userRoutes.ts       # Definição das rotas
├── services/
│   └── userService.ts      # Lógica de negócio
└── server.ts               # Arquivo principal do servidor
```

## Endpoints da API

### Base URL
```
http://localhost:3000
```

### 1. Criar Usuário
- **Método**: POST
- **Endpoint**: `/`
- **Corpo da Requisição**:
  ```json
  {
    "name": "João Silva",
    "email": "joao@example.com"
  }
  ```
- **Resposta de Sucesso** (201):
  ```json
  {
    "message": "Usuário criado com sucesso",
    "user": {
      "id": 1,
      "name": "João Silva",
      "email": "joao@example.com"
    }
  }
  ```
- **Resposta de Erro** (400):
  ```json
  {
    "error": "Nome e email são campos obrigatórios"
  }
  ```

### 2. Listar Usuários
- **Método**: GET
- **Endpoint**: `/`
- **Resposta de Sucesso** (200):
  ```json
  {
    "users": [
      {
        "id": 1,
        "name": "João Silva",
        "email": "joao@example.com"
      }
    ]
  }
  ```

### 3. Atualizar Usuário
- **Método**: PUT
- **Endpoint**: `/:id`
- **Parâmetros de URL**: `id` (número do ID do usuário)
- **Corpo da Requisição** (campos opcionais):
  ```json
  {
    "name": "João Silva Atualizado",
    "email": "joao.atualizado@example.com"
  }
  ```
- **Resposta de Sucesso** (200):
  ```json
  {
    "message": "Usuário atualizado com sucesso",
    "user": {
      "id": 1,
      "name": "João Silva Atualizado",
      "email": "joao.atualizado@example.com"
    }
  }
  ```
- **Resposta de Erro** (404):
  ```json
  {
    "message": "Usuário não encontrado"
  }
  ```

### 4. Deletar Usuário
- **Método**: DELETE
- **Endpoint**: `/:id`
- **Parâmetros de URL**: `id` (número do ID do usuário)
- **Resposta de Sucesso** (200):
  ```json
  {
    "message": "Usuário deletado com sucesso",
    "user": {
      "id": 1,
      "name": "João Silva",
      "email": "joao@example.com"
    }
  }
  ```
- **Resposta de Erro** (404):
  ```json
  {
    "message": "Usuário não encontrado"
  }
  ```

## Exemplos de Uso

### Criar um usuário
```bash
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"name": "Maria Santos", "email": "maria@example.com"}'
```

### Listar usuários
```bash
curl http://localhost:3000/
```

### Atualizar um usuário
```bash
curl -X PUT http://localhost:3000/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Maria Santos Silva"}'
```

### Deletar um usuário
```bash
curl -X DELETE http://localhost:3000/1
```

## Scripts Disponíveis

- `npm run dev`: Executa a aplicação em modo de desenvolvimento com ts-node-dev
- `npm test`: Executa os testes (atualmente não implementado)

## Considerações

- O banco de dados é simulado em memória, ou seja, os dados são perdidos ao reiniciar o servidor.
- Não há autenticação implementada.
- Validação básica de entrada está presente, mas pode ser expandida.
- Para produção, considere usar um banco de dados real como PostgreSQL ou MongoDB.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença ISC." 
