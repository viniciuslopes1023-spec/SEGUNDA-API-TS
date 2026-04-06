"# API-Alons-TS

## Descrição

Esta é uma API REST simples desenvolvida em TypeScript utilizando o framework Express.js. A API permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) em usuários. Os dados são armazenados temporariamente em memória, simulando um banco de dados, o que significa que os dados são perdidos quando o servidor é reiniciado.

A API foi criada como um projeto de aprendizado para demonstrar conceitos básicos de desenvolvimento de APIs com TypeScript, incluindo roteamento, controladores, serviços e validação básica de dados.

## Funcionalidades

- **Criar usuário**: Adicionar um novo usuário com nome e email.
- **Listar usuários**: Obter uma lista de todos os usuários cadastrados.
- **Atualizar usuário**: Modificar os dados de um usuário existente (nome e/ou email).
- **Deletar usuário**: Remover um usuário pelo ID.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express.js**: Framework web para Node.js, usado para criar o servidor e as rotas da API.
- **ts-node-dev**: Ferramenta para desenvolvimento com TypeScript, permitindo recarregamento automático durante o desenvolvimento.

## Estrutura do Projeto

```
src/
├── server.ts              # Arquivo principal do servidor
├── controller/
│   └── userControler.ts   # Controladores para as operações de usuário
├── database/
│   └── db.ts              # Simulação de banco de dados em memória
├── routes/
│   └── userRoutes.ts      # Definição das rotas da API
└── services/
    └── userService.ts     # Lógica de negócio para usuários
```

## Instalação e Execução

### Pré-requisitos

- Node.js instalado (versão 14 ou superior).
- npm ou yarn para gerenciamento de pacotes.

### Passos para Instalação

1. Clone o repositório ou baixe os arquivos do projeto.

2. Navegue até o diretório do projeto:
   ```
   cd API-Alons-TS
   ```

3. Instale as dependências:
   ```
   npm install
   ```

### Executando o Projeto

Para executar o servidor em modo de desenvolvimento (com recarregamento automático):
```
npm run dev
```

O servidor será iniciado na porta 3000. Você verá a mensagem:
```
Servidor rodando em http://localhost:3000
```

## Endpoints da API

A API possui os seguintes endpoints, todos relacionados a usuários:

### 1. Criar Usuário
- **Método**: POST
- **URL**: `/`
- **Corpo da Requisição** (JSON):
  ```json
  {
    "name": "Nome do Usuário",
    "email": "email@exemplo.com"
  }
  ```
- **Resposta de Sucesso** (201):
  ```json
  {
    "message": "Usuário criado com sucesso",
    "user": {
      "id": 1,
      "name": "Nome do Usuário",
      "email": "email@exemplo.com"
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
- **URL**: `/`
- **Resposta de Sucesso** (200):
  ```json
  {
    "users": [
      {
        "id": 1,
        "name": "Nome do Usuário",
        "email": "email@exemplo.com"
      }
    ]
  }
  ```

### 3. Atualizar Usuário
- **Método**: PUT
- **URL**: `/:id` (onde `:id` é o ID do usuário)
- **Corpo da Requisição** (JSON, campos opcionais):
  ```json
  {
    "name": "Novo Nome",
    "email": "novoemail@exemplo.com"
  }
  ```
- **Resposta de Sucesso** (200):
  ```json
  {
    "message": "Usuário atualizado com sucesso",
    "user": {
      "id": 1,
      "name": "Novo Nome",
      "email": "novoemail@exemplo.com"
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
- **URL**: `/:id` (onde `:id` é o ID do usuário)
- **Resposta de Sucesso** (200):
  ```json
  {
    "message": "Usuário deletado com sucesso"
  }
  ```
- **Resposta de Erro** (404):
  ```json
  {
    "message": "Usuário não encontrado"
  }
  ```

## Validações

- **Criação de usuário**: Os campos `name` e `email` são obrigatórios.
- **Atualização e deleção**: O ID do usuário deve existir no sistema.

## Limitações

- Os dados são armazenados apenas em memória, o que significa que são perdidos ao reiniciar o servidor.
- Não há autenticação ou autorização implementada.
- Não há validação avançada de email ou outros campos.
- IDs são gerados automaticamente e sequencialmente.

## Como Testar a API

Você pode testar a API usando ferramentas como Postman, Insomnia ou curl.

Exemplo com curl para criar um usuário:
```
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva", "email": "joao@exemplo.com"}'
```

Exemplo para listar usuários:
```
curl http://localhost:3000/
```

## Contribuição

Este é um projeto de aprendizado. Sinta-se à vontade para fazer fork e contribuir com melhorias, como:
- Adicionar um banco de dados real (ex: MongoDB, PostgreSQL).
- Implementar validações mais robustas.
- Adicionar autenticação JWT.
- Criar testes unitários e de integração.

## Licença

Este projeto está sob a licença ISC." 
