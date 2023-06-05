function sim() {
  alert("Opa, isso não era esperado. Vou ter que casar agora kkk");
}

function desvia(t) {
  var btn = t;
  btn.style.position = "absolute";
  btn.style.top = numeroaleatorio(10, 90);
  btn.style.left = numeroaleatorio(10, 70);
  console.log("Opa, desviei kkk");
}

function numeroaleatorio(min, max) {
  return Math.random() * (max - min) + min + "%";
}
