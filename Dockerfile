FROM node:18-alpine

WORKDIR /app

# Copy package files trước để tận dụng Docker cache
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Start app
CMD ["node", "app.js"]
