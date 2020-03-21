function calcular() {
    event.preventDefault();
    const resultado = document.querySelector('.resultado');
    let text_carne, text_vegetais, text_refri;
    let pessoas = document.getElementById("quantidade_pessoas");
    let horas = document.getElementById("tempo_churrasco");
    let vegetarianos = document.getElementById("quantidade_vegetarianos");

    pessoas.value < 1 ? (alert("Não tem como fazer churras sem ninguem! Preencha um valor acima de 0 no campo Pessoas!")) : true ;
    vegetarianos.value < 0 ? vegetarianos.value = 0 : true ;

    let quantidade_carne = ((parseInt(pessoas.value) * 50) * horas.value) / 1000;
    let quantidade_vegetais = ((pessoas.value * 50) + (vegetarianos.value * 100) * horas.value) / 1000;
    let quantidade_cerveja = (parseInt(pessoas.value) + parseInt(vegetarianos.value)) * horas.value;
    let quantidade_refri = (((parseInt(pessoas.value) + parseInt(vegetarianos.value)) * 100 ) * horas.value)  /1000;

    console.log(quantidade_carne);

    quantidade_carne >= 1 ? text_carne = "Kg" : ( text_carne = "g", quantidade_carne *= 1000 );
    quantidade_vegetais >= 1 ? text_vegetais = "Kg" : ( text_vegetais  = "g", quantidade_vegetais *= 1000 );
    quantidade_refri >= 1 ? text_refri = "Litros" : ( text_refri = "ml", quantidade_refri *= 1000 );

    resultado.getElementsByClassName('valor')[0].innerHTML = quantidade_carne + " " + text_carne ;
    resultado.getElementsByClassName('valor')[1].innerHTML = quantidade_vegetais + " " + text_vegetais;
    resultado.getElementsByClassName('valor')[2].innerHTML = quantidade_cerveja  + " Latas";
    resultado.getElementsByClassName('valor')[3].innerHTML = quantidade_refri + " " + text_refri;
}
