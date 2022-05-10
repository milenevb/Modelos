function calcularPedido(){
    //entrada
    sanduiche =  document.getElementById("sanduiche").value;
    refri = document.getElementById("refri").value;
    batata = document.getElementById("batata").value;
    quantSanduiche = document.getElementById("quantSanduiche").value;
    quantRefri =  document.getElementById("quantRefri").value;
    quantBatata = document.getElementById("quantBatata").value;

    //processamento hamb

    if ( sanduiche == "bigmac"  ) {
        precoSanduiche = "14,90";
    }
    else if ( sanduiche == "quarteirao" ) {
        precoSanduiche = "13,90";
    }
    else if ( sanduiche == "mcfish"){
        precoSanduiche = "12,90";

    }
    //saída









function finalizar(){

    //entrada
    total = document.getElementById("total").value;

    //processamento
    if (total == 0.00){
        msg = "Você precisa adicionar um elemento!"
    }
    else{
        msg = ""
    }
    
    document.getElementById("msg").value = msg;

    $("afim ")
    //saída


}
*/