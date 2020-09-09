setInterval(() => {
  let clock = document.querySelector("#clock");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //   clock.innerHTML = h + ":" + m + ":" + s;

  color = "#" + h + m + s;
  document.body.style.background = color;
  document.querySelector("#clock").innerHTML = color;
});
