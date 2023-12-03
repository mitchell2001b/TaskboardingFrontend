#FROM node:18-alpine as base

FROM cypress/browsers:node18.4.0 as base

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .
#ENV PORT=8181
#EXPOSE 5173 

CMD ["npm", "run", "dev"]

#test


