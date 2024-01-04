# Specify a more precise base image
FROM node:20.13.0-slim as build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --loglevel verbose

# Copy the rest of the app's source code
COPY . .

# Build the application
RUN npm run build

# Multi-stage build: Use a fresh image for the runtime
FROM node:20.13.0-slim

WORKDIR /app

# Copy built node modules and build directories
COPY --from=build /app .

# Your application's default port
EXPOSE 5000

CMD [ "npm", "run", "start" ]
