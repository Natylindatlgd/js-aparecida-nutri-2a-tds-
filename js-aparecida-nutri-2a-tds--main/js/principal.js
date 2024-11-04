var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var trPacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < trPacientes.length; i++) {

    var trPaciente = trPacientes[i];

    var tdPeso = trPaciente.querySelector(".info-peso");
    var tdAltura = trPaciente.querySelector(".info-altura");
    var tdImc = trPaciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        trPaciente.classList.add("paciente-invalido");
        tdPeso.classList.add("peso-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false
        trPaciente.classList.add("paciente-invalido");
        tdAltura.classList.add("altura-invalida");
  
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = (peso / (altura * altura));
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}
titulo.addEventListener("click", mostraMensagem)
function mostraMensagem() {
    console.log("Olá eu fui clicado!");
}
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click"), function (event) {
    event.preventDefault();
    //console.log("Oi, cliquei no botão.");

    var form = documen.querySelector("#fom-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var Altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("td");

    var nomeTd = document.createElement("Td");
    var peso = document.createElement("Td");
    var altura = document.createElement("Td");
    var gordura = document.createElement("Td");
    var Imctd = document.createElement("Td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    altura.textContent = altura;
    gordura.textContent = gordura;

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(altura)
    pacienteTr.appendChild(gordura)

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr)
};