export function pagination() {
   async function getData() {
      const response = await fetch("../components/data.json")
      const data = await response.json()
      return data
   }

   async function main() {
      const postsData = await getData()
      let currentPage = 1, rows = 11;
      function displayList(arrData, rowPerPage, page) {
         page--
         const cardsEl = document.querySelector('[data-id="products"]'),
            start = rowPerPage * page,
            end = rowPerPage + start,
            paginatedData = arrData.slice(start, end);
         paginatedData.forEach(el => {
            const cardEl = document.createElement('div');
            cardEl.classList.add("card")
            cardEl.classList.add("card--catalog")
            cardEl.innerHTML = `
            <div class="card-image">
            <img class="card-image__pic"
               src= ${el.src}
               alt="${el.name}">
         </div >
         <a href="#" class="card__title" title="${el.name}">${el.name}</a>
         <div class="card-content">
            <p class="card__price">As low as <strong>${el.price}</strong></p>
            <button class="card__button button uppercase">
            <img class="card__button-image" src="../image/collections/add-button.svg" alt="shopping bag logos">
               <span class="uppercase">ADD TO CART</span>
            </button>
         </div>
            `
            cardsEl.prepend(cardEl)
         })

            ;

      }
      function displayPagination(arrData, rowPerPage) {
         const paginationEl = document.querySelector(".pagination");
         const pagesCount = Math.ceil(arrData.length / rowPerPage);
         const ulEl = document.createElement('ul')
         ulEl.classList.add('pagination__list')

         for (let i = 0; i < pagesCount; i++) {
            const liEl = displayPaginationBtn(i + 1)
            ulEl.appendChild(liEl)
         }
         paginationEl.appendChild(ulEl)
      }
      function displayPaginationBtn(page) {
         const liEl = document.createElement('li')
         liEl.classList.add('pagination__item')
         liEl.innerText = page
         liEl.addEventListener("click", () => {
            currentPage = page
            displayList(postsData, rows, currentPage)
         })

         return liEl
      }
      displayList(postsData, rows, currentPage)
      displayPagination(postsData, rows)
   }


   main()
}








// 