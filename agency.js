/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-23 19:25:39
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-24 17:15:29
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */
var express = require('express');
var request = require('request');
var app = express();

app.use(express.static('./public'))

app.use('/', function(req, res) {
    var url = 'http://39.100.118.220/' + req.url;
    req.pipe(request(url)).pipe(res);
    process.env.PORT = process.env.PORT || 80;
});
app.listen(process.env.PORT || 80, () => {
    console.log("开始监听" + "......");
});