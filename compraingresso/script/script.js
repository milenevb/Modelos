function confirma(form){
    if(form.inputsenha1.value != form.inputsenha2.value){ // Exclamação significa diferente
        alert("O campo Senha está diferente da Confirmação de Senha.")
        form.senha1.focus(); //coloca o cursor no campo obrigatório
        return false; }
}
function senha(){
    inputsenha1 = document.orcamento.inputsenha1.value;
    inputsenha2 = document.orcamento.inputsenha2.value;

    if (inputsenha1 != inputsenha2) {
        document.getElementById('msg').style.display = "block";
    }

    else {
        document.getElementById('msg').style.display = "none";
    }
}

