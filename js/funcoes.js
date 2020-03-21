function calcular() {
    event.preventDefault();

    const resultado = document.querySelector('.resultado');
    var quantidade_carne, quantidae_vegetais, quatidade_cerveja, quatidade_refri, html;
    var pessoas = document.getElementById("quantidade_pessoas");
    var horas = document.getElementById("tempo_churrasco");
    var vegetarianos = document.getElementById("quantidade_vegetarianos");


    if (pessoas.value == "" ) {
        alert("Preencha todos os dados!!!");
    }else{
        quantidade_carne = ((parseInt(pessoas.value) * 50) * horas.value) / 1000 ;
        quantidae_vegetais = ((pessoas.value * 50) + (vegetarianos.value * 100) * horas.value) / 1000;
        quatidade_cerveja = (parseInt(pessoas.value) + parseInt(vegetarianos.value)) * horas.value;
        quatidade_refri = ((parseInt(pessoas.value) + parseInt(vegetarianos.value)) * 100 ) * horas.value / 1000;

        html +=`
        <div class="row">
          <div class="carne col-md-3 col-sm-12">
            <p>Carne</p>
            <i class="fas fa-bacon"></i>
            <p class="tipo">${quantidade_carne} KG</p>
          </div>
          <div class="carne col-md-3 col-sm-12">
            <p>Vegetais</p>
            <i class="fas fa-seedling"></i>
            <p class="tipo">${quantidae_vegetais} KG</p>
          </div>
          <div class="carne col-md-3 col-sm-12">
            <p>Cerveja</p>
            <i class="fas fa-beer"></i>
            <p class="tipo">${quatidade_cerveja} Latas</p>
          </div>
          <div class="carne col-md-3 col-sm-12">
            <p>Refrigerante</p>
            <i class="fas fa-wine-bottle"></i>
            <p class="tipo">${quatidade_refri} Litros</p>
          </div>
        </div>
        `
    }

  resultado.innerHTML = html;
}



function cria_cards(jsonObj){
        var quartos = jsonObj;
        var html = "";
        console.log(quartos);

        for(i = 0; i < quartos.length; i++){
          html +=`
          <div class="item">
                  <img class="img" src="${quartos[i].photo}">
                  <p class="tipo">${quartos[i].property_type}</p>
                  <p class="nome">${quartos[i].name}</p>
                  <p class="preco">${quartos[i].price}</p>
          </div>`
                  console.log(html)
      }
      section.innerHTML = html;
    }
