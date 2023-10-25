export function pagination() {
   // async function getData() {
   //    const response = await fetch("../components/data.json")
   //    const data = await response.json()
   //    return data
   // }

   // async function main() {
   //    const postsData = await getData()
   //    let currentPage = 1, rows = 10;

   //    function filteredData(postsData) {
   //       const filters = document.querySelector('.filter__list');
   //       let clickedCategory;
   //       filters.addEventListener("click", (e) => {
   //          clickedCategory = e.target.innerHTML;
   //          return postsData.filter(product => product.size.includes(+clickedCategory))
   //       })
   //    }
   //    const filteredData = filteredData(postsData)
   //    function displayList(arrData, rowPerPage, page) {
   //       page--
   //       const cardsEl = document.querySelector('[data-id="products"]'),
   //          start = rowPerPage * page,
   //          end = rowPerPage + start;
   //       const paginatedData = arrData.slice(start, end)
   //       cardsEl.innerHTML = "";
   //       paginatedData.forEach(el => {
   //          const cardEl = document.createElement('div');
   //          cardEl.classList.add("card")
   //          cardEl.classList.add("card--catalog")
   //          cardEl.innerHTML = `
   //          <a href="#" class="card__image">
   //          <img 
   //             src= ${el.src}
   //             alt="${el.name}">
   //          </a >
   //       <a href="#" class="card__title" title="${el.name}">${el.name}</a>
   //       <div class="card-content">
   //          <p class="card__price">As low as <strong>${el.price}</strong></p>
   //          <button class="card__button button uppercase">
   //          <img class="card__button-image" src="../image/collections/add-button.svg" alt="shopping bag logos">
   //             <span class="uppercase">ADD TO CART</span>
   //          </button>
   //       </div>
   //          `
   //          cardsEl.prepend(cardEl)
   //       })
   //          ;

   //    }
   //    function displayPagination(arrData, rowPerPage) {
   //       const paginationEl = document.querySelector(".pagination");
   //       const pagesCount = Math.ceil(arrData.length / rowPerPage);
   //       const ulEl = document.createElement('ul')
   //       ulEl.classList.add('pagination__list')

   //       for (let i = 0; i < pagesCount; i++) {
   //          const liEl = displayPaginationBtn(i + 1)
   //          ulEl.appendChild(liEl)
   //       }
   //       paginationEl.appendChild(ulEl)
   //    }
   //    function displayPaginationBtn(page) {
   //       const liEl = document.createElement('li')
   //       liEl.classList.add('pagination__item')
   //       liEl.innerText = page
   //       if (currentPage == page) liEl.classList.add("pagination__item--active");

   //       liEl.addEventListener("click", () => {
   //          currentPage = page
   //          let currentItemLi = document.querySelector("li.pagination__item--active")
   //          currentItemLi.classList.remove("pagination__item--active")
   //          liEl.classList.add('pagination__item--active')
   //          displayList(postsData, rows, currentPage)
   //       })

   //       return liEl
   //    }
   //    displayList(postsData, rows, currentPage)
   //    displayPagination(postsData, rows)
   //    // filteredData(postsData)
   // }


   // main()
   // async function getData() {
   //    const response = await fetch("../components/data.json");
   //    const data = await response.json();
   //    return data;
   // }

   // async function main() {
   //    const postsData = await getData();
   //    let currentPage = 1;
   //    let selectedSizes = [];
   //    let selectedColors = []
   //    let rows = 10;

   //    function displayList(arrData, rowPerPage, page) {
   //       page--;
   //       const cardsEl = document.querySelector('[data-id="products"]');
   //       const start = rowPerPage * page;
   //       const end = rowPerPage + start;
   //       const paginatedData = arrData.slice(start, end);
   //       cardsEl.innerHTML = "";
   //       paginatedData.forEach(el => {
   //          const cardEl = document.createElement('div');
   //          cardEl.classList.add("card");
   //          cardEl.classList.add("card--catalog");
   //          cardEl.innerHTML = `
   //             <a href="#" class="card__image">
   //                <img 
   //                   src="${el.src}"
   //                   alt="${el.name}">
   //             </a>
   //             <a href="#" class="card__title" title="${el.name}">${el.name}</a>
   //             <div class="card-content">
   //                <p class="card__price">As low as <strong>${el.price}</strong></p>
   //                <button class="card__button button uppercase">
   //                   <img class="card__button-image" src="../image/collections/add-button.svg" alt="shopping bag logos">
   //                   <span class="uppercase">ADD TO CART</span>
   //                </button>
   //             </div>
   //          `;
   //          cardsEl.appendChild(cardEl);
   //       });
   //    }

   //    function displayPaginationBtn(page) {
   //       const liEl = document.createElement('li');
   //       liEl.classList.add('pagination__item');
   //       liEl.innerText = page;
   //       if (currentPage == page) liEl.classList.add("pagination__item--active");

   //       liEl.addEventListener("click", () => {
   //          currentPage = page;
   //          let currentItemLi = document.querySelector("li.pagination__item--active");
   //          currentItemLi.classList.remove("pagination__item--active");
   //          liEl.classList.add('pagination__item--active');
   //          displayList(filteredData(), rows, currentPage);
   //       });

   //       return liEl;
   //    }

   //    function displayPagination(arrData, rowPerPage) {
   //       const paginationEl = document.querySelector(".pagination");
   //       const pagesCount = Math.ceil(arrData.length / rowPerPage);
   //       const ulEl = document.createElement('ul');
   //       ulEl.classList.add('pagination__list');

   //       for (let i = 0; i < pagesCount; i++) {
   //          const liEl = displayPaginationBtn(i + 1);
   //          ulEl.appendChild(liEl);
   //       }
   //       paginationEl.innerHTML = "";
   //       paginationEl.appendChild(ulEl);
   //    }

   //    function filteredData() {
   //       if (selectedSizes.length === 0 && selectedColors.length === 0) {
   //          return postsData; // Если размеры не выбраны, вернуть все товары
   //       } else {
   //          // Фильтруйте товары по всем выбранным размерам
   //          return postsData.filter(product => selectedSizes.some(size => product.size.includes(size)));
   //       }

   //    }

   //    // Обработчик для выбора размера
   //    const filters = document.querySelector('.filter__list.filter__list--size');
   //    filters.addEventListener("click", (e) => {
   //       if (e.target.classList.contains('filter__list-item')) {
   //          const clickedSize = +e.target.innerHTML;

   //          if (selectedSizes.includes(clickedSize)) {
   //             // Если размер уже выбран, уберите его из массива
   //             selectedSizes = selectedSizes.filter(size => size !== clickedSize);
   //             e.target.classList.remove('filter__list-item--selected');
   //          } else {
   //             // Если размер не был выбран, добавьте его в массив
   //             selectedSizes.push(clickedSize);
   //             e.target.classList.add('filter__list-item--selected');
   //          }

   //          // Обновите отображение товаров
   //          const paginationEl = document.querySelector(".pagination");
   //          paginationEl.innerHTML = "";
   //          displayList(filteredData(), rows, currentPage);
   //          displayPagination(filteredData(), rows, currentPage);
   //       }
   //       const filtersColor = document.querySelector(".filter__list.filter__list--color")
   //       filtersColor.addEventListener('click', (e) => {
   //          if (e.target.classList.contains('filter__list-item')) {
   //             const clickedColor = e.target.getAttribute('data-color');
   //             if (selectedColors.includes(clickedColor)) {
   //                selectedColors = selectedColors.filter(color => color !== clickedColor);
   //                e.target.classList.remove('filter__list-item--selected');
   //             } else {
   //                selectedColors.push(clickedColor);
   //                e.target.classList.add('filter__list-item--selected')
   //             }
   //          }
   //          const paginationEl = document.querySelector(".pagination");
   //          paginationEl.innerHTML = "";
   //          displayList(filteredData(), rows, currentPage);
   //          displayPagination(filteredData(), rows, currentPage);
   //       })
   //    });

   //    displayList(filteredData(), rows, currentPage);
   //    displayPagination(filteredData(), rows);
   //    console.log(selectedSizes);
   // }

   // main();

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
         if (currentPage == page) liEl.classList.add("pagination__item--active");

         liEl.addEventListener("click", () => {
            currentPage = page;
            let currentItemLi = document.querySelector("li.pagination__item--active");
            currentItemLi.classList.remove("pagination__item--active");
            liEl.classList.add('pagination__item--active');
            displayList(filteredData(), rows, currentPage);
         });

         return liEl;
      }

      function displayPagination(arrData, rowPerPage) {
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
            return postsData; // Если размеры и цвета не выбраны, вернуть все товары
         } else {
            // Фильтруйте товары по всем выбранным размерам и цветам
            return postsData.filter(product =>
               selectedSizes.some(size => product.size.includes(size)) &&
               selectedColors.some(color => product.color.includes(color))
            );
         }
      }

      // Обработчик для выбора размера
      const filters = document.querySelector('.filter__list');
      filters.addEventListener("click", (e) => {
         if (e.target.classList.contains('filter__list-item')) {
            const clickedSize = +e.target.innerHTML;

            if (selectedSizes.includes(clickedSize)) {
               // Если размер уже выбран, уберите его из массива
               selectedSizes = selectedSizes.filter(size => size !== clickedSize);
               e.target.classList.remove('filter__list-item--selected');
            } else {
               // Если размер не был выбран, добавьте его в массив
               selectedSizes.push(clickedSize);
               e.target.classList.add('filter__list-item--selected');
            }

            // Обновите отображение товаров
            const paginationEl = document.querySelector(".pagination");
            paginationEl.innerHTML = "";
            displayList(filteredData(), rows, currentPage);
            displayPagination(filteredData(), rows, currentPage);
         }
      });

      // Обработчик для выбора цвета
      const colorFilters = document.querySelector('.filter__list.filter__list--color'); // Замените '.filter__list.filter__list--color' на соответствующий селектор

      colorFilters.addEventListener("click", (e) => {
         if (e.target.classList.contains('filter__list-item.filter__list-item--color')) {
            const clickedColor = e.target.dataset.color; // Предполагается, что цвет хранится в атрибуте 'data-color'

            if (selectedColors.includes(clickedColor)) {
               // Если цвет уже выбран, уберите его из массива
               selectedColors = selectedColors.filter(color => color !== clickedColor);
               e.target.classList.remove('filter__list-item--selected');
            } else {
               // Если цвет не был выбран, добавьте его в массив
               selectedColors.push(clickedColor);
               e.target.classList.add('filter__list-item--selected');
            }

            // Обновите отображение товаров
            const paginationEl = document.querySelector(".pagination");
            paginationEl.innerHTML = "";
            displayList(filteredData(), rows, currentPage);
            displayPagination(filteredData(), rows, currentPage);
         }
      });

      displayList(filteredData(), rows, currentPage);
      displayPagination(filteredData(), rows);
      console.log(selectedSizes);
   }

   main();
}
// 