/**
 * Created by Administrator on 2017/5/3.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/cyshop', function (err) {
    if(err)
        throw err;
    console.log('数据库连接成功');
});

module.exports = mongoose;