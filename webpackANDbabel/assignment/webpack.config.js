const path = require("path");

module.exports = {
    entry : "/src/index.js",
    output:{
            path:path.join(__dirname,"build"),//folder name
                filename:"bundle.js"
    },
    mode:"production",
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                }
            }
        ]
    }
};