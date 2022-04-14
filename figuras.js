// Cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("cuadrado");
  let value = input.value;
  const perimetroCuadrado = (value) => value * 4;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcArea() {
  const input = document.getElementById("cuadrado");
  let value = input.value;
  const supCuadrado = (value) => value * value;
  const sup = supCuadrado(value);
  alert(sup);
}
const areaCuadrado = (lado) => lado * lado;

// Triángulo
function calcularPerimetroTri() {
  const inputLadoA = document.getElementById("ladoA");
  const inputLadoB = document.getElementById("ladoB");
  const inputLadoC = document.getElementById("ladoC");
  let valueLadoA = parseFloat(inputLadoA.value);
  let valueLadoB = parseFloat(inputLadoB.value);
  let valueLadoC = parseFloat(inputLadoC.value);
  const perimetroTri = (valueLadoA, valueLadoB, valueLadoC) => valueLadoA + valueLadoB + valueLadoC;
  let perTri = perimetroTri(valueLadoA, valueLadoB, valueLadoC);
  alert(perTri);
}

function calcAreaTri() {
  const inputLadoA = document.getElementById("ladoA");
  const inputLadoB = document.getElementById("ladoB");
  const alt = document.getElementById("alt");
  let valueLadoA = parseFloat(inputLadoA.value);
  let valueLadoB = parseFloat(inputLadoB.value);
  let valueAlt = parseFloat(alt.value);
  const areaTriangulo = (valueLadoA, valueLadoB, valueAlt) => (valueLadoA * valueLadoB) / valueAlt;
  let areaTri = areaTriangulo(valueLadoA, valueLadoB, valueAlt);
  alert(areaTri);
}
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// Circulo
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => PI * radio ** 2;
