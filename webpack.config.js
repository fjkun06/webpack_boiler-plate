const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname,  'dist/assets'),
        filename: "bundle.js"
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                    }
                }
        },
        
        {
            test: /\.css$/,
            use: ["style-loader","css-loader"]
        }
    ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            template: "./dist/index.html",
            inject : "body"
        })
    ],

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        port: 3000
    }
};

