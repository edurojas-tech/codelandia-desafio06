const { nome, title, sinopse, tempo, ano, capa, btnSerie, btnTrailer } = dados;

const elements = [
  titlesElements(title, nome), 
  descricaoElements(dados)];
const root = document.getElementById("root");
root.innerHTML = elements.join("");
