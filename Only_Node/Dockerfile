FROM node:alpine3.20

WORKDIR /usr/nodeapp

COPY ./package.json ./

RUN npm install

COPY ./ ./


CMD ["npm","start"]
