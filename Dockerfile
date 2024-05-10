# Node.jsのバージョンを指定
FROM node:20.9.0

# アプリケーションディレクトリを作成
WORKDIR /app

# パッケージ.jsonとパッケージロックファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# 開発用サーバーを起動するコマンド
CMD ["npm", "run", "dev"]

# 開発サーバーがリッスンするポートを指定
EXPOSE 3000

