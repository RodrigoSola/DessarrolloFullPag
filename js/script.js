document.addEventListener("DOMContentLoaded", function () {
 
  document.getElementById("form").addEventListener("submit", function (event) {
    
    event.preventDefault();

    const titulo = document.getElementById("nombre").value;
    const nacionalidad = document.getElementById("nacionalidad").value;
    const imagen =
      document.getElementById("foto").value || "https://picsum.photos/250";
    const bgColor = document.getElementById("bgColor").value;
    
    const fontColor = document.getElementById("fontColor").value;

   console.log(titulo, nacionalidad, imagen,bgColor,fontColor);

    const cardContainer = document.getElementById("nuevo-jugador");
    const newCard = document.createElement("div");
    newCard.className = "jugadores";
    newCard.style.backgroundColor = bgColor;

    newCard.innerHTML = `
    <div class="card-content" style="background-color: ${bgColor};">
    <img src="${imagen}" alt="${titulo}">
    <h4 style="color: ${fontColor};">${titulo}</h4>
    <p style="color: ${fontColor};">${nacionalidad}</p>
    <div>
    `;
    cardContainer.appendChild(newCard);
    document.getElementById("form").reset();
  });
});
