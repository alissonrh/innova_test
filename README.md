# Aplicação Lista de Contatos

Para começar a usar a aplicação, você precisará fazer o download dos arquivos e instalar as dependências necessárias. Para isso, siga os seguintes passos:

1. Faça o download dos arquivos da aplicação.
2. Entre na pasta "app/server" e execute o comando `npm install` para instalar as dependências do servidor.
3. Entre na pasta "app/client" e execute o comando `npm install` novamente para instalar as dependências do cliente.
4. Conecte o banco de dados MySQL usando as configurações presentes no arquivo ".env" na pasta "app/server".
5. Na pasta "app", execute o comando `docker-compose up --build` para construir e iniciar os containers do Docker.

Ao seguir esses passos, sua aplicação estará pronta para uso. Caso precise resetar o banco de dados, basta executar o comando `npm run db:reset` na pasta "app/server".

