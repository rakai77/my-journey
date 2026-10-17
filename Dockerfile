# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definitions
COPY package.json package-lock.json ./

# Install dependencies cleanly
RUN npm ci

# Copy source code and configuration
COPY . .

# Run test suite & build production bundle
RUN npm run test
RUN npm run build

# Production runtime stage
FROM nginx:alpine AS runner

# Copy customized Nginx server configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
