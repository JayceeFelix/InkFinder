const data = [
  {
    id: 1,
    nome: "Fernando",
    sobre: "About Fernando",
    endereco: {
      Rua: "Fernando Street",
      Numero: "111",
      Bairro: "quintino cunha",
      cep: "60000000",
    },
    estilos: ["blackwork ", "glitch "],
    fotos: [require("../feed_photos/1_1.png"), "123_2.jpg", "123_3.png"],
    agenda: "123_calendar.json",
  },
  {
    id: 2,
    nome: "Isabele",
    sobre: "About Isabele",
    endereco: {
      Rua: "Isabelle Street",
      Numero: "222",
      Bairro: "Benfica",
      cep: "60888888",
    },
    estilos: ["minimalista ", "lineart "],
    fotos: [require("../feed_photos/2_1.png"), "456_2.jpg", "456_3.png"],
    agenda: "456_calendar.json",
  },
  {
    id: 3,
    nome: "Sheila",
    sobre: "About Sheila",
    endereco: {
      Rua: "Sheila Street",
      Numero: "444",
      Bairro: "messejana",
      cep: "60252556",
    },
    estilos: ["tribal ", "lineart "],
    fotos: [require("../feed_photos/3_1.png"), "t3_2.jpg", "t3_3.png"],
    agenda: "t3_calendar.json",
  },
];

function arrayEstilos() {
  {
    data.estilos.map((item) => <Text>{item}</Text>);
  }
}

console.log(resArr);
