
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const som = document.getElementById("somRaptor");
  som.pause();
  som.currentTime = 0;
  som.play();
  alert("Mensagem enviada com sucesso!");
});
