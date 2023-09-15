FROM node:18.17.1

WORKDIR /home/node/app/bigchatbrasil

RUN chmod -R 755 /home/node/app/bigchatbrasil

ENV PORT=80

RUN npm install

EXPOSE 80

COPY . .

RUN npm test

RUN npm run build

CMD [ "npm", "start:prod" ]