# TF retroativo

## Descrição
Uma API RESTful completa utilizando NodeJS e um banco de dados PostgreSQL para gerenciar o cadastro de clientes. A API implementando as operações básicas de Create, Read, Update e Delete (CRUD) para a entidade "clientes"

## Tecnologias Utilizadas
- NodeJS 
- ExpressJS
- PostgreSQL
- Sequelize 
- npm 

## Pré-requisitos
- NodeJS instalado
- npm instalado
- PostgreSQL instalado e em execução
- Configuração do banco de dados 

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/vieira-dih/TF-retroativo.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd TF-retroativo
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração do Banco de Dados
Configure as variáveis de ambiente para conexão com o banco de dados PostgreSQL:

- `POSTGRES_DB`: nome do banco de dados
- `POSTGRES_USER`: usuário do banco
- `POSTGRES_PASSWORD`: senha do usuário
- `POSTGRES_HOST`: host do banco (ex: localhost)
- `POSTGRES_PORT`: porta do banco (ex: 5432)

Crie o banco de dados e a tabela `clientes` executando o script SQL disponível em `docker/postgres/init/init.sql` ou manualmente conforme a estrutura:

```sql
CREATE TABLE clientes (
    codigo SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    rg VARCHAR(50),
    cpf VARCHAR(11) UNIQUE,
    telefone VARCHAR(11),
    endereco VARCHAR(255),
    numero VARCHAR(50),
    cidade VARCHAR(100),
    uf CHAR(2),
    cep VARCHAR(8)
);
```

## Como Executar a API
Inicie o servidor NodeJS:

```bash
npm start
```

Por padrão, a API estará rodando em: `http://localhost:3000`

##  Endpoints

### Criação de Cliente 
- **Método:** POST
- **Endpoint:** `/api/clientes`
- **Corpo da Requisição (JSON):**
```json
{
  "nome": "João Silva",
  "data_nascimento": "1980-01-01",
  "rg": "123456789",
  "cpf": "12345678901",
  "telefone": "11999999999",
  "endereco": "Rua A",
  "numero": "123",
  "cidade": "São Paulo",
  "uf": "SP",
  "cep": "01001000"
}
```
- **Respostas:**
  - 201 Created: Retorna o cliente criado com o campo `codigo` gerado.
  - 400 Bad Request: Campos inválidos ou CPF já existente.
  - 500 Internal Server Error: Erro genérico do servidor.

### Leitura de Cliente por Código 
- **Método:** GET
- **Endpoint:** `/api/clientes/:codigo`
- **Respostas:**
  - 200 OK: Retorna o cliente encontrado.
  - 404 Not Found: Cliente não encontrado.
  - 500 Internal Server Error: Erro genérico do servidor.

### Listagem de Clientes 
- **Método:** GET
- **Endpoint:** `/api/clientes`
- **Query Parameters :**
  - `nome`: filtra por nome 
  - `cidade`: filtra por cidade
  - `uf`: filtra por UF 
- **Respostas:**
  - 200 OK: Retorna um array de clientes .
  - 500 Internal Server Error: Erro genérico do servidor.

### Atualização de Cliente 
- **Método:** PUT
- **Endpoint:** `/api/clientes/:codigo`
- **Corpo da Requisição (JSON):** Campos a serem atualizados 
- **Respostas:**
  - 200 OK: Retorna o cliente atualizado.
  - 400 Bad Request: Validação falhou (ex: nome vazio, CPF duplicado).
  - 404 Not Found: Cliente não encontrado.
  - 500 Internal Server Error: Erro genérico do servidor.

### Exclusão de Cliente 
- **Método:** DELETE
- **Endpoint:** `/api/clientes/:codigo`
- **Respostas:**
  - 204 No Content: Exclusão bem-sucedida.
  - 404 Not Found: Cliente não encontrado.
  - 500 Internal Server Error: Erro genérico do servidor.

## Como Utilizar a API
Utilize ferramentas como Postman, Insomnia ou curl para interagir com os endpoints da API conforme a documentação acima.


