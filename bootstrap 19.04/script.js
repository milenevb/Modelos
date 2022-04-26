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

    document.getElementById("guloseimas").checked = false;
    document.getElementById("personagens").checked = false;
    document.getElementById("atracoes").checked = false;
    document.getElementById("maquiagem").checked = false;
    document.getElementById("brindes").checked = false;
}

function opcionais(valor,marcado){

    //entrada
    total =  document.getElementById('total').value;

    //processamento

    if(marcado){
        total = Number(total) + Number(valor);
        //total += valor; forma reduzida
    }
    else{
        total = Number(total) - Number(valor);
         //total -= valor; forma reduzida
    }

    //saida
    document.getElementById('total').value = total;
}

function trocaTema(){
//entrada

    tema= document.getElementById('tema').value;

    //processamento
    if (tema == "mario") {
        titulo = "Super Mario Brós";
        newFundo = "img/mario.jpg";
        newFoto = "img/mario.png";
        cor = "red";

        altura= "85%"
        right ="0%"
        botttom = "-5%"
    }

    else if (tema == "sofia"){
        titulo  = "Princesa Sofia";
        newFundo = "img/sofia.jpg";
        newFoto = "img/sofia.png";
        cor = "purple";

        altura= "90%"
        right ="5%"
        botttom = "-5%"
    }
    else if (tema == "pjmasks"){
        titulo = "Pj Masks";
        newFundo = "img/pjmasks.jpg";
        newFoto = "img/pjmasks.png";
        cor = "blue"

        altura= "85%"
        right ="0%"
        botttom = "-5%"
    }
    else{
        titulo = "Tema da Festa"
        newFundo = "";
        newFoto = "";
        cor = "black"

        altura= "85%"
        right ="0%"
        botttom = "-5%"
    }
    //saida
    document.getElementById("titulo").value = titulo;
    document.body.style.backgroundImage = "url(" + newFundo +")";
    document.getElementById('foto').src = newFoto;
    document.getElementById('titulo').style.color = cor;
    document.body.style.color = cor;

    document.getElementById("foto").style.height = height;
    document.getElementById("foto").style.right = right; 
    document.getElementById("foto").style.bottom = bottom;

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