const uglify = require('rollup-plugin-uglify');
//生产环境需要使用的插件
const prodPlugins = [
    uglify()
]

const target = {
    file: 'dist/nv.min.js',
    name:"Nv",
    format: 'umd',
    sourcemap:true
}

module.exports = {
    plugins : prodPlugins,
    target  : target
}