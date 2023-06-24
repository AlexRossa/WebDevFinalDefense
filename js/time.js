function updateTime() {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();
  document.getElementById("clock").textContent = formattedTime;
}

setInterval(updateTime, 1000);
