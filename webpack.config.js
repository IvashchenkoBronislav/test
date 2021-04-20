const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/index.js'),
        
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
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
            // {
            //     test:/.(s*)css$/,
            //     use: [
            //         miniCss.loader,
            //         'css-loader?url=false',
            //         'sass-loader',
            //     ]
            // },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader',miniCss.loader,'css-loader?url=false','sass-loader',],
            }, 
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
                
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                    name: '[name].[ext]',
                    outputPath: 'src/font/'
                    }
                }
                ]
            }
        ]
    }
}