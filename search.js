const userCardTemplate = document.querySelector("data-user-template")
const userCardContainer = document.querySelector("[data-user-cards-container]")
user = [
    {
      "id": 1,
      "title": "¿Es crowsworn una compia de Hollow Knight?",
      "name": "Leanne Graham",
      "date": "06-01-2022",
      "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo liguc.",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "title": "Pokemon Arceus no es lo que merece",
      "name": "Ervin Howell",
      "date": "06-01-2022",
      "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean coms nunc.",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "title": "Sifu, un beat em' up diferente",
      "name": "Clementine Bauch",
      "date": "06-01-2022",
      "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean com.",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    },
    {
      "id": 4,
      "title": "Habran noticias de FFVII Remake 2 este año",
      "name": "Patricia Lebsack",
      "date": "06-01-2022",
      "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.m justo.",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
    },
    {
      "id": 5,
      "title": "Consejos y recomendaciones para Master Duel",
      "name": "Chelsey Dietrich",
      "date": "06-01-2022",
      "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. aliquet nec, vulc",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
    },
    {
      "id": 6,
      "title": "Anuncian GTA VI",
      "name": "Mrs. Dennis Schulist",
      "date": "06-01-2022",
      "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoq.",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
    },
    {
      "id": 7,
      "title": "El nuevo Kirby se ve brutal",
      "name": "Kurtis Weissnat",
      "date": "06-01-2022",
      "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
    },
    {
      "id": 8,
      "title": "Pokemon Arceus no es lo que merece",
      "name": "Nicholas Runolfsdottir V",
      "date": "06-01-2022",
      "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
    },
    {
      "id": 9,
      "title": "¿Que esperar del Chrono Cross Remastered?",
      "name": "Glenna Reichert",
      "date": "06-01-2022",
      "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
    },
    {
      "id": 10,
      "title": "¿Qué está sucediendo con Kingdom Hearts Cloud?",
      "name": "Clementina DuBuque",
      "date": "06-01-2022",
      "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
    }
  ]
user
  (data => {
      data.array.forEach(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const title = card.querySelector("[data-title]")
        const author = card.querySelector("[data-author]")
        const date = card.querySelector("[data-date]")
        const body = card.querySelector("[data-body]")
        title.textContent = user.title
        author.textContent = user.username
        date.textContent = user.date
        body.textContent = user.body
        console.log(user)
        userCardContainer.append(card)
      });
  })
