/**
 * Created by xiajing on 2018/3/9.
 */
//https://www.jianshu.com/p/eadea5d27f0c
const env = process.env.NODE_ENV;
module.exports = require(`./config/webpack.config.${env}.js`)