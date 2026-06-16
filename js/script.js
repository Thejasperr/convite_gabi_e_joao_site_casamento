const btnAbrirConvite = document.getElementById("btnAbrirConvite");
const cartaOverlay = document.getElementById("cartaOverlay");
const siteCasamento = document.getElementById("siteCasamento");

btnAbrirConvite.addEventListener("click", () => {
  cartaOverlay.classList.add("aberta");
  siteCasamento.classList.add("revelado");

  setTimeout(() => {
    cartaOverlay.classList.add("sumir");

    document.body.classList.remove("convite-fechado");
    document.body.classList.add("convite-aberto");
  }, 1700);
});

const fotoViewer = document.getElementById("fotoViewer");
const fotoViewerImg = document.getElementById("fotoViewerImg");
const fotoViewerTitle = document.getElementById("fotoViewerTitle");
const fotoViewerDesc = document.getElementById("fotoViewerDesc");
const fecharFoto = document.getElementById("fecharFoto");

document.body.appendChild(fotoViewer);

document.querySelectorAll(".polaroid-card").forEach((foto) => {
  foto.addEventListener("click", () => {
    fotoViewerImg.src = foto.dataset.img;
    fotoViewerTitle.textContent = foto.dataset.title;
    fotoViewerDesc.textContent = foto.dataset.text;

    fotoViewer.classList.add("ativo");
    document.body.classList.add("sem-scroll");
  });
});

function fecharViewer() {
  fotoViewer.classList.remove("ativo");
  document.body.classList.remove("sem-scroll");
}

fecharFoto.addEventListener("click", fecharViewer);

fotoViewer.addEventListener("click", (event) => {
  if (event.target === fotoViewer) {
    fecharViewer();
  }
});