# Use a imagem base do Node.js
FROM node:20.15.0

# Defina o diretório de trabalho no contêiner
WORKDIR /front

# Copie o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação para o contêiner
COPY . .

# Construa a aplicação
RUN npm run build

# Expõe a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
