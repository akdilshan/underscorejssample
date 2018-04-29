const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "App"),
    devtool: "source-map",
    entry: {
		chat: "./requireConfig.js",
		signUp:"./signupModule.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options:{
                        "presets": ["env"]
                    }
                }]
            },
            {
                test: /\.jsx$/,
                use: [{
                    loader: "babel-loader",
                    options:{
                        "presets": ["env", "react"]
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: "sass-loader"
                    }]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new CleanWebpackPlugin(['dist'])
    ]
}