
// const mensagem = "Ola mundo";

// console.log(mensagem);

var express = require('express');
var dsCss = '<link rel="stylesheet" href="/css/style.css">'
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function(req, res){
    res.render('../views/home');
});

app.get('/index', function(req, res){
    res.render('../views/home');
});

app.get('/page1', function(req, res){
    res.render('../views/pagina1');
});

app.get('/page2', function(req, res){
    res.render('../views/contato');
});

app.get('/page3/:dsNome',function(req, res){
    let dsNome = req.params
    res.send('<p> O nome informado é: '+ dsNome + ' </p>')
})

app.get('/page4/:dsNome?', function(req, res){
    let dsNome = req.params.dsNome;
    if(dsNome){
        res.send('<p> O nome informado é: '+ dsNome + ' </p>')
    }else{
        res.send(dsCss + '<p> O nome não foi informado</p>')
    }
})

app.get('/page5/:dsNome?/:nrIdade?', function(req, res){
    let dsNome = req.params.dsNome;
    let nrIdade = req.params.nrIdade;
    let dsPagina = dsCss;

    if (dsNome){
        dsPagina += '<p> O nome informado é: ' +dsNome + '(page5)</p>';
    }else{
        dsPagina += '<p> O nome não foi informado.</p>';
    }
    if (nrIdade){
        dsPagina += '<p> A idade é: ' + nrIdade+ '(page5)</p>';
    }else{
        dsPagina += '<p> A idade não foi informada</p>';
    }
    res.send(dsPagina);
})

app.listen(3000, function(){
    console.log('Executando na porta 3000');
});
