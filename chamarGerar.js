document.addEventListener("DOMContentLoaded", semRefresh);
// Executa assim que o botão de salvar for clicado
document.getElementById("idTamanho").addEventListener("click", semRefresh);
document.getElementById("idQTD").addEventListener("click", semRefresh);

function semRefresh(){

    var teste = document.getElementById('resposta');
    teste.innerHTML = '';

    var pacote = document.getElementsByName('itemCheck');
    for (var i = 0; i < pacote.length; i++){
        if ( pacote[i].checked ) {
            if(pacote[i].value == "num"){
                var cnum = 1;
            }else if (pacote[i].value == "let") {
                var clet = 1;
            }else if (pacote[i].value == "simb") {
                var csim = 1;
            }
        }else{
            if(pacote[i].value == "num"){
                var cnum = 0;
            }else if (pacote[i].value == "let") {
                var clet = 0;
            }else if (pacote[i].value == "simb") {
                var csim = 0;
            }                
        }
    }

    var tamanho = $('#idTamanho').val();
    var qtd = $('#idQTD').val();

    // Método post do Jquery
    $.post('gerar.php', {
        numero:cnum,
        letra:clet,
        simbolo:csim,
        tamanho:tamanho,
        qtd:qtd
    }, function(resposta){
        // Valida a resposta
        if(resposta){
            document.getElementById("resposta").innerHTML = resposta;
        }
    });}
