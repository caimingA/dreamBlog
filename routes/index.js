var express = require('express');
var router = express.Router();

//获取当前时间
var sd = require('silly-datetime');
var time = sd.format(new Date(), 'YYYY-MM-DD');


//数据库链接
var link = require("../server/link");
var blogTbl = require("../server/DB/blog_tbl");
var tagTbl = require("../server/DB/tag_tbl");
var speakingTbl = require("../server/DB/speaking_tbl");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title : '请通过localhost:3000/my开始进行博客访问', content : 'BLOG'});
});

//my
router.get('/my', function(req, res, next) {

    blogTbl.findAll({
        where:{}
    }).then(function (result) {
        console.log(JSON.stringify(result));
        res.render('my.ejs', { json: result, num : result.length});
    }).catch(function (err) {
        console.log("fail : " + err);
    });
});
//Arctile
router.get('/Arctile', function(req, res, next) {
    console.log(req.query.id);
    blogTbl.find({
        where: {
            id : parseInt(req.query.id)
        }
    }).then(function (result) {
        console.log(JSON.stringify(result));
        res.render('Arctile.ejs', { json: result, title : 'title'});
    }).catch(function (err) {
        console.log("fail : " + err);
    });
    // res.render('Arctile.ejs', {title : 'title' });
});
//tag
router.get('/tags', function(req, res, next) {
    console.log(req.query.id);
    tagTbl.findAll({
        where: {}
    }).then(function (result) {
        console.log(JSON.stringify(result));
        res.render('tags.ejs', { json: result, title : 'title'});
    }).catch(function (err) {
        console.log("fail : " + err);
    });
    // res.render('Arctile.ejs', {title : 'title' });
});
//Category
router.get('/Category', function(req, res, next) {
    console.log(req.query.id);
    blogTbl.findAll({
        where: {}
    }).then(function (result) {
        console.log(JSON.stringify(result));
        res.render('Category.ejs', { json: result, title : 'title'});
    }).catch(function (err) {
        console.log("fail : " + err);
    });
    // res.render('Arctile.ejs', {title : 'title' });
});

//Speakings
router.get('/Speakings', function(req, res, next) {
    console.log(req.query.id);
    tagTbl.findAll({
        where: {}
    }).then(function (result) {
        console.log(JSON.stringify(result));
        res.render('Speakings.ejs', { json: result, title : 'title'});
    }).catch(function (err) {
        console.log("fail : " + err);
    });
    // res.render('Arctile.ejs', {title : 'title' });
});

//About
router.get('/About', function(req, res, next) {
    console.log(req.query.id);
    tagTbl.findAll({
        where: {}
    }).then(function (result) {
        console.log(JSON.stringify(result));
        res.render('About.ejs', { json: result, title : 'title'});
    }).catch(function (err) {
        console.log("fail : " + err);
    });
    // res.render('Arctile.ejs', {title : 'title' });
});

//timeline
router.get('/timeline', function(req, res, next) {
    console.log(req.query.id);
    blogTbl.findAll({
        where: {}
    }).then(function (result) {
        console.log(JSON.stringify(result));
        res.render('timeline.ejs', { json: result, title : 'title'});
    }).catch(function (err) {
        console.log("fail : " + err);
    });
    // res.render('Arctile.ejs', {title : 'title' });
});
//tagsfind
router.get('/tagsfind', function(req, res, next) {
    console.log(req.query.tag);
    // var sql = 'SELECT * FROM blog_tbl WHERE tag LIKE "%' + req.query.tag +'%"';
    // link.sequelize.query(sql).
    blogTbl.findAll({
        where: {
            tag :{
                $like: "%" + req.query.tag + "%"
            }
        }
    }).then(function (result) {
        console.log(JSON.stringify(result[0]));

        console.log(result[0]);
        res.render('tagsfind.ejs', { json: result, title : req.query.tag});
    }).catch(function (err) {
        console.log("fail : " + err);
    });
    // res.render('Arctile.ejs', {title : 'title' });
});
//Search
router.get('/Search', function(req, res, next){
    // console.log(req.query.search);
    // blogTbl.findAll({
    //     where: {
    //         search :{
    //             $like: "%" + req.query.search + "%"
    //         }
    //     }
    // }).then(function(result){
    //     // if(result == null){
    //     //     res.render('Search', {json : "no exist", title :req.query.search})
    //     // }else{
    //     //     res.render('Search', {json : result, title :req.query.search});
    //     // }
    //
    // }).catch(function(err){
    //     console.log("fail : " + err);
    // });
    res.render('Search.ejs', {title : 'title'});
});


router.post('/Addpassage', function(req, res, next){
    console.log(time);
    console.log(JSON.stringify(req.body));
    blogTbl.create({
        title:req.body.title,
        html:req.body.html,
        content:req.body.content,
        contenthead:req.body.content,
        date:time,
        kind: '["' + req.body.kind + '"]',
        tag:'["' + req.body.tag + '"]'

    }).then(function(result){
        res.send({title : 'aaa'});
    }).catch(function(err){
        console.log("fail : " + err);
    });

});

router.get('/Addpassage', function(req, res, next){
    res.render('Addpassage.ejs', {title : 'title'});
});

router.get('/Searchfind', function(req, res, next) {
    console.log(req.query.key);
    // var sql = 'SELECT * FROM blog_tbl WHERE tag LIKE "%' + req.query.tag +'%"';
    // link.sequelize.query(sql).
    blogTbl.findAll({
        where: {
            title :{
                $like: "%" + req.query.key + "%"
            }
        }
    }).then(function (result) {
        console.log(JSON.stringify(result[0]));

        console.log(result[0]);
        res.render('Searchfind.ejs', { json: result, title : req.query.key});
    }).catch(function (err) {
        console.log("fail : " + err);
    });
    // res.render('Arctile.ejs', {title : 'title' });
});

module.exports = router;
