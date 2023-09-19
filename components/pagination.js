export function pagination() {
   async function getData() {
      const response = await fetch("../components/data.json")
      const data = await response.json()
      return data
   }

   async function main() {
      const postsData = await getData()
      let currentPage = 1, rows = 10;
      function displayList(arrData, rowPerPage, page) {
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
         <h3 class="card__title">${el.name}</h3>
         <div class="card-content">
            <p class="card__price">As low as <strong>${el.price}</strong></p>
            <button class="card__button button uppercase">
               <span class="uppercase">ADD TO CART</span>
            </button>
         </div>
            `
            cardsEl.appendChild(cardEl)
         })

            ;

      }
      function displayPagination(arrData, rowPerPage) {
         const paginationEl = document.querySelector(".pagination");
         const pagesCount = Math.ceil(arrData.lenght / rowPerPage)
      }
      function displayPaginationBtn() { }
      displayList(postsData, rows, currentPage)
   }


   main()
}








// 