var app = require('./config/custom-express')();


var controllerPost = require('./controller/post');

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});

app.get('/getCustomer', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var post = req.params.post;
    controllerPost.searchPost(post, res);
});

app.get('/savecustomer', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var post = req.params.post;
    controllerPost.insertPOst(post, res);
});

app.get('/getDadosBitcoin', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var post = req.params.post;
    controllerPost.searchbtc(post, res);
});

app.get('/saveDadosBitcoin', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var post = req.params.post;
    controllerPost.insertbtc(post, res);
});

app.get('/getLogin/:user/:pass', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    controllerPost.getLogin(req.params, res);
});


