setTimeout(function () {
  document.getElementById("input").value = window.location.href.split("#")[1];
  document.getElementById("button").click();
}, 1e3);