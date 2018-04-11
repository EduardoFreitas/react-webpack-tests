const webpack = require('webpack')

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
    // Colocado para começar a funcionar o import do exercicio 3
    // Classe Pessoa
    // instalado : npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es2015@6.22.0
    module:{
        loaders:[{
            test: /.js?$/,
            loader:'babel-loader',
            exclude: /node_modules/,
            query:{
                presets:['es2015'],
                // Colocado para fazer o spread ...{object} , faz clone de objeto
                // Exercicio 4
                // instalado: npm i --save-dev babel-plugin-transform-object-rest-spread@6.22.0
                plugins:['transform-object-rest-spread']
            }
        }]
    }
}