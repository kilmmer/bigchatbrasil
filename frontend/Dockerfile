# Use a imagem oficial do Node.js como base
FROM node:18.17.1

# Defina o diretório de trabalho no contêiner
WORKDIR /app/frontend

# Copie o package.json e o yarn.lock para o contêiner
COPY package*.json ./

RUN chmod 777 /app/frontend

# Instale as dependências
RUN npm install

# Copie o código-fonte para o contêiner
COPY . .

# Compile o frontend (substitua este comando pelo comando real usado para compilar o frontend)
RUN npm run build

RUN touch /app/frontend/.next/

# Exponha a porta onde o aplicativo estará em execução
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
