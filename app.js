var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var product = require('./routes/product');
var users = require('./routes/users');
var index=require('./routes/index');
//引入session
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// 创建express项目
var app = express();

app.use(session({
    secret: 'cyshop', // 用来注册session id 到cookie中，相当与一个密钥
    name: 'user', // cookie的name
/*    cookie: {maxAge: 2592000000},*/
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
    url: 'mongodb://localhost:27017/cyshop',
    autoRemove: 'native'
    })
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var classify = [
    {'id': 1, 'name': '女人','fs':'../images/g-1.jpg'},
    {'id': 2, 'name': '男人','fs':'../images/g-10.jpg'},
    {'id': 3, 'name': '饰品','fs':'../images/g-11.jpg'},
    {'id': 4, 'name': '箱包','fs':'../images/g-12.jpg'},
    {'id': 5, 'name': '配件','fs':'../images/g-13.jpg'},
    {'id': 6, 'name': '生活家居','fs':'../images/g-14.jpg'},
    {'id': 7, 'name': '好吃的','fs':'../images/g-15.jpg'},
    {'id': 8, 'name': '春季上新',fs:'../images/g-16.jpg'}
];
app.get('/classify', function (req, res) {
    res.status(200).json(classify);
});
app.get('/api/gettitle', function (req, res) {
    var title = "首页的标题";
    res.status(200).json({title: title});
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

app.use('/',index);
app.use('/product',product);
app.use('/users',users);

//处理404错误
app.use(function (req, res) {
    res.redirect("/");
});

app.listen(3000,function (err) {
    if (err)
        throw err;
    console.log('my server is started at port: %d', 3000);
});