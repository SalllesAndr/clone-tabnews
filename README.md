# clone-tabnews

Implementation of the [TabNews](https://www.tabnews.com.br) for the course [Curso.dev](https://curso.dev)

O **TabNews** é um site voltado para a comunidade de tecnologia, que permite debates e troca de conhecimentos através de publicações e comentários criados pelos próprios usuários.

Este repositório contém o código-fonte do site e da API do **TabNews Clone**.

---

## Índice

- [Rodar o Projeto](#rodar-o-projeto)
- [Cadastro e Login de Usuários](#cadastro-e-login-de-usuários)
  - [Criar um Usuário Manualmente](#criar-um-usuário-manualmente)
  - [Utilizar Usuários Pré-Cadastrados](#utilizar-usuários-pré-cadastrados)
- [Rodar os Testes](#rodar-os-testes)
  - [Executar Todos os Testes](#executar-todos-os-testes)
  - [Executar Testes Específicos](#executar-testes-específicos)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

---

## Instalação e Execução

Rodar o projeto **TabNews Clone** localmente é simples. Siga os passos abaixo:

### Dependências Globais

Certifique-se de ter instalado:

- **Node.js** (versão LTS v20 ou superior)
- **Docker Engine** (v17.12.0 ou superior) com **Docker Compose** (v1.29.2 ou superior)

### Dependências Locais

Com o repositório clonado e as dependências globais instaladas, siga os passos:

1. Instale as dependências locais do projeto:

```bash
npm install
```

## TabNews Clone

## Rodar o Projeto

Execute o comando abaixo para iniciar o projeto:

```bash
npm run dev
```

Isso irá iniciar automaticamente os seguintes serviços:

- Banco de Dados (incluindo as migrations)
- Servidor de E-mail
- Serviço Web (Frontend e API) nos seguintes endereços:
  - Frontend: [http://localhost:3000/](http://localhost:3000/)
  - API: [http://localhost:3000/api/v1/status](http://localhost:3000/api/v1/status)

**Observações:**

- Para encerrar os serviços, pressione `CTRL+C`.
- Para verificar as configurações dos serviços (como Banco de Dados ou Servidor de E-mail), consulte o arquivo `.env` na raiz do projeto.

## Cadastro e Login de Usuários

### Criar um Usuário Manualmente

1. Acesse [http://localhost:3000/cadastro](http://localhost:3000/cadastro).
2. Preencha os dados com qualquer e-mail válido (mesmo que fictício, como <teste@teste.com>).
3. O servidor enviará um e-mail para o servidor local, acessível em [http://localhost:1080/](http://localhost:1080/).
4. Abra o e-mail de ativação e clique no link para ativar a conta.
5. Faça login com as credenciais em [http://localhost:3000/login](http://localhost:3000/login).

### Utilizar Usuários Pré-Cadastrados

Ao rodar o comando `npm run dev`, dois usuários já ativados serão criados automaticamente:

**Usuário Admin:**

- E-mail: <admin@admin.com>
- Senha: password

**Usuário Padrão:**

- E-mail: <user@user.com>
- Senha: password

## Rodar os Testes

Certifique-se de rodar os testes antes de qualquer alteração no código para garantir que tudo está funcionando conforme esperado.

### Executar Todos os Testes

Rode o comando abaixo para executar os testes:

```bash
npm test
```

### Executar Testes Específicos

Você também pode rodar testes específicos, filtrando pelo caminho do arquivo. Exemplos:

```bash
npm test -- tests/arquivoEspecifico.test.js
```

## Como Contribuir

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Abra um Pull Request explicando as mudanças.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
