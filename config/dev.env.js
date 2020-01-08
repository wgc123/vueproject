/*jshint esversion: 6 */

(function() {　　
    "use strict";　　 // some code here
})();
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
})