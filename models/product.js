var mongoose = require('./model');

var productSchema = new mongoose.Schema({
    id: {type: Number},
    name: {type: String},
    price: {type: String},
    mount: {type: String},
    fs: {type: String}
});

var productModel = mongoose.model('prolist', productSchema);

/*
var productList=[
    {'id':1,'name':'水桶包 肩包(测试)','price':'￥0.10','mount':1,'fs':'../images/g-24.jpg'},
    {'id':2,'name':'水桶包 单肩斜挎(测试)','price':'￥0.90','mount':2,'fs':'../images/g-23.jpg'},
    {'id':3,'name':'单肩包 挎包(测试)','price':'￥0.60','mount':3,'fs':'../images/g-22.jpg'},
    {'id':4,'name':'直角十字架项链(测试)','price':'￥0.80','mount':4,'fs':'../images/g-30.jpg'},
    {'id':5,'name':'花好月圆 纯银青花项链(测试)','price':'￥0.30','mount':5,'fs':'../images/g-17.jpg'},
    {'id':6,'name':'青花镇纸 独家定制(测试)','price':'￥0.40','mount':6,'fs':'../images/g-27.jpg'},
    {'id':7,'name':'黄铜花十字架(测试)','price':'￥0.20','mount':7,'fs':'../images/g-19.jpg'}
]
 // 添加一条数据
 productModel.create(productList, function (err) {
     if(err)
         throw err;
     console.log('数据添加成功');
 });



*/
exports.getList = function (callback) {
  productModel.find({}, function (err, docs) {
        if(err)
            throw err;
        callback(docs);
    })
}

exports.getdetail = function(callback) {
    productModel.find({}, function (err, docs) {
        if(err)
            throw err;
        callback(docs);
    })
}