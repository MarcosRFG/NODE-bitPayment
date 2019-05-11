var MongoClient =  require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'

module.exports = {
    criaPost: function(post, res){

        res.status(200).send('SUCESSO');
    },
    buscaPost: function(post, res){
        let retorno = {
            "name":"Marcos",
            "email":"marcos@gmail.com",
            "cpf": 123432479312,
            "telefone":551155898123
        }
        res.json(retorno)
    },
    insertbtc: function(post, res){

        res.status(200).send('SUCESSO');
    },
    searchbtc: function(post, res){
        let retorno = {
            "end_Carteira":"fdsfsdfsdfsdfsdf53453534",
            "exchanges":[{
                "name":"Poliniex",
                "seleected":"false"
            },{
                "name":"CoinBR",
                "seleected":"true"
            },{
                "name":"Mercado Bitcoin",
                "seleected":"false"
            }]
        }
        res.json(retorno)
    },
    getLogin: function(user, pass, res){
        if(user == 'root' && pass == 'root'){
            res.status(200).send('SUCESSO');
        }else{
            res.status(203).send('FALHA');
        }

    },
};

