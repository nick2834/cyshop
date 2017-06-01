var express= require('express');// 1. 引入express

var productModel = require('../models/product');
var router = express.Router();// 2. 通过express创建路由
//获取产品信息
router.post('/list', function (req, res) {
    productModel.getList(function (productList) {
        res.status(200).json(productList);
    });
});
//获取当前id的商品信息
router.post('/getproduct/:id', function (req, res) {
    productModel.getdetail(function (productList) {
        var id = req.params.id;
        var productInfo = null;
        for(var i in productList){
            if(id == productList[i].id){
                productInfo = productList[i];
                break;
            }
        }
        res.status(200).json(productInfo);
    });
});

module.exports = router;