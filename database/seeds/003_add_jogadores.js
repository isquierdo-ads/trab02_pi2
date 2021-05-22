exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("jogadores")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("jogadores").insert([
        {
          nome: "Fernando",
          foto: "https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia-360-2.png",
          idade: 32,
          salario: 10000,
          clube_id: 1,
          nacionalidade_id: 2,
        },
        {
          nome: "Marcos",
          foto: "https://i1.wp.com/collbusinessnews.com.br/wp-content/uploads/2018/10/Albano-seja-uma-pessoa-melhor.jpg?resize=442%2C441&ssl=1",
          idade: 22,
          salario: 2300,
          clube_id: 1,
          nacionalidade_id: 4,
        },
        {
          nome: "Rogério",
          foto: "https://i.pinimg.com/736x/86/1f/43/861f4309210600d580c216e6aeb64d77.jpg",
          idade: 26,
          salario: 5800,
          clube_id: 4,
          nacionalidade_id: 1,
        },
        {
          nome: "Tião",
          foto: "https://www.capila.com.br/wp-content/uploads/2019/12/quantos-fios-de-cabelo-tem-uma-pessoa-com-25-anos-29122019.jpg",
          idade: 19,
          salario: 4200,
          clube_id: 3,
          nacionalidade_id: 4,
        },
        {
          nome: "Otaviano",
          foto: "https://i.pinimg.com/736x/86/1f/43/861f4309210600d580c216e6aeb64d77.jpg",
          idade: 29,
          salario: 14200,
          clube_id: 5,
          nacionalidade_id: 3,
        },
      ]);
    });
};
