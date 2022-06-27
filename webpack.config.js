const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index:              './src/index.js',
        menu:               './src/menu.js',
        auth:               './src/auth.js',
        signInCustomer:     './src/signInCustomer.js',
        signInEmployee:     './src/signInEmployee.js',
        createAccount:      './src/createAccount.js',
        employeeDashBoard:  './src/employeeDashBoard.js',
        signIn:             './src/signIn.js', 
    }, 
    
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true
};

