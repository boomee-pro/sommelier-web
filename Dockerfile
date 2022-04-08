FROM node:alpine

RUN id -u node
WORKDIR /app

COPY package*.json .
RUN npm i

COPY . /app/
RUN npm run build

EXPOSE 3000
USER node
ENTRYPOINT ["npm", "start"]