// Находим все строки таблицы
const allTr = document.querySelectorAll('.table tbody tr');

// Получаем поле ввода для поиска
const searchInputField = document.querySelector('#search');

// Добавляем обработчик события для поля поиска
searchInputField.addEventListener('input', function (e) {
   const searchStr = e.target.value.toLowerCase();

   // Для каждой строки проверяем, содержится ли поисковая строка в ячейке с названием книги
   allTr.forEach(tr => {
      const titleTd = tr.querySelector('td:nth-child(2)'); // столбец с названием книги
      if (titleTd && titleTd.innerText.toLowerCase().indexOf(searchStr) > -1) {
         tr.style.display = ''; // показываем строку, если совпадает
      } else {
         tr.style.display = 'none'; // скрываем строку, если не совпадает
      }
   });
});