# Use a lightweight Node.js image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml (if using)
COPY package*.json ./

# Install dependencies using pnpm within the container
RUN ["pnpm", "install"]

# Build the Nuxt app (assuming public folder is the output)
COPY . .
RUN ["npx", "nuxi", "generate"]

# Use a smaller image for production
FROM node:18-slim AS runner

# Set working directory
WORKDIR /app

# Copy the production-ready build from builder stage
COPY --from=builder /app/public .

# Expose port (default Nuxt dev server port)
EXPOSE 3000

# Start the development server
CMD [ "npx", "serve", ".output/public" ]
