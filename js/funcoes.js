function calcular() {
    event.preventDefault();
    const resultado = document.querySelector('.resultado');

    let pessoas = document.getElementById("quantidade_pessoas");
    let horas = document.getElementById("tempo_churrasco");
    let vegetarianos = document.getElementById("quantidade_vegetarianos");
    let quantidade_carne = ((parseInt(pessoas.value) * 50) * horas.value) / 1000;
    let quantidae_vegetais = ((pessoas.value * 50) + (vegetarianos.value * 100) * horas.value) / 1000;
    let quantidade_cerveja = (parseInt(pessoas.value) + parseInt(vegetarianos.value)) * horas.value;
    let quantidade_refri = (((parseInt(pessoas.value) + parseInt(vegetarianos.value)) * 100 ) * horas.value)  /1000;

    resultado.getElementsByClassName('valor')[0].innerHTML = quantidade_carne;
    resultado.getElementsByClassName('valor')[1].innerHTML = quantidae_vegetais;
    resultado.getElementsByClassName('valor')[2].innerHTML = quantidade_cerveja;
    resultado.getElementsByClassName('valor')[3].innerHTML = quantidade_refri;
}
