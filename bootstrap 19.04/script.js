function maiusculo() {
    form.nome.value = form.nome.value.toUpperCase()  //name do formulario. name. value
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
function adiciona() {
    //entrada
    let guloseima = document.form.guloseima.value;

    //processamemto
    if (guloseima == "guloseimas"){
        Number (valor) += 350
    }
    else if ( guloseima == "personagens"){
        Number (valor) += 250
    }
    else if (guloseima == "atracoes" ){
        Number (valor) += 300
    }
    else if (guloseima == "maquiagem"){
        Number (valor) += 150
    }
    else if (guloseima == "brindes"){
        Number (valor) += 100
    }

    // saída

    apagar = document.getElementById("total").value;
}


/*
    function confirmar(form){
        
        apagar = document.getElementById('total').value;
        alert (apagar);
        if (form.nome.value == ""){
            alert("O Campo Nome é obrigatório.")
            form.nome.focus();
            return false;
        }
        else {
            alert("enviou!")
        }
    }
*/