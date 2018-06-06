'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // The entry file. All your app roots from here.
    mode: "production",
    entry: {
        //common:
        vendor: [
            // Polyfills go here too, like babel-polyfill or whatwg-fetch
            'babel-polyfill',
            'react',
            'react-dom',
            'react-router-dom',
            'reactstrap',
            //'jquery',
            'popper.js',
            //'bootstrap',
            'immutable',
            'axios',
            './src/styles/vendor.scss'
        ],
        app: [

            path.resolve(__dirname, 'src/index.jsx')
        ]
    },
    // Where you want the output to go
    output: {
        path: path.resolve(__dirname, '../site/templates'),
        filename: 'scripts/[name].min.js',
        publicPath: '/kiwigw/'
    },
    plugins: [
        //new CleanWebpackPlugin(['assets']),
        // plugin for passing in data to the js, like what NODE_ENV we are in.
        new UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            //$: 'jquery',
            //'window.$': 'jquery',
            //jQuery: 'jquery',
            //'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        // extracts the css from the js files and puts them on a separate .css file. this is for
        // performance and is used in prod environments. Styles load faster on their own .css
        // file as they dont have to wait for the JS to load.
        new MiniCssExtractPlugin({
            filename: "styles/[name].min.css",
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
            }
        }
    },
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
                include: path.resolve(__dirname, "src"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env'],
                        plugins: ["transform-react-jsx", "react-hot-loader/babel"]
                    }
                }
            },{
                test: /\.(scss|css)$/,
                // we extract the styles into their own .css file instead of having
                // them inside the js.
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
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
                    }
                ]
                // use style-loader in development
                //fallback: 'style-loader'
            },{
				test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
				use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]',
                        publicPath: '../'
                    }
                }
			}
        ]
    }
};
