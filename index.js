function rodarHora() {
  const agora = new Date();

  const hora = agora.getHours();

  const minutos = agora.getMinutes();

  const segundos = agora.getSeconds();

  const horario = hora + ":" + minutos + ":" + segundos;

  document.getElementById("horas").innerHTML = horario;
}

setInterval(rodarHora, 1000);
