require('dotenv').config()
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone", // Yoko：standaloneモードを有効化
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        /*　下記のエンドポイントをコメントアウト
        API_ENDPOINT: process.env.API_ENDPOINT,
        下記のエンドポイントを追加 */
        NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
      },
}

module.exports = nextConfig
