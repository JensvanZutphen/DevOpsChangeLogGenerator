# Use a specific version of Node.js known to work well with your dependencies
FROM node:16-slim AS build

# Set the working directory in the Docker container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's source code
COPY . .

# Build the application using Vite
RUN npm run build

# Multi-stage build: Use a fresh image for the runtime
FROM node:16-slim

WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build /app .

# Expose the port your app runs on
EXPOSE 5000

# Start the application
CMD [ "npm", "run", "start" ]
