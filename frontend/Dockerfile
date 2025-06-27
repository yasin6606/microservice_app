FROM node:22.14-slim AS build

WORKDIR /home/node

COPY package.json .
COPY .env .
COPY src src
COPY public public
COPY node_modules node_modules

RUN #npm install
RUN npm run build

FROM nginx:1.27.1-alpine

WORKDIR /home

COPY --from=build /home/node/build ./
COPY default.conf /etc/nginx/conf.d

EXPOSE 3000
