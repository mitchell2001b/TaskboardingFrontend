#FROM node:18-alpine as base

#WORKDIR /app

#COPY ./package*.json ./

#RUN npm install

#COPY . .
#ENV PORT=8181
#EXPOSE 5173 

#CMD ["npm", "run", "dev"]


# Use the Cypress base image
FROM cypress/base:16 as cypress

# Install additional dependencies needed for your Cypress tests
RUN apk --no-cache add xvfb

# Set the working directory for Cypress tests
WORKDIR /app

# Copy the Cypress test code
COPY cypress cypress

# Run the Cypress tests
CMD ["npm", "run", "cypress:open"]

# Use a multi-stage build for smaller image size
FROM node:18-alpine as base

WORKDIR /app

# Copy package*.json separately to leverage Docker cache
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy Cypress test code from the Cypress image
COPY --from=cypress /app/cypress /app/cypress

# Run your application
CMD ["npm", "run", "dev"]