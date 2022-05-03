function confirma(form){

    if (form.nome.value == ""){
        alert("O Campo Nome é obrigatório.");
        form.nome.focus();
        return false;
    }
    else if (form.sobrenome.value == ""){
        alert("O Campo Sobrenome é obrigatório.");
        form.sobrenome.focus();
        return false;
    }
    else if (form.email.value == ""){
        alert("O Campo Email é obrigatório.");
        form.email.focus();
        return false;
    }
    else if (form.senha1.value == ""){
        alert("O Campo Senha é obrigatório.");
        form.senha1.focus();
        return false;
    }
    else if (form.senha2.value == ""){
        alert("O Campo Confirmar Senha é obrigatório.");
        form.senha2.focus();
        return false;
    }
    else if(form.senha1.value != form.senha2.value){ 
        alert("O campo Senha está diferente da Confirmação de Senha.")
        form.senha1.focus(); 
        return false;    
    } 
    
        return true;
    
      
}

function fim(){
    alert("compra feita!")
}

function senha(){
    
    senha1 = document.orc.senha1.value;
    senha2 = document.orc.senha2.value;
    
    if (senha1 != senha2) {
        document.getElementById('msg').style.display = "block";
    }

    else {
        document.getElementById('msg').style.display = "none";
    }
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

function pag(obj){
    if(obj == 'cartao'){
        document.getElementById('escondecartao').style.display = "block";
    }
    else{
        document.getElementById('escondecartao').style.display = "none";
    }
}

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


function calculo(){
   
    show = document.getElementById("show").value;
   
    if (show == "anitta"){
        valor = 340
    }
    else if ( show == "um44k"){
        valor = 150
    } 
    else {
        valor = 100
    }

    document.getElementById("total").value = valor;

}



 function trocararea(){
    valor = document.getElementById("total").value;

    area = document.getElementById("area").value; // nome q eu quero = document.getelement(id).vlue
    
    if (area == "pista"){
        valor = valor - (valor * 10 /100)
    }
    else if (area == "pistavip") {
        valor = valor
    }
    else if (area == "camarote"){
        valor = valor + (valor * 10/100)
    }
    
    document.getElementById("total").value = valor;
} 

 function trocaringresso(){
    valor = document.getElementById("total").value;

    ingresso = document.getElementById("ingresso").value;

    if (ingresso == "inteira"){
        valor = valor
    }
    else if (ingresso == "meia"){
        valor = valor/2
    }
    else if (ingresso == "promocional"){
        valor = valor - (valor * 10 /100)
    }

    document.getElementById("total").value = valor;
 }


