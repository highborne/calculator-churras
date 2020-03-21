function calcular() {
    var pessoas = document.getElementById("quantidade_pessoas");
    var horas = document.getElementById("tempo_churrasco");
    var vegetarianos = document.getElementById("quantidade_vegetarianos");

    if (pessoas.value != "") {
        alert('Obrigado sr(a) ' + pessoas.value + ' os seus dados foram encaminhados com sucesso');
    }

}
