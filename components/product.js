// Создайте JavaScript-файл (например, product.js) и подключите его к вашей странице HTML

// product.js
async function getProductData(productId) {
   try {
      const response = await fetch("../components/data.json"); // Путь к вашей JSON-базе
      const data = await response.json();
      const product = data.find(item => item.id === productId);

      if (product) {
         document.querySelector(".product__image").style.backgroundImage = `url(${product.src})`;
         document.querySelector(".product__title").textContent = product.name;
         document.querySelector(".product__price strong").textContent = `$${product.price}`;

         // Заполните цвета
         const colorList = document.querySelector(".product__colors");
         colorList.innerHTML = '<span>COLOR:</span>';
         product.color.forEach(color => {
            const colorItem = document.createElement("li");
            colorItem.classList.add("product__color");
            colorItem.dataset.color = color;
            colorList.appendChild(colorItem);
         });

         // Заполните размеры
         const sizeList = document.querySelector(".product__sizes");
         sizeList.innerHTML = '';
         product.size.forEach(size => {
            const sizeItem = document.createElement("li");
            sizeItem.classList.add("product__size");
            sizeItem.textContent = size;
            sizeList.appendChild(sizeItem);
         });
      } else {
         // Если товар с указанным ID не найден
         console.log("Product not found");
      }
   } catch (error) {
      console.error("Error fetching product data", error);
   }
}

// Вызываем функцию с ID продукта, который вы хотите отобразить на странице
const productId = 1; // Замените 1 на ID конкретного продукта
getProductData(productId);