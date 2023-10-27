export function pagination() {
   async function getData() {
      const response = await fetch("../components/data.json");
      const data = await response.json();
      return data;
   }

   async function main() {
      const postsData = await getData();
      let currentPage = 1;
      let selectedSizes = [];
      let selectedColors = [];
      let rows = 10;

      function displayList(arrData, rowPerPage, page) {
         page--;
         const cardsEl = document.querySelector('[data-id="products"]');
         const start = rowPerPage * page;
         const end = rowPerPage + start;
         const paginatedData = arrData.slice(start, end);
         cardsEl.innerHTML = "";
         paginatedData.forEach(el => {
            const cardEl = document.createElement('div');
            cardEl.classList.add("card");
            cardEl.classList.add("card--catalog");
            cardEl.innerHTML = `
                  <a href="#" class="card__image">
                     <img 
                         src="${el.src}"
                         alt="${el.name}">
                  </a>
                  <a href="#" class="card__title" title="${el.name}">${el.name}</a>
                  <div class="card-content">
                     <p class="card__price">As low as <strong>${el.price}</strong></p>
                     <button class="card__button button uppercase">
                         <img class="card__button-image" src="../image/collections/add-button.svg" alt="shopping bag logos">
                         <span class="uppercase">ADD TO CART</span>
                     </button>
                  </div>
              `;
            cardsEl.appendChild(cardEl);
         });
      }

      function displayPaginationBtn(page) {
         const liEl = document.createElement('li');
         liEl.classList.add('pagination__item');
         liEl.innerText = page;
         if (currentPage === page) liEl.classList.add("pagination__item--active");

         liEl.addEventListener("click", () => {
            currentPage = page;
            let currentItemLi = document.querySelector("li.pagination__item--active");
            currentItemLi.classList.remove("pagination__item--active");
            liEl.classList.add('pagination__item--active');
            displayList(filteredData(), rows, currentPage);
         });

         return liEl;
      }

      function displayPagination(arrData, rowPerPage, page) {
         const paginationEl = document.querySelector(".pagination");
         const pagesCount = Math.ceil(arrData.length / rowPerPage);
         const ulEl = document.createElement('ul');
         ulEl.classList.add('pagination__list');

         for (let i = 0; i < pagesCount; i++) {
            const liEl = displayPaginationBtn(i + 1);
            ulEl.appendChild(liEl);
         }
         paginationEl.innerHTML = "";
         paginationEl.appendChild(ulEl);
      }

      function filteredData() {
         if (selectedSizes.length === 0 && selectedColors.length === 0) {
            return postsData;
         } else {
            return postsData.filter(product =>
               (selectedSizes.length === 0 || selectedSizes.some(size => product.size.includes(size))) &&
               (selectedColors.length === 0 || selectedColors.includes(product.color))
            );
         }
      }

      // Обработчик для выбора размера
      const filters = document.querySelector('.filter__list');
      filters.addEventListener("click", (e) => {
         if (e.target.classList.contains('filter__list-item')) {
            const clickedSize = +e.target.innerHTML;

            if (selectedSizes.includes(clickedSize)) {
               selectedSizes = selectedSizes.filter(size => size !== clickedSize);
               e.target.classList.remove('filter__list-item--selected');
            } else {
               selectedSizes.push(clickedSize);
               e.target.classList.add('filter__list-item--selected');
            }

            const paginationEl = document.querySelector(".pagination");
            paginationEl.innerHTML = "";
            displayList(filteredData(), rows, currentPage);
            displayPagination(filteredData(), rows, currentPage);
         }
      });

      // Обработчик для выбора цвета
      const colorFilters = document.querySelector('.filter__list.filter__list--color');
      colorFilters.addEventListener("click", (e) => {
         if (e.target.classList.contains('filter__list-item')) {
            const clickedColor = e.target.dataset.color;

            if (selectedColors.includes(clickedColor)) {
               selectedColors = selectedColors.filter(color => color !== clickedColor);
               e.target.classList.remove('filter__list-item--selected');
            } else {
               selectedColors.push(clickedColor);
               e.target.classList.add('filter__list-item--selected');
            }

            const paginationEl = document.querySelector(".pagination");
            paginationEl.innerHTML = "";
            displayList(filteredData(), rows, currentPage);
            displayPagination(filteredData(), rows, currentPage);
         }
      });

      const minPriceInput = document.getElementById('minPrice');
      const maxPriceInput = document.getElementById('maxPrice');
      const priceFilterButton = document.getElementById('priceFilter');

      priceFilterButton.addEventListener('click', () => {
         const minPrice = parseFloat(minPriceInput.value);
         const maxPrice = parseFloat(maxPriceInput.value);

         if (isNaN(minPrice) && isNaN(maxPrice)) {
            displayList(filteredData(), rows, currentPage);
         } else {
            const filteredByPrice = postsData.filter(product => {
               const productPrice = parseFloat(product.price);
               return (isNaN(minPrice) || productPrice >= minPrice) &&
                  (isNaN(maxPrice) || productPrice <= maxPrice);
            });

            displayList(filteredByPrice, rows, currentPage);
            displayPagination(filteredByPrice, rows, currentPage);
         }
      });

      displayList(filteredData(), rows, currentPage);
      displayPagination(filteredData(), rows, currentPage);
   }

   main();
}
// 