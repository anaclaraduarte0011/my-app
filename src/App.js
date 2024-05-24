import logo from './img/bluepaw.png';
import './App.css';
import React, { useState } from 'react';

function obterValor(dogPeq, dogGra, data) {

  dogPeq = parseInt(dogPeq);//cachorro pequeno
  dogGra = parseInt(dogGra);//cachorro grande
  data = new Date(data);//data que o usuário escolheu

  class Petshop {//classe petshop
    constructor(nome, distancia, val_semPeq, val_semGra, val_fdsPeq, val_fdsGra, total) {//construtor de cada petshop
      this.nome = nome;//nome petshop
      this.distancia = distancia;//distancia petshop pro canil(em km)
      this.val_semPeq = val_semPeq;//valor do banho dia de semana cachorro pequeno
      this.val_semGra = val_semGra;//valor do banho dia de semana cachorro grande
      this.val_fdsPeq = val_fdsPeq;//valor do banho final de seman cachorro pequeno
      this.val_fdsGra = val_fdsGra;//valor do banho final de semana cachorroo grande
      this.total = 0;//total que seria gasto
    }
  };

  const MeuCaninoFeliz = new Petshop('Meu Canino feliz', 2, 20, 40, 24, 48);//criar petshop MeuCaninoFeliz com valores dados no problema
  const VaiRex = new Petshop('Vai Rex', 1.7, 15, 50, 20, 55);//criar petshop VaiRex com valores dados no problema
  const ChowChagas = new Petshop('ChowChagas', 0.8, 30, 45, 30, 45);//criar petshop ChowChagas com valores dados no problema

  if (data.getDay() == 6 || data.getDay() == 0) {//se for final de semana
    MeuCaninoFeliz.total = (dogPeq * MeuCaninoFeliz.val_fdsPeq) + (dogGra * MeuCaninoFeliz.val_fdsGra);//total de valores gastos final de semana nesse petshop(de acordo com dados do usuário)
    VaiRex.total = (dogPeq * VaiRex.val_fdsPeq) + (dogGra * VaiRex.val_fdsGra);
    ChowChagas.total = (dogPeq * ChowChagas.val_fdsPeq) + (dogGra * ChowChagas.val_fdsGra);


  } else {//se for dia dee semana
    MeuCaninoFeliz.total = (dogPeq * MeuCaninoFeliz.val_semPeq) + (dogGra * MeuCaninoFeliz.val_semGra);//valor gasto nesse petshop dia de semana(de acordo com dados do usuário)
    VaiRex.total = (dogPeq * VaiRex.val_semPeq) + (dogGra * VaiRex.val_semGra);
    ChowChagas.total = (dogPeq * ChowChagas.val_semPeq) + (dogGra * ChowChagas.val_semGra);
  }
  var petshops = [MeuCaninoFeliz, VaiRex, ChowChagas];

  //bubblesort

  for (var i = 0; i < petshops.length - 1; i++) {
    for (var j = 0; j < petshops.length - 1; j++) {
      if (petshops[j].total > petshops[j + 1].total) {//compara os totais
        var aux = petshops[j]
        petshops[j] = petshops[j + 1]
        petshops[j + 1] = aux
      } else if (petshops[j].total == petshops[j + 1].total) {//se foreem iguais
        if (petshops[j].distancia > petshops[j + 1].distancia) {//comparar distancia
          aux = petshops[j]
          petshops[j] = petshops[j + 1]
          petshops[j + 1] = aux
        }
      }
    }
  }

  var resultado = "Melhor opção: " + petshops[0].nome + " R$" + petshops[0].total + ",00"//oq sai na tela

  return resultado;
}

const App = () => {
  const [inputValues, setInputValues] = useState(["", "", ""]);

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const handleButtonClick = () => {
    const result = obterValor(inputValues[0], inputValues[1], inputValues[2]);
    document.getElementById("resultado").textContent = result;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="titulo">
          Pet Pick
        </p>
        <label>Quantidade de cachorros pequenos (banho):</label>
        <br />
        <input type="number" value={inputValues[0]} onChange={(event) => handleInputChange(event, 0)} required  style={{width:"10%", height:"30px"}}/>
        <br />
        <label>Quantidade de cachorros grandes (banho):</label>
        <br />
        <input type="number" value={inputValues[1]} onChange={(event) => handleInputChange(event, 1)} required style={{width:"10%", height:"30px"}} />
        <br />
        <label>Data :</label>
        <br />
        <input type="date" value={inputValues[2]} onChange={(event) => handleInputChange(event, 2)} required  style={{width:"10%", height:"40px"}}/>
        <br></br>
        <button onClick={handleButtonClick}  style={{width:"10%", height:"40px"}}>Ver</button>
        <body>
          <p className="resultado" id="resultado">
            Resultados...
          </p>
        </body>
      </header>
    </div>
  );
}

export default App;
