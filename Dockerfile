#FROM node:18-alpine as base

#WORKDIR /app

#COPY ./package*.json ./

#RUN npm install

#COPY . .
#ENV PORT=8181
#EXPOSE 5173 

#CMD ["npm", "run", "dev"]


FROM node:18-alpine as base

WORKDIR /app


COPY package*.json ./

# Install application dependencies
RUN npm install

COPY . .

FROM cypress/base:16


RUN apk --no-cache add xvfb


WORKDIR /app

# Copy only the necessary files from the base stage
COPY --from=base /app /app

# Run application
CMD ["npm", "run", "dev"]
