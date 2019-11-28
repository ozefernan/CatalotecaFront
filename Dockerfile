FROM node:8.16.2-stretch-slim

COPY /src /app
COPY package.json yarn.lock /app/
WORKDIR /app

RUN yarn
RUN yarn cache clean

