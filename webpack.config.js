const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    plugins: {
        'postcss-preset-env': {
            browsers: 'last 2 versions',
        },
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
        
         
        new miniCss({
			filename: '../dist/css/style.css',
		}),
        new CopyPlugin({
            patterns: [
              { from: path.resolve(__dirname, 'src/font'), to: path.resolve(__dirname,'dist/css') },
            ],
            options: {
              concurrency: 100,
            },
          }),        
    ],

    module: {

        
        rules: [
            {
                test: /\.js$/,  
                exclude: /node_modules/,
                use: ['babel-loader'],
                
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                
            },
            {
                test:/.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader?url=false',
                    'sass-loader',
                ]
            },
            
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                
              },
        ]
    }
}