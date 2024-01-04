# Use a specific version of Node.js known to work well with your dependencies
FROM node:20-slim AS build

# Set the working directory in the Docker container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --loglevel verbose

# Copy the rest of the application's source code
COPY . .

# Build the application using Vite
RUN npm install esbuild@0.19.11 --loglevel verbose
RUN npm run build --loglevel verbose


# Multi-stage build: Use a fresh image for the runtime
FROM node:20-slim

WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build /app .

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD [ "npm", "run", "start" ]
