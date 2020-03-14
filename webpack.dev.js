const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const port = process.env.PORT || 4200;
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
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
    }
});