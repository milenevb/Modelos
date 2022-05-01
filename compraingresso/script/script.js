function confirma(form){

    if (form.nome.value == ""){
        alert("O Campo Nome é obrigatório.");
        form.nome.focus();
        return false;
    }
    else if(form.senha1.value == ""){
        alert("O campo Senha è obrigatório.")
        form.senha1.focus(); //coloca o cursor no campo obrigatório
        return false;    
    }
    else if(form.senha1.value != form.senha2.value){ // Exclamação significa diferente
        alert("O campo Senha está diferente da Confirmação de Senha.")
        form.senha1.focus(); //coloca o cursor no campo obrigatório
        return false;    
    }
    
}

function senha(){
    senha1 = document.orcamento.senha1.value;
    senha2 = document.orcamento.senha2.value;

    
    if (senha1 != senha2) {
        document.getElementById('msg').style.display = "block";
    }

    else {
        document.getElementById('msg').style.display = "none";
    }
}

function conteudo(obj){
    if(obj == 'cartao'){
        document.getElementById('esconde_cartao').style.display = "block";
    }
    else{
        document.getElementById('esconde_cartao').style.display = "none";
    }
}

senha
function confirma(form){
    if(form.senha1.value != form.senha2.value){ // Exclamação significa diferente
        alert("O campo Senha está diferente da Confirmação de Senha.")
        form.senha1.focus(); //coloca o cursor no campo obrigatório
        return false; }
}

let btn = document.querySelector('#eye');
btn.addEventListener('click', function() {
    let input = document.querySelector('#senha1');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});

let btn2 = document.querySelector('#eye2');
btn.addEventListener('click', function() {
    let input = document.querySelector('#senha2');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});


//cartao
function mascara_cartao(obj){
    if(obj.value.length == 5)
        obj.value += " "
    else if (obj.value.length == 11)
        obj.value += " "
    else if (obj.value.length == 13)
        obj.value += " "
}

function somente_numero(e){
    tecla = (window.event)?event.keyCode:e.which;

    if ( ( tecla >=48 && tecla<=57) || (tecla>=96 && tecla<=105) || (tecla == 8) || (tecla == 37) || (tecla == 39) || (tecla == 46) ){
        return true;
    }
    else{
        return false;
    }
}

//entrada de dados
pagamento = form.pagamento.value;

//processamento 

function calculo(){
    show = document.getElementById("show").value;

    if (show == "anitta"){
    valor = 1500
    }
    else if ( show == "um44k"){
    valor = 1800
    } 
    else {
        valor = 2000
    }
}

total = document.getElementById("total").value;
