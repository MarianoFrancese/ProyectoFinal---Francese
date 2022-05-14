//Datos de USDT
let p = document.querySelector("#respuestaUSDT");

p.addEventListener("click", () => {
  fetch("data/datos.json")
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      mostrarRespuesta(resJson);
    })
    .catch((err) => {
      console.error(err);
    });
});

function mostrarRespuesta(datos) {
  let respuesta = (document.querySelector("#respuestaUSDT").innerHTML = `
  <table class="table table-dark table-bordered border-white">
    <thead class="cambio-letra">
      <tr>
        <th class="tamaño-tabla" scope="col">Anunciante</th>
        <th class="tamaño-tabla" scope="col">Precio</th>
        <th class="tamaño-tabla" scope="col">Disponible</th>
        <th class="tamaño-tabla" scope="col">Pago</th>
      </tr>
    </thead>
    <tbody class="cambio-letra">
      <tr>
        <td class="tamaño-tabla">${datos[0].Anunciante}</td>
        <td class="tamaño-tabla">${datos[0].Precio}</td>
        <td class="tamaño-tabla">${datos[0].Disponible}</td>
        <td class="tamaño-tabla">${datos[0].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[1].Anunciante}</td>
        <td class="tamaño-tabla">${datos[1].Precio}</td>
        <td class="tamaño-tabla">${datos[1].Disponible}</td>
        <td class="tamaño-tabla">${datos[1].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[2].Anunciante}</td>
        <td class="tamaño-tabla">${datos[2].Precio}</td>
        <td class="tamaño-tabla">${datos[2].Disponible}</td>
        <td class="tamaño-tabla">${datos[2].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[3].Anunciante}</td>
        <td class="tamaño-tabla">${datos[3].Precio}</td>
        <td class="tamaño-tabla">${datos[3].Disponible}</td>
        <td class="tamaño-tabla">${datos[3].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[4].Anunciante}</td>
        <td class="tamaño-tabla">${datos[4].Precio}</td>
        <td class="tamaño-tabla">${datos[4].Disponible}</td>
        <td class="tamaño-tabla">${datos[4].Pago}</td>
      </tr>
    </tbody>
  </table>`);
}

//Datos de BTC
let c = document.querySelector("#respuestaBTC");

c.addEventListener("click", () => {
  fetch("data/datosBTC.json")
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      mostrarBitcoin(resJson);
    })
    .catch((err) => {
      console.error(err);
    });
});

function mostrarBitcoin(datos) {
  let respuesta = (document.querySelector("#respuestaBTC").innerHTML = `
  <table class="table table-dark table-bordered border-white">
    <thead class="cambio-letra">
      <tr>
        <th class="tamaño-tabla" scope="col">Anunciante</th>
        <th class="tamaño-tabla" scope="col">Precio</th>
        <th class="tamaño-tabla" scope="col">Disponible</th>
        <th class="tamaño-tabla" scope="col">Pago</th>
      </tr>
    </thead>
    <tbody class="cambio-letra">
      <tr>
        <td class="tamaño-tabla">${datos[0].Anunciante}</td>
        <td class="tamaño-tabla">${datos[0].Precio}</td>
        <td class="tamaño-tabla">${datos[0].Disponible}</td>
        <td class="tamaño-tabla">${datos[0].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[1].Anunciante}</td>
        <td class="tamaño-tabla">${datos[1].Precio}</td>
        <td class="tamaño-tabla">${datos[1].Disponible}</td>
        <td class="tamaño-tabla">${datos[1].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[2].Anunciante}</td>
        <td class="tamaño-tabla">${datos[2].Precio}</td>
        <td class="tamaño-tabla">${datos[2].Disponible}</td>
        <td class="tamaño-tabla">${datos[2].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[3].Anunciante}</td>
        <td class="tamaño-tabla">${datos[3].Precio}</td>
        <td class="tamaño-tabla">${datos[3].Disponible}</td>
        <td class="tamaño-tabla">${datos[3].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[4].Anunciante}</td>
        <td class="tamaño-tabla">${datos[4].Precio}</td>
        <td class="tamaño-tabla">${datos[4].Disponible}</td>
        <td class="tamaño-tabla">${datos[4].Pago}</td>
      </tr>
    </tbody>
  </table>`);
}

//Datos de ETH
let e = document.querySelector("#respuestaETH");

e.addEventListener("click", () => {
  fetch("data/datosETH.json")
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      mostrarEthereum(resJson);
    })
    .catch((err) => {
      console.error(err);
    });
});

function mostrarEthereum(datos) {
  let respuesta = (document.querySelector("#respuestaETH").innerHTML = `
  <table class="table table-dark table-bordered border-white">
    <thead class="cambio-letra">
      <tr>
        <th class="tamaño-tabla" scope="col">Anunciante</th>
        <th class="tamaño-tabla" scope="col">Precio</th>
        <th class="tamaño-tabla" scope="col">Disponible</th>
        <th class="tamaño-tabla" scope="col">Pago</th>
      </tr>
    </thead>
    <tbody class="cambio-letra">
      <tr>
        <td class="tamaño-tabla">${datos[0].Anunciante}</td>
        <td class="tamaño-tabla">${datos[0].Precio}</td>
        <td class="tamaño-tabla">${datos[0].Disponible}</td>
        <td class="tamaño-tabla">${datos[0].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[1].Anunciante}</td>
        <td class="tamaño-tabla">${datos[1].Precio}</td>
        <td class="tamaño-tabla">${datos[1].Disponible}</td>
        <td class="tamaño-tabla">${datos[1].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[2].Anunciante}</td>
        <td class="tamaño-tabla">${datos[2].Precio}</td>
        <td class="tamaño-tabla">${datos[2].Disponible}</td>
        <td class="tamaño-tabla">${datos[2].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[3].Anunciante}</td>
        <td class="tamaño-tabla">${datos[3].Precio}</td>
        <td class="tamaño-tabla">${datos[3].Disponible}</td>
        <td class="tamaño-tabla">${datos[3].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[4].Anunciante}</td>
        <td class="tamaño-tabla">${datos[4].Precio}</td>
        <td class="tamaño-tabla">${datos[4].Disponible}</td>
        <td class="tamaño-tabla">${datos[4].Pago}</td>
      </tr>
    </tbody>
  </table>`);
}

//Datos de DAI
let a = document.querySelector("#respuestaDAI");

a.addEventListener("click", () => {
  fetch("data/datosDAI.json")
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      mostrarDAI(resJson);
    })
    .catch((err) => {
      console.error(err);
    });
});

function mostrarDAI(datos) {
  let respuesta = (document.querySelector("#respuestaDAI").innerHTML = `
  <table class="table table-dark table-bordered border-white">
    <thead class="cambio-letra">
      <tr>
        <th class="tamaño-tabla" scope="col">Anunciante</th>
        <th class="tamaño-tabla" scope="col">Precio</th>
        <th class="tamaño-tabla" scope="col">Disponible</th>
        <th class="tamaño-tabla" scope="col">Pago</th>
      </tr>
    </thead>
    <tbody class="cambio-letra">
      <tr>
        <td class="tamaño-tabla">${datos[0].Anunciante}</td>
        <td class="tamaño-tabla">${datos[0].Precio}</td>
        <td class="tamaño-tabla">${datos[0].Disponible}</td>
        <td class="tamaño-tabla">${datos[0].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[1].Anunciante}</td>
        <td class="tamaño-tabla">${datos[1].Precio}</td>
        <td class="tamaño-tabla">${datos[1].Disponible}</td>
        <td class="tamaño-tabla">${datos[1].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[2].Anunciante}</td>
        <td class="tamaño-tabla">${datos[2].Precio}</td>
        <td class="tamaño-tabla">${datos[2].Disponible}</td>
        <td class="tamaño-tabla">${datos[2].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[3].Anunciante}</td>
        <td class="tamaño-tabla">${datos[3].Precio}</td>
        <td class="tamaño-tabla">${datos[3].Disponible}</td>
        <td class="tamaño-tabla">${datos[3].Pago}</td>
      </tr>
      <tr>
        <td class="tamaño-tabla">${datos[4].Anunciante}</td>
        <td class="tamaño-tabla">${datos[4].Precio}</td>
        <td class="tamaño-tabla">${datos[4].Disponible}</td>
        <td class="tamaño-tabla">${datos[4].Pago}</td>
      </tr>
    </tbody>
  </table>`);
}

//Array
respuestaUsuario = [];

//Evento
let eventListener = document.querySelector("#btn");

eventListener.addEventListener("click", respuestaClick);

function respuestaClick() {
  document.body.innerHTML += `
  <div class="card" style="max-width:600px">
    <img src="Imagenes/Criptomonedas.webp" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Tus preferencias son:</h5>
        <p class="card-text">${respuestaUsuario.join(", ")}</p>
    </div>
</div>`;
}

//Datos Formulario y Sweet Alert
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  let formulario = e.target;

  let form1 = formulario.children[0].value;
  let form2 = formulario.children[1].value;
  let form3 = formulario.children[2].value;
  let form4 = formulario.children[3].value;
  respuestaUsuario.push(form1);
  respuestaUsuario.push(form2);
  respuestaUsuario.push(form3);
  respuestaUsuario.push(form4);
  console.log(respuestaUsuario);
  Swal.fire({
    icon: "success",
    title: "Your preferences have been saved",
    showConfirmButton: false,
    timer: 1500,
  });
}
