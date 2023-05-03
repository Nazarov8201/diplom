


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


const itemsPerPage = 5;
const totalPages = Math.ceil(data.length / itemsPerPage);

function displayPage(pageNumber, data) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  const html = pageData.map(item => `<tr class="lib-tab-el"><td><a href="${item.href}">${item.name}</a></td><td>${item.autor}</td><td>${item.type}</td><td>${item.date}</td><td>${item.language}</td></tr>`).join('');

  list.innerHTML = html;
}

function handlePageClick(event) {
  const pageNumber = parseInt(event.target.dataset.pageNumber);

  if (pageNumber) {
    displayPage(pageNumber, data);
  }
}

function renderPagination() {
  const pagination = document.querySelector('.pagination');

  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `<div class ="lib-table-pagination-el"><div class ="pagination-list"><a href="#" data-page-number="${i}">${i}</a></div></div>`;
  }

  pagination.innerHTML = html;
  pagination.addEventListener('click', handlePageClick);
}

displayPage(1, data);
renderPagination();


    








