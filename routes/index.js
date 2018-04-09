var express = require('express');
var mongo = require('mongodb');
var assert=require('assert');
var url = "mongodb://heroku_867k5l8f:so40rohslitp2dmkf4lt7u553l@ds239359.mlab.com:39359/heroku_867k5l8f";

var router = express.Router();
var textin="Lorem Ipsum dolor sin tamet no es una magnifica conquistadoras en tu casa otras dias mi en es universitidad";

/* GET home page. */
router.get('/', function(req, res, next) {
    var resultArray = [];
    mongo.connect(url,function (err,db) {
        assert.equal(null,err);
        var dbo=db.db('heroku_867k5l8f');
        dbo.collection("tsob").find({}).sort({year:1}).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result);
            for (var i=0;i<result.length;i++){
                resultArray.push(result[i]);
            }
            //console.log(resultArray);
            db.close();
            res.render('index', { title: 'The Spread of Buddhism' , textin:textin, results:JSON.stringify(resultArray)});
        });
    });
});

router.post('/update',function (req,res,next) {

    var name=req.body.key1;
    var info=req.body.key2;
    /*console.log(name);
    console.log(info);*/
    var resultArray = [];

    mongo.connect(url,function (err,db) {
        assert.equal(null,err);
        var dbo=db.db('heroku_867k5l8f');
        var myquery = { name:name };
        dbo.collection("tsob").find(myquery).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result);
            resultArray.push(result[0]);
            info=result[0].info+" "+info;
            //console.log(info);
            var newvalues = { $set: {info:info} };
            dbo.collection("tsob").updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                console.log("1 document updated");
                db.close();
            });
            db.close();
            res.redirect('/');
        });
    });
});

module.exports = router;
