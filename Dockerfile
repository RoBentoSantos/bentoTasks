# Instala o node e roda em cima da Distro do Linux Alpine, usada muito por ser leve.
FROM node:20-alpine

# Diz que a nossa pasta que será usada dentro do container sera a app, isso para evitar que durante a execução tenha alguns arquivos soltos na raíz.
WORKDIR /app

# Copia o package.json para o container e o package-lock-json caso ele exista.
COPY package*.json ./

# Roda o npm install apos o package.json estar no container
RUN npm install

# Copia todo o projeto da pasta para o container
COPY . .

# Avisa que a porta 3000 sera usada pela aplicação
EXPOSE 3000

# Diz os comando que serao rodados quando o container ser iniciado
CMD [ "node", "src/index.js" ]
