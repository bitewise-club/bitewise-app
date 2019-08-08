const withCSS = require('@zeit/next-css');
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = withCSS({
    onDemandEntries:{
        maxInactiveAge: 25*1000,
        pagesBufferLength: 2
    },
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

        return config;
    }
});