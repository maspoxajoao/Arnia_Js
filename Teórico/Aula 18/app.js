const timestamp = new Date().getTime();
const publicKey = "d0d76a60dcc1d76a2227bc2debaca41c";
const privateKey = "92eab95f3d5ee3fc201dbf74e7d984192599f316";
const hash = timestamp + privateKey + publicKey;
const hashMd5 = MD5.generate(hash);
const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`;

const listaPersonagens = document.querySelector("#lista-personagens");

let pagina = 0;
let herois = [];

const buscarPersonagens = async (pagina) => {
  try {
    if (herois.length === 0) {
      const resposta = await fetch(url);
      const dados = await resposta.json();
      herois = dados.data.results;
    }

    pagina = Math.min(Math.max(pagina, 0), herois.length - 1);

    const hero = herois[pagina];

    const html = `
      <div class="box">
        <h1> ${hero.name}</h1>
        <img class="imagem" src="${hero.thumbnail.path}.${hero.thumbnail.extension}">

        <ul>
          <p>Revistas</p>
          <li>${hero.comics.items[0].name}</li>
          <li>${hero.comics.items[1].name}</li>
        </ul>
        <ul>
          <p>Séries</p>
          <li>${hero.series.items[0].name}</li>
          <li>${hero.series.items[1].name}</li>
        </ul>
        <div class="botao">
        <button onclick="buscarPersonagens(--pagina)"><</button>
        <button onclick="buscarPersonagens(++pagina)">></button>
        </div>
      </div>
      
    `;
    listaPersonagens.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
};

buscarPersonagens(pagina);
