var level = require('level')
var db = level('./notes-db')

var put = function(o,cb){
    var v = o;
    var k = o.id;
    delete v.id;
    db.put(k, JSON.stringify(v), function (err) {
        if (err){
            console.error(err)
            cb(err)
        }
        else {
            cb()
        }
    })
}

var get = function(k, cb){
    db.get(k, function (err, value) {
        value = JSON.parse(value);
        value.id = k;
        cb(err, value)
    })
}

var del = function(k, cb){
    db.del(k, function (err) {
        if (err)
            cb(err)
    });
}

var list = function(cb){
    var res = [];
    db.createReadStream()
    .on('data', function (data) {
        var d = JSON.parse(data.value);
        d.id = data.key;
        res.push(d);
    })
    .on('end', function () {
        cb(res);
    })
}

module.exports = {put,del,get,list};