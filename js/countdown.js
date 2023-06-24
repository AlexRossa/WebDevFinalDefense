const targetDate = new Date("2023-08-01T00:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerText =
    minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? `0${seconds}` : seconds;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML =
      '<h2 class="display-4">Countdown Expired!</h2>';
  }
}, 1000);
