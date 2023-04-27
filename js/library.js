
let data = [
      {
            name: "Cyber Disobedience",
            autor: "Ben Stephenson",
            type:"Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "Le Boheme. Ver E",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "Le Boheme. Ver D",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "Промышленные печи и трубы",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "Совершенствование кондиционирования",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "Контроль качества зерна при хранении",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "Справочник по сушке и активному вентилированию зерна",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name:"Cyber Disobedience",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "Lighthousekeeping",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "The Adventures of Ethel King, the Female Nick Carter",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "An International Mission to the Moon",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "The Return of the Nyctalope",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "Night of the Nyctalope",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "The Nyctalope Steps In",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      },
      {
            name: "The Nyctalope and The Tower of Babel",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
      }
]


let list = document.querySelector(".lib-tab");
let searchInput = document.querySelector("#lib1");

addToList(data);

function addToList(filteredData){
      list.innerHTML = ""
      filteredData.map((item)=>{
            list.insertAdjacentHTML('beforeend', `<tr class=""><td>${item.name}</td><td>${item.autor}</td><td>${item.type}</td><td>${item.date}</td><td>${item.language}</td></tr>`);
      })
}

searchInput.addEventListener("input", ()=>{
      let filtered = data.filter((item)=>item.name.toLocaleLowerCase().startsWith(searchInput.value.toLocaleLowerCase()));

      addToList(filtered);
})


let mask = document.querySelector('.mask');

    window.addEventListener('load', () => {
      mask.classList.add('hide');
      setTimeout(() => {
        mask.remove();
      }, 600);
    });
