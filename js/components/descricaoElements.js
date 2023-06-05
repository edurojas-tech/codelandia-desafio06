function descricaoElements () {
  return `
  <div class="descricao">
    <div class="descricao__capa">
      <img src="${capa}" alt="${capa}">
    </div>
    <div class="descricao__itens">
      <div class="descricao__text">
        <p>${sinopse}</p>
      </div>
      <div class="descricao__infos">
        <div class="descricao__tempo">
          <img src="./assets/img/clock.png" alt="icon-clock">
          <span class="tempoMin">${tempo}</span>
        </div>
        <div class="descricao__estrelas">
          <span class="estrelas">
            <img src="./assets/img/estrela.png" alt="icon-estrela">
            <img src="./assets/img/estrela.png" alt="icon-estrela">
            <img src="./assets/img/estrela.png" alt="icon-estrela">
            <img src="./assets/img/estrela.png" alt="icon-estrela">
            <img src="./assets/img/estrala-off.png" alt="icon-estrela">
          </span>
        </div>
        <div class="descricao__ano">
          <span class="ano">${ano}</span>
        </div>
      </div>
      <div class="descricao__buttons">
        <button lass="buttons__play">${btnSerie}</button>
        <button lass="buttons__trailer">${btnTrailer}</button>
      </div>
    </div>
  </div>
  `
}