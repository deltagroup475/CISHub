const path = require('path');

module.exports = {
    entry: './script.cjs', // Entry point of your application (replace with your .cjs file)
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output filename
    },
    mode: 'production', // Set mode to production
    resolve: {
        extensions: ['.js', '.cjs'] // Allow resolving .cjs files
    },
    module: {
        rules: [
            {
                test: /\.cjs$/,
                use:{
                    loader: 'babel-loader', // Use babel-loader to transpile .cjs files
                    options: {
                        presets: ['@babel/preset-env'] // Use @babel/preset-env for ES6+ features
                    }
                }
            }
        ]
    }
};
