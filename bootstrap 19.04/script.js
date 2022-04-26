function maiusculo() {
    form.nome.value = form.nome.value.toUpperCase()  //nome do formulario. name. value
}
function calculo(){
    //entrada
    let horario = document.form.horario.value;
    
    //processamento
    if (horario == "manha") { 
        valor = 1500
    }
    else if ( horario == "tarde") {
        valor = 1800
    } 
    else { 
        valor = 2300
    }

    //saida
    document.getElementById("total").value = valor;
}