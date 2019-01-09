const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: "./app/assets/scripts/main.js"
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                loader: 'html-srcsets-loader',
                options: {
                    attrs: ['img:src', ':srcset'],
                    minimize: false,
                    caseSensitive: true,
                    removeAttributeQuotes:false
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)/i,
                loader: "file-loader",
                options: {
                    publicPath: "./images",
                    outputPath: "./images"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/index.html",
            filename: "./index.html"
        }),

        new HtmlWebpackPlugin({
            template: "./app/diensten.html",
            filename: "./diensten.html"
        }),

        new HtmlWebpackPlugin({
            template: "./app/over-ons.html",
            filename: "./over-ons.html"
        }),

        new HtmlWebpackPlugin({
            template: "./app/contact.html",
            filename: "./contact.html"
        }),

        new HtmlWebpackPlugin({
            template: "./app/vacatures.html",
            filename: "./vacatures.html"
        }),

        new FaviconWebpackPlugin({
            logo: "./app/assets/images/favicon.png",
            prefix: 'icons-[hash]/',
            emitStats: false,
            statsFilename: 'iconstats-[hash].json',
            persistentCache: true,
            inject: true,
            background: '#fff',
            title: 'Webpack App',
 
            icons: {
              android: true,
              appleIcon: true,
              appleStartup: true,
              coast: false,
              favicons: true,
              firefox: true,
              opengraph: false,
              twitter: true,
              yandex: false,
              windows: false
            }
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}