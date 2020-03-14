const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.(scss|sass|css)$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",

                }
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: false,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: ['**/*']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundler.css',
            chunkFilename: '[name].bundler.css'
        }),
        new CopyWebpackPlugin([
            { from: 'src/images', to: 'images' },
            { from: 'src/fonts', to: 'fonts' },
        ])
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                exclude: /node_modules/,
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    warnings: false,
                    output: { comments: false }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
});