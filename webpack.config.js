// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

var path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')

module.exports = {

    plugins: [
        new MiniCssExtractPlugin({ filename: "webpack.css" }),
        //new BundleAnalyzerPlugin.BundleAnalyzerPlugin()
    ],

    entry: path.join(__dirname, "index.tsx"),
    output: {
        path: path.join(__dirname, "dist"), filename: 'webpack.js',
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            path.join(__dirname, "node_modules")
        ]
    },

    devtool: "source-map",

    devServer: {
        port: 9000,
        compress: false,
        allowedHosts: 'auto',
        static: {
            directory: "static",
        },
        https: true
    },
}