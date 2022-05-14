//Array
const criptomonedas = ["Bitcoin", "Ethereum", "USDT", "DAI"];

//Variables de precio criptomonedas
let precioBitcoin = Math.round(Math.random() * 30000 + 30000);
let precioEthereum = Math.round(Math.random() * 3000 + 3000);
let precioUSDT = Math.round(Math.random() * 1 + 1);
let precioDAI = Math.round(Math.random() * 1 + 1);

let marketcapBTC = Math.round(Math.random() * 800000 + 800000);
let marketcapETH = Math.round(Math.random() * 300000 + 300000);
let marketcapUSDT = Math.round(Math.random() * 70000 + 70000);
let marketcapDAI = Math.round(Math.random() * 50000 + 50000);

//Array de objetos
const tablaCripto = [
  {
    criptomoneda: ["Bitcoin", "Ethereum", "USDT", "DAI"],
    precio: [
      "$" + precioBitcoin,
      "$" + precioEthereum,
      "$" + precioUSDT,
      "$" + precioDAI,
    ],
    marketcap: [
      marketcapBTC + " M",
      marketcapETH + "M",
      marketcapUSDT + "M",
      marketcapDAI + "M",
    ],
  },
];

//Almaceno en Local Storage
const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

guardarLocal("listaCriptomonedas", JSON.stringify(tablaCripto));

//Variable y método para crear tabla HTML con los valores del objeto
const div = document.createElement("div");

div.innerHTML =
  `
  <table class="table table-bordered border-dark">
    <thead class="cambio-letra">
      <tr>
        <th scope="col">Criptomoneda</th>
        <th scope="col">Último precio</th>
        <th scope="col">Market Cap</th>
      </tr>
    </thead>
    <tbody class="cambio-letra">
      <tr>
        <td>${tablaCripto[0].criptomoneda[0]}</td>
        <td>${tablaCripto[0].precio[0]}</td>
        <td>${tablaCripto[0].marketcap[0]}</td>
      </tr>
      <tr>
        <td>${tablaCripto[0].criptomoneda[1]}</td>
        <td>${tablaCripto[0].precio[1]}</td>
        <td>${tablaCripto[0].marketcap[1]}</td>
      </tr>
      <tr>
        <td>${tablaCripto[0].criptomoneda[2]}</td>
        <td>${tablaCripto[0].precio[2]}</td>
        <td>${tablaCripto[0].marketcap[2]}</td>
      </tr>
      <tr>
        <td>${tablaCripto[0].criptomoneda[3]}</td>
        <td>${tablaCripto[0].precio[3]}</td>
        <td>${tablaCripto[0].marketcap[3]}</td>
      </tr>
    </tbody>
  </table>` + `<br><br>`;

document.body.append(div);

//Método para recorrer el array y poder crear cards con cada uno de los items
criptomonedas.forEach((value) => {
  let card = document.write(
    `
  <div class="card text-dark bg-light mb-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-header" style="font-weight: bolder">${value}</h5>
      <p class="card-text">Invertí ahora</p>
      <a href="./compra.html" class="btn btn-primary">Comprá P2P</a>
    </div>
  </div>
  ` + `<br>`
  );
});
