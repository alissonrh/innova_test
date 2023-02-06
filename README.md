# Aplicação Lista de Contatos

Para começar a usar a aplicação, você precisará fazer o download dos arquivos e instalar as dependências necessárias. Para isso, siga os seguintes passos:

1. Faça o download dos arquivos da aplicação.
```
git clone git@github.com:alissonrh/innova_test.git
```
No diretório "innova_test" 

2. Entre no diretório "app/server" e execute o comando `npm install` para instalar as dependências do servidor.
3. Entre no diretório "app/client" e execute o comando `npm install` novamente para instalar as dependências do cliente.
4. Conecte o banco de dados MySQL usando as configurações presentes no arquivo **.env** no diretório "app/server".
5. No diretório "app", execute o comando `docker-compose up --build` para construir e iniciar os containers do Docker.
6. Acesse http://localhost:3000

Ao seguir esses passos, a aplicação estará pronta para uso. Caso precise resetar o banco de dados, basta executar o comando `npm run db:reset` no diretório "app/server".

