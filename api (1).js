
async function buscarAnime() {

  const nombre = document.getElementById("anime").value;

  const res = await fetch(`https://api.jikan.moe/v4/anime?q=${nombre}&limit=5`);
  const data = await res.json();

  let html = "";

  data.data.forEach(item => {
    html += `
      <h2>${item.title}</h2>
      <img src="${item.images.jpg.image_url}">
      <p>${item.synopsis || "Sin descripción"}</p>
      <hr>
    `;
  });

  document.getElementById("resultado").innerHTML = html;
}
