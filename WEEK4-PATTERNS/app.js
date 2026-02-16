const grid = document.getElementById("cardGrid");
const detailTitle = document.getElementById("detailTitle");
const detailMeta = document.getElementById("detailMeta");
const detailDesc = document.getElementById("detailDesc");

function clearSelection() {
  for (const btn of grid.querySelectorAll(".card")) {
    btn.classList.remove("is-selected");
    btn.setAttribute("aria-pressed", "false");
  }
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest("button.card");
  if (!btn) return;

  clearSelection();
  btn.classList.add("is-selected");
  btn.setAttribute("aria-pressed", "true");

  detailTitle.textContent = btn.dataset.title || "(untitled)";
  detailMeta.textContent = btn.dataset.kind || "—";
  detailDesc.textContent = btn.dataset.desc || "—";
});
