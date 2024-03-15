const days = document.getElementById("days");
const hour = document.getElementById("hour");
const mint = document.getElementById("mint");
const sec = document.getElementById("sec");

const currentYear = new Date().getFullYear();
const newYear = new Date(`Thu Mar 14 ${currentYear + 1} 00:00:00`);

function updateCounter() {
  const currentTime = new Date();
  const diffrence = newYear - currentTime;

  //   console.log(Math.floor(diffrence / 1000 / 60 / 60) / 24);
  const d = Math.floor(diffrence / 1000 / 60 / 60 / 24);
  const h = Math.floor(diffrence / 1000 / 60 / 60) % 24;
  const m = Math.floor(diffrence / 1000 / 60) % 60;
  const s = Math.floor(diffrence / 1000) % 60;

  // hour.innerHTML = h;
  //   mint.innerHTML = m;
  //   sec.innerHTML = s;
  days.innerHTML = d;
  hour.innerHTML = h < 10 ? "0" + h : h;
  mint.innerHTML = m < 10 ? "0" + m : m;
  sec.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateCounter, 1000);
