FROM node:17-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:17-alpine
ENV NODE_ENV production
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]