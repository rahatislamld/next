FROM node:20-alpine AS base

RUN apk add --no-cache libc6-compat
RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

FROM base AS build

WORKDIR /app
COPY . .
# COPY .env.prod .env
COPY --from=dependencies /app/node_modules ./node_modules
ENV NODE_ENV production

ARG NEXT_PUBLIC_API_URI
ENV NEXT_PUBLIC_API_URI=${NEXT_PUBLIC_API_URI}

RUN pnpm build

FROM base AS deploy

ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]