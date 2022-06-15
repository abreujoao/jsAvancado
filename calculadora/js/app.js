function soma(){
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    if (n1 && n2 ){ //verificando se tem valor, se for vazio e falso
        let resultado = parseInt(n1) + parseInt(n2);
        document.getElementById('resultado').value=resultado;
        console.log(n1 + '+' + n2 + '='+ resultado);
    }else{
        alert('digite os valores')
    }
    
}

function subtrair(){
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    if (n1 && n2 ){ //verificando se tem valor, se for vazio e falso
        let resultado = n1-n2;
        document.getElementById('resultado').value=resultado;
        console.log(n1 + "-" + n2 + "="+ resultado);
    }else{
        alert('digite os valores')
    }
}

function multiplicar(){
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    if (n1 && n2 ){ //verificando se tem valor, se for vazio e falso
        let resultado = n1*n2;
        document.getElementById('resultado').value=resultado;
        console.log(n1 + 'x' + n2 + '='+ resultado);
    }else{
        alert('digite os valores')
    }
}

function divisao(){
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    if (n1 && n2 ){ //verificando se tem valor, se for vazio e falso
        if (n2 == 0){
        
            alert('digite um valor valido')
        }else{
            let resultado = n1/n2;
            document.getElementById('resultado').value=resultado;
            console.log(n1 + ':' + n2 + '='+ resultado);
        }
        
    }else{
        alert('digite os valores')
    }
    
}
