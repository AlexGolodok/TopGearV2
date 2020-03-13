//сторінка сайту
var siteURL = "http://jokes.local/"; 
//створимо змінну для кнопки показати ще
var btnShowMore = document.querySelector('#show-more');
// створимо змінну для <input id="currentpage"> 
var currentpageInput = document.querySelector('#currentpage');

//функція кліку по кнопці Показати ще
function showMore() {	
	//створимо ajax запрос
	var ajax = new XMLHttpRequest();			
	ajax.open("GET", siteURL + "/modules/get_more.php?page=" + currentpageInput.value, false); // створимо запит в ajax		
	ajax.send(); // відправити запит на сервер		
	currentpageInput.value = +currentpageInput.value + 1; //додаємо номер сторінки в змінну при кожному запиті
	//якщо товарів нема, то прибираємо кнопку Показати ще
	if (ajax.response.trim() == '') {
        btnShowMore.innerText = "Жарти скінчились("; // вывод сообщения пользователю
        btnShowMore.style.transition = "1s"; // изменение стиля для кнопки
        setTimeout(function() {// задержка выполнения кода
                btnShowMore.style.opacity = "0"; // изменения стиля
                setTimeout(function () { // снова задержка изменения стиля
                        btnShowMore.style.display = "none"; // убераем кнопку из потокового документа
                }, 1000);
        }, 1000);
    }
	//кінець перевірки
	var numJokes = document.querySelector('#numJokes'); //вибираємо по селектору id numJokes
		numJokes.innerHTML = numJokes.innerHTML + ajax.response; //присвоїти вибраній змінній ajax запрос з виводом данних
}