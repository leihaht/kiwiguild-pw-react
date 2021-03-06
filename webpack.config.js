'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            'babel-polyfill',
            './src/styles/vendor.scss',
            'immutable',
            'axios',
            'reactstrap',
            //'jquery',
            'popper.js',
            //'bootstrap'
            path.resolve(__dirname, 'src/index.jsx')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'pub'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    plugins: [
        //new CleanWebpackPlugin(['assets']),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.ProvidePlugin({
            //$: 'jquery',
            //'window.$': 'jquery',
            //jQuery: 'jquery',
            //'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        // some jQuery plugin tried to load its own jQuery not jQuery in the webpack.
        // alias is here to force them to use jQuery in the webpack
        alias: {
            //'jquery': require.resolve('jquery')
			'font-awesome': path.resolve(__dirname, "node_modules/font-awesome/css/font-awesome.min.css"),
            'flarum-style': path.resolve(__dirname, "src/styles/flarum.scss"),
            'helpers' : path.resolve(__dirname, "src/lib/helpers"),
            'modules' : path.resolve(__dirname, "src/modules")
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env'],
                        plugins: [
                            "transform-react-jsx",
                            "react-hot-loader/babel",
                            ["transform-object-rest-spread", { "useBuiltIns": true }]
                        ]
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                },{
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require ('precss'),
                                require ('autoprefixer')
                            ];
                        }
                    }
                },{
                    loader: 'sass-loader'
                }]
            },
            {
				test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
				use: 'url-loader'
			}
        ]
    }
};
