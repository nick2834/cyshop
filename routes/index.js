/**
 * Created by Administrator on 2017/5/9 0009.
 */
var express= require('express');// 1. 引入express

var indexModel = require('../models/index');
var router = express.Router();// 2. 通过express创建路由
//获取产品信息
router.post('/index', function (req, res) {
    indexModel.getIndex(function (indexList) {
        res.status(200).json(indexList);
    });
});
module.exports = router;