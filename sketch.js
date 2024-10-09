// Madagascar, 12, animação, comédia, aventura, família
// Naruto, 10,Ação, Anime, Aventura, Comédia, Drama, Fantasia
// Sword Art Online, 12,Ação, Anime, Aventura, Drama, Fantasia, Romance
// Death Note, 16, Anime, Drama, Mistério, Policial, Thriller
// One Piece, 10, Ação, Animação, Aventura, Comédia, Drama, Fantasia
// Tonikaku Kawai, 12, Anime, Comédia, Romance
// Mazaropi, Livre, Documentário
// Os Trapalões, Livre, Comédia, Família, Nacional 
// Paulinho Mixaria, Livre, Comédia, Nacional
// Os três patetas, 12, Comédia

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 16) {
      return "Death Note";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Paulinho Mixaria";          
        } else{
         return "One Piece";
        }
      } else {
        if (gostaDeFantasia) {
          return "Sword Art Online";
        } else {
          return "Naruto";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Madagascar";
    } else {
      return "Tonikaku Kawai";
    }
  }
}

