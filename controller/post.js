var postDAO = require('../Persistencia/post');

module.exports = {
    insertPOst : function(post, res){
        postDAO.criaPost(post, res);
    },
    searchPost : function(post, res){
        console.log('busca')
        postDAO.buscaPost(post, res);
    },
    insertbtc : function(post, res){
        postDAO.insertbtc(post, res);
    },
    searchbtc : function(post, res){
        console.log('busca')
        postDAO.searchbtc(post, res);
    },
    getLogin : function(req, res){
        console.log('busca')
        postDAO.getLogin(req.user,req.pass, res);
    }
}