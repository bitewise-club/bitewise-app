const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2
    },
});