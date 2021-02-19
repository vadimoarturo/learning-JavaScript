const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = (ext) => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`


module.exports = {
    entry: './src/index.js',
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }
        
    ),
    new MiniCssExtractPlugin({
        filename: filename('css')
    })
    ],
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 4200
  },
    module: {
        rules: [
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
              }, 
              {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
              },
        ]
    },

}