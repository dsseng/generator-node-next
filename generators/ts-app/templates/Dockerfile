FROM node:latest

COPY . /app
WORKDIR /app

RUN npm i
RUN npm run build

ENTRYPOINT [ "node", "build/main" ]
