var express = require('express');
var fortune = require('./lib/fortune.js');
var app = express();
app.use(express.static('public')); //静态文件

app.set('port', process.env.PORT || 3000); //设置端口
app.set('address','localhost');

//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
})


//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})



//  /list_user 页面 GET 请求
app.get('/demo', function (req, res) {
    console.log("/demo GET 请求");
    res.send('demo get');
})

var server = app.listen(app.get('port'),function(){
    console.log( 'Express started on http://'+app.get('address') +':'+app.get('port') + '; press Ctrl-C to terminate.' );
});