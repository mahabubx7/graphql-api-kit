# Use the official Node.js LTS base image
FROM node:20.6.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json to the working directory
COPY package.json ./

# Copy pnpm-lock.yaml to the working directory
COPY pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm@8.14.0

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Copy the environment variables file
COPY .env ./

# Build TypeScript files
RUN pnpm run build

# Expose the port
ENV PORT 4000
EXPOSE 4000

# Start the Apollo Server with dotenv
CMD ["pnpm", "run", "start:prod"]
