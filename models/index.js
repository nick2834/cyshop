/**
 * Created by Administrator on 2017/5/9 0009.
 */
var mongoose = require('./model');

var indexSchema = new mongoose.Schema({
    id: {type: Number},
    name: {type: String},
    src: {type: String}
});

var indexModel = mongoose.model('indexList', indexSchema);


//var indexList=[
//    {'id':1,'name':'山药','src':'../images/slider1.jpg'},
//    {'id':2,'name':'爱的时光','src':'../images/slider2.jpg'},
//    {'id':3,'name':'街拍太多','src':'../images/slider3.jpg'},
//    {'id':4,'name':'景秀雅善','src':'../images/slider4.jpg'}
//]
//  //添加一条数据
// indexModel.create(indexList, function (err) {
//     if(err)
//         throw err;
//     console.log('数据添加成功');
// });

exports.getIndex = function (callback) {
    indexModel.find({}, function (err, docs) {
        if(err)
            throw err;
        callback(docs);
    })
}

