# Node.jsのバージョンを指定
FROM node:20.9.0

# アプリケーションの作業ディレクトリを指定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install
