function calculos(form) {
    form.login.value = form.login.value.toUpperCase(); /* transformar em maiusculo */

    //entrada de dados
    pagamento = form.pagamento.value;

    quant1 = form.quant1.value;
    quant2 = form.quant2.value;
    quant3 = form.quant3.value;
    quant4 = form.quant4.value;


    //processamento
    tot1 = quant1 * 300;
    tot2 = quant2 * 700;
    tot3 = quant3 * 650;
    tot4 = quant4 * 299;

    if (pagamento == "Dinheiro") {
        perc = 0.15;
    }
    else{
        perc = 0;
    }

    total= tot1 + tot2 + tot4;
    desconto = total * perc;
    apagar = total - desconto;


    //saída
    form.tot1.value = "R$" + tot1.toFixed(2).replace(".",","); //colocar casas decimais
    form.tot2.value = "R$" + tot2.toFixed(2).replace(".",",");
    form.tot3.value = "R$" + tot3.toFixed(2).replace(".",",");
    form.tot4.value = "R$" + tot4.toFixed(2).replace(".",",");

    document.getElementById('total').value = total.toFixed(2);
    document.getElementById('desconto').value = desconto.toFixed(2);
    document.getElementById('apagar').value = apagar.toFixed(2);
}

function confirma(form){
    apagar = form.total.value;

    if (form.login.value == ""){
        alert("O Campo Nome é obrigatório.");
        form.login.focus();
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
    else if((quant1 == 0) && (quant2 == 0) && (quant3 == 0 ) && (quant4 == 0)){
        alert("Você precisa solicitar pelo menos um produto!")
        form.quant1.focus(); //coloca o cursor no campo obrigatório
        return false;    
    }
    else{
        if (confirm("Confirma o envio do Orçamento do Valor de R$" + total.toFixed(2))){
            alert("Orçamento enviado com Sucesso!!!");
            return true;
        }
        else{
            return false;
        }
    }
}
function senha(){
    senha1 = document.orcamento.senha1.value;
    senha2 = document.orcamento.senha2.value;

    if (senha1 !=senha2) {
        document.getElementById('msg').style.display = "block";
    }

    else {
        document.getElementById('msg').style.display = "none";
    }
}

function pessoa(obj){
    if(obj == 'pf'){
        document.getElementById('cpf').style.display = "block";
        document.getElementById('cnpj').style.display = "none";
    }
    else{
        document.getElementById('cpf').style.display = "none";
        document.getElementById('cnpj').style.display = "block";
    }
}

function pag(obj){
    if(obj == 'Cartão'){
        document.getElementById('esconde_cartao').style.display = "block";
    }
    else{
        document.getElementById('esconde_cartao').style.display = "none";
    }
}

function mascara_cpf(obj){
    if(obj.value.length == 3) {
        obj.value += ".";
    }
    else if(obj.value.length == 7){
        obj.value += ".";
    }
    else if(obj.value.length == 11){
        obj.value += ".";
    }
}

function mascara_cnpj(obj){
    if(obj.value.length == 2){
        obj.value += ".";
    }
    else if(obj.value.length == 6){
        obj.value += ".";
    }
    else if(obj.value.length == 10){
        obj.value += "/";
    }
    else if (obj.value.length == 15){
        obj.value += "-";
    }
}

function mascara_tel(obj){
    if(obj.value.length == 0){
        obj.value += "("
    }
    else if(obj.value.length == 3){
        obj.value += ")"
    }
    else if(obj.value.length == 9) {
        obj.value += "-"
    }
}

function mascara_cartao(obj){
    if(obj.value.length == 5)
        obj.value += " "
    else if (obj.value.length == 11)
        obj.value += " "
    else if (obj.value.length == 13)
        obj.value += " "
}



function salto(campo,digito){
    if(campo == "cpf"){
        if(digito.length >13){
            document.orcamento.telefone.focus();
        }
    }
    if(campo == "cnpj"){
        if(digito.length >16){
            document.orcamento.telefone.focus();
        }
    }
    if(campo == "telefone"){
        if(digito.length >13){
            document.orcamento.pagamento.focus();
        }
    }
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