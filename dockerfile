# dockerfile

# Etapa 1: Instalar dependencias
FROM node:20-alpine AS deps
WORKDIR /app

COPY app/package*.json ./
RUN npm ci

# Etapa 2: Construir la aplicación (build de producción)
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY app/ .

RUN npm run build

# Etapa 3: Imagen final, solo lo necesario para correr
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]