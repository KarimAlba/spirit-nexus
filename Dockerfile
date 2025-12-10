FROM node:22-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm@10.2

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
