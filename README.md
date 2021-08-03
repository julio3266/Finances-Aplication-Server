# Welcome

# Rodando o projeto

Primeiramente você deve ter a imagem do mongo instalada e irá rodar o seguinte comando

    docker run --name mongo -p 27017:27017  mongo
  
Depois cheque se o mongo está startado executando o seguinte código.

    docker ps 
  
Se não estiver rodando start executando o seguinte comando

    docker start mongo
  
Depois disto instale as dependencias necessárias executando o seguinte comando
    yarn
    // ou npm install 
  
Depois rode o seguinte comando para startar o server

    yarn dev:server
    // or npm run dev:server
  
# Skills 🛤 

- NodeJS
- Typescript
- GraphQl
- Apollo Server
- Typegraphql
