#FROM node:18-alpine as base

FROM cypress/base:18.6.0

WORKDIR /app

# Install bash
RUN apk add --no-cache bash

COPY ./package*.json ./

RUN npm install

COPY . .
#ENV PORT=8181
#EXPOSE 5173 

CMD ["npm", "run", "dev"]

#test


