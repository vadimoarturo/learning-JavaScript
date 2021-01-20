const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');



module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }
        
    ),
    new MiniCssExtractPlugin({
        filename: 'style.css'
    })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
              }, 
              {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
              },
              {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
              },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200
    },
    optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin({
            test: /\.css$/,
          }),
          new TerserPlugin({
            test: /\.js(\?.*)?$/i,  
          }),
        ],
      },
}