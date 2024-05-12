# Node.jsのバージョンを指定
FROM node:20.9.0

# アプリケーションの作業ディレクトリを指定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# TypeScriptをビルド
RUN npm run build

# 開発サーバーを起動
CMD ["npm", "run", "dev"]

# 開発サーバーがリッスンするポートを指定
EXPOSE 3000

