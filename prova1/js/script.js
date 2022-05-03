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

function conteudo(obj){
    if(obj == 'cartao'){
        alert("mimi")
        document.getElementById('escondecartao').style.display = "block";
    }
    else{
        document.getElementById('escondecartao').style.display = "none";
    }
}


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

    document.getElementById("total").value = valor;

}

//https://colorlib.com/etc/lf/Login_v1/index.html