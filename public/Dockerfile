FROM node:lts-alpine

# nodemodules cache
WORKDIR /usr/cache
COPY package*.json ./
RUN npm install --no-audit

# RUN apk add --no-cache rsync

WORKDIR /usr/app
COPY . .