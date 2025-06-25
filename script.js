function enviarMensagem(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso! Obrigada por visitar o Jurassic Doc 🌴");
}

function ativarModoNoturno() {
  document.body.classList.toggle("modo-escuro");
  document.querySelector("footer").classList.toggle("modo-escuro");
}

function rugido() {
  const audio = document.getElementById("som-rugido");
  audio.currentTime = 0; // Reinicia o som do começo
  audio.play();
}

function atualizarContador() {
  let visitas = localStorage.getItem("visitas") || 0;
  visitas++;
  localStorage.setItem("visitas", visitas);
  document.getElementById("contador").textContent = visitas;
}

document.addEventListener("DOMContentLoaded", atualizarContador);
