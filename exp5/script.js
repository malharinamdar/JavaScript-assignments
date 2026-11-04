let timer;

function startCountdown() {
  clearInterval(timer);
  const input = document.getElementById("endDate").value.trim();
  const result = document.getElementById("result");

  if (input === "") {
    result.innerHTML = "Please enter a date and time.";
    return;
  }

  // Expected format: YYYY-MM-DD HH:MM:SS
  const parts = input.split(" ");
  if (parts.length !== 2) {
    result.innerHTML = "Invalid format.<br>Use: YYYY-MM-DD HH:MM:SS";
    return;
  }

  const target = new Date(parts[0] + "T" + parts[1]);
  if (isNaN(target.getTime())) {
    result.innerHTML = "Please enter a valid date and time.";
    return;
  }

  if (target <= new Date()) {
    result.innerHTML = "Please set a future date and time.";
    return;
  }

  timer = setInterval(function () {
    const now = new Date();
    const distance = target - now;

    if (distance <= 0) {
      clearInterval(timer);
      result.innerHTML = "Time's up!";
      return;
    }

    const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    result.innerHTML =
      "<p>" +
      days + " Day(s) " +
      hours + " Hour(s) " +
      minutes + " Minute(s) " +
      seconds + " Second(s)" +
      "</p>";
  }, 1000);
}
