const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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
              }
        ]
    }

}