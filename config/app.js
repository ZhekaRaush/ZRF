module.exports = {
    htmlmin: {
        collapseWhitespace: true
    },

    webpack: {
        mode: "production",
        output: {
            filename: 'script.js'
        }
    },

    imagemin: {
        verbose: true
    }
}