FROM node:20.9.0

WORKDIR /app

# インストール済みの各パッケージマネージャに対応したインストールコマンドを実行する。
# ロックファイルが見つからない場合はnpmを使用して新規インストールをする。
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Warning: ロックファイルが見つかりません、ロックファイルはgitにcommitしてください。" && npm install; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .

# インストール済みの各パッケージマネージャーに対応したコマンドを実行しサーバを起動する。
CMD \
  if [ -f yarn.lock ]; then yarn dev; \
  elif [ -f package-lock.json ]; then npm run dev; \
  elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
  else npm run dev; \
  fi