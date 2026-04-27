FROM node:20-slim
WORKDIR /app
COPY .npmrc package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "dev.mjs"]
