# Stage 1: Builder (installs dependencies)
FROM node:20.11-alpine AS builder

WORKDIR /app

# Copy package*.json files to builder stage
COPY package*.json ./
# Install dependencies in builder stage
RUN npm install && npm install serve

COPY . ./

RUN npm run generate

# Stage 2: Runner (runs the application)
FROM node:20.11-alpine

WORKDIR /app

# Copy only package*.json and application code
COPY --from=builder /app/.output ./

# Expose the port for the application
EXPOSE 3000

CMD [ "npx", "serve", "public" ]