FROM node:12.18.2

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app

RUN npm install
RUN npm install -g @angular/cli@10

COPY ./apps/chat /app

EXPOSE 4200

CMD npm run start:chat