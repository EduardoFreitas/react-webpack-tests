const webpack = require('webpack')
// Abaixo Import de CSS
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.js',
    output:{
        path:__dirname+ '/public',
        filename: './bundle.js'
    },
    devServer:{
        port:8080,
        contentBase: './public'
    },
    // Referente ao import de CSS
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
    // Colocado para começar a funcionar o import do exercicio 3
    // Classe Pessoa
    // instalado : npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es2015@6.22.0
    module:{
        loaders:[{
            test: /.js?$/,
            loader:'babel-loader',
            exclude: /node_modules/,
            query:{
                // Colocado preset do react na aula 6
                // Começando o react
                // npm i --save-dev babel-preset-react@6.22.0
                presets:['es2015','react'],
                // Colocado para fazer o spread ...{object} , faz clone de objeto
                // Exercicio 4
                // instalado: npm i --save-dev babel-plugin-transform-object-rest-spread@6.22.0
                plugins:['transform-object-rest-spread']
            }
        },
        // Import de CSS abaixo
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader")
        }]
    }
}