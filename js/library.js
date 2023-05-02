


let data = [
      {
            name: "Fact Ful Ness",
            autor: "Xans Rosling",
            type:"Badiy Adabiyot",
            date: "2010",
            language: "Ingliz Tili",
            href: "./_book.html"
      },
      {
            name: "The Furrows",
            autor: "Namwali Serpell",
            type: "Badiy Adabiyot",
            date: "2012",
            language: "Ingliz Tili",
            href: "./_book-1.html"
      },
      {
            name: "We Don`t Know Ourselves",
            autor: "Fintan O`toole",
            type: "Badiy Adabiyot",
            date: "2008",
            language: "Ingliz Tili",
            href: "./_book-2.html"
      },
      {
            name: "Solito: A Memoir",
            autor: "Javier Zamora",
            type: "Badiy Adabiyot",
            date: "2014",
            language: "Ingliz Tili",
            href: "./_book-3.html"
      },
      {
            name: "Fairy Tale",
            autor: "Stephen King",
            type: "Badiy Adabiyot",
            date: "2020",
            language: "Ingliz Tili",
            href: "./_book-4.html"
      },
      {
            name: "The Escape Artist",
            autor: "Jonathan Freedland",
            type: "Badiy Adabiyot",
            date: "2021",
            language: "Ingliz Tili",
            href: "./_book-5.html"
      },
      {
            name: "Reality+",
            autor: "David Chalmers",
            type: "Badiy Adabiyot",
            date: "2020",
            language: "Ingliz Tili",
            href: "./_book-6.html"
      },
      {
            name:"Horse",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
            href: "./_book-7.html"
      },
      {
            name: "Chip War",
            autor: "Chris Miller",
            type: "Badiy Adabiyot",
            date: "2021",
            language: "Ingliz Tili",
            href: "./_book-8.html"
      },
      {
            name: "History Of The Camputer",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
            href: "./_book-9.html"
      },
      {
            name: "Our Missing Hearts",
            autor: "Ben Stephenson",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
            href: "./_book-10.html"
      },
      {
            name: "The Nowhere Office",
            autor: "Julia Hobswabm",
            type: "Badiy Adabiyot",
            date: "2021",
            language: "Ingliz Tili",
            href: "./_book-11.html"
      },
      {
            name: "Personal Finance For Dummies",
            autor: "Eric Tayson",
            type: "Badiy Adabiyot",
            date: "2020",
            language: "Ingliz Tili",
            href: "./_new-book-1.html"
      },
      {
            name: "Why Didn`t They Teach Me This In School?",
            autor: "Cary Siegel",
            type: "Badiy Adabiyot",
            date: "2022",
            language: "Ingliz Tili",
            href: "./_new-book-2.html"
      },
      {
            name: "Корпоротивные Финансы Для Чайников",
            autor: "Maykl Tellard",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
            href: "./_new-book-3.html"
      },
      {
            name: "Корпоротивные Финансы Для Чайников",
            autor: "Maykl Tellard",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
            href: "./_new-book-3.html"
      },
      {
            name: "Корпоротивные Финансы Для Чайников",
            autor: "Maykl Tellard",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
            href: "./_new-book-3.html"
      },
      {
            name: "Корпоротивные Финансы Для Чайников",
            autor: "Maykl Tellard",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
            href: "./_new-book-3.html"
      },
      {
            name: "Корпоротивные Финансы Для Чайников",
            autor: "Maykl Tellard",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
            href: "./_new-book-3.html"
      },
      {
            name: "Корпоротивные Финансы Для Чайников",
            autor: "Maykl Tellard",
            type: "Badiy Adabiyot",
            date: "2023",
            language: "Ingliz Tili",
            href: "./_new-book-3.html"
      }
]


let list = document.querySelector(".lib-tab");
let searchInput = document.querySelector("#lib1");

addToList(data);

function addToList(filteredData){
      if(filteredData.length === 0){
        list.innerHTML = `<tr class="lib-tab-not"><td colspan="5"><div class="lib-tab-not-el"><span>hesh narsa topilmadi.</span><p>Kiritilgan qidiruv soʻzi boʻyicha hech qanday natija topilmadi.</p></div></td></tr>`;
      } else {
        list.innerHTML = "";
        filteredData.map((item)=>{
          list.insertAdjacentHTML('beforeend', `<tr class="lib-tab-el"><td><a href="${item.href}">${item.name}</a></td><td>${item.autor}</td><td>${item.type}</td><td>${item.date}</td><td>${item.language}</td></tr>`);
        });
      }
    }
    

searchInput.addEventListener("input", ()=>{
      let filtered = data.filter((item)=>item.name.toLocaleLowerCase().startsWith(searchInput.value.toLocaleLowerCase()));

      addToList(filtered);
})

// const table = document.querySelector('table'); // <table> tegini topamiz
// const tbody = table.querySelector('tbody'); // <tbody> tegini topamiz

// data.forEach(item => { // data massivida har bir element uchun
//   const tr = document.createElement('tr'); // <tr> elementini yaratamiz
//   for (const key in item) { // elementdagi har bir property uchun
//     const td = document.createElement('td'); // <td> elementini yaratamiz
//     td.textContent = item[key]; // <td>ning matnini element qiymatiga tenglashtiramiz
//     tr.appendChild(td); // <td> elementini <tr> elementiga qo'shamiz
//   }
//   tbody.appendChild(tr); // <tr> elementini <tbody> elementiga qo'shamiz
// });


// Kutubxona sahifasining URL manzilini o'zgartirib qo'ying
const href = './_library.html';

// 100 ta kitobni ko'rish uchun sahifalar sonini topamiz
fetch(href)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Malumotlar o'zgaruvchisiga tbodyni joylaymiz
    const data = doc.querySelector('tbody');
    
    // Malumotlar o'zgaruvchisida 10 ta kitobni topamiz
    const books = data.querySelectorAll('tr');
    
    // 100 ta kitobni ro'yxatini saqlash uchun bo'sh ro'yxat yaratamiz
    const allBooks = [];
    
    // Har bir sahifadan 10 ta kitobni olish uchun forEach() metodidan foydalanamiz
    books.forEach(book => {
      const name = book.querySelector('td:nth-child(1)').textContent;
      const author = book.querySelector('td:nth-child(2)').textContent;
      const type = book.querySelector('td:nth-child(3)').textContent;
      const date = book.querySelector('td:nth-child(4)').textContent;
      const language = book.querySelector('td:nth-child(5)').textContent;
      const href = book.querySelector('td:nth-child(6) a').href;
      
      // Har bir kitobni ro'yxatga qo'shamiz
      allBooks.push({ name, author, type, date, language, href });
    });
    
    console.log(allBooks);
  });





