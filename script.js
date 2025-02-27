document.addEventListener("DOMContentLoaded", function () {
  let width = 0;
  let interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      document.getElementById("loading-screen").style.opacity = 0;
      setTimeout(function () {
        document.getElementById("loading-screen").style.display = "none";
      }, 500);
    } else {
      width++;
      document.getElementById("loading-bar").style.width = width + "%";
      document.getElementById("loading-text").innerText = width + "%";
    }
  }, 10);
});

const writeTextOnTheClipboard = async () => {
  try {
    const pix_key = "55984283286";
    await navigator.clipboard.writeText(pix_key);
    alert("Chave pix copiada com sucesso");
  } catch (e) {
    console.log(e);
  }
};
