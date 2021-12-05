const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html'
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/img'),
                to: path.resolve(__dirname, 'dist/img/')
            }]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }

}