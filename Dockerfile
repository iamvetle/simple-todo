# Use a lightweight Node.js image
FROM node:20.11-alpine AS builder

# Set working directory
WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

RUN npm run generate

# Use a smaller image for production
FROM node:20.11-alpine

# Set working directory
WORKDIR /app

# Copy the production-ready build from builder stage
RUN mkdir .output
COPY --from=builder /app/.output ./.output

# Expose port (default Nuxt dev server port)
EXPOSE 3000

# Start the development server
CMD [ "npm", "run", "preview" ]
