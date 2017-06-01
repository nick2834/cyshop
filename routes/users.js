var express= require('express');// 1. 引入express
var mongoose = require('../models/model');
var userSchema = new mongoose.Schema({
    username: String,
    password: String
});
var usersModel = mongoose.model('user', userSchema);

var router = express.Router();

//判断session是否存在
router.get("/mine",function(req,res){
    console.log(req.session.user)
    if(req.session.user == undefined){                     //到达/home路径首先判断是否已经登录
        res.status(200).json({status:false,info:"请登录"})              //未登录则重定向
    }else{
        res.status(200).json({status:true,info:req.session.user.username,msg:'退出登录'})           //已登录则....
    }
});

//实现登录路由
router.post('/login', function (req, res) {
    var user = req.body;
    console.log(user.password);
	if(user.username == undefined || user.password == undefined ){
        res.status(200).json({status:false,msg:"用户名密码错误"});
        return;
    }else{
		usersModel.findOne({username:user.username,password:user.password}, function (err,doc) {
			if(!doc){
				res.status(200).json({status:false,msg:"用户名密码错误"})
			}
			else{
				req.session.user = doc;
				console.log(doc.username);
				res.status(200).json({status:true,info:doc})
			}
		})		
	}
});

//实现注册路由
router.post('/register', function (req, res) {
    var user = req.body;
    console.log(user)
    console.log(user.username)
    if(user.username == undefined || user.password == undefined ){
        res.status(200).json({status:false,msg:"用户名或密码不能为空"});
        return;
    }else{
        usersModel.create(user, function (err,doc) {
            if(!doc){
                res.status(200).json({status:false,msg:"用户名或密码不能为空"})
            }
            else{
                req.session.user = doc;
                res.status(200).json({status:true,msg:"注册成功",info:doc})
            }
        })
    }
});
//实现退出路由
router.get('/logout',function(req,res){
    req.session.user = null;
    res.status(200).json({status:true})
});

module.exports = router;

