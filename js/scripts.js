"use  strict"


// let numberSeven = Number(prompt('Введите число 7'));
// let monthBirtDay = Number(prompt('Введите месяц вашего рождения'));



// let calc = numberSeven * monthBirtDay;
// console.log(calc);

// calc = calc - 1;
// console.log(calc);

// calc = calc * 13;
// console.log(calc);


// let birthday = Number(prompt('Добавьте число вашего рождения'));

// calc = calc + birthday;
// console.log(calc);

// calc = calc + 3;
// console.log(calc);

// calc = calc * 11;
// console.log(calc);

// calc = calc - monthBirtDay;
// console.log(calc);


// calc = calc - birthday;
// console.log(calc);

// calc = calc / 10;

// calc = calc + 11;

// calc = calc / 100;
// console.log(calc);

// document.write(`Поздравляем, вы родились  ${calc}`);

// let name = prompt(`Какое официальное название JavaScript?`);


// if (name == "ECMAScript") {
// 	alert("Верно!");
// } else {
// 	alert("Не знаете? ECMAScript!");
// }\


// let result;
// let a = 5;
// let b = 1;

// result = (a + b < 4) ? "Мало" : "Много";
// console.log(result);

// let login = prompt('Введите свою должность');
// let message = (login == 'Сотрудник') ? 'Привет' :
// 	(login == 'Директор') ? 'Здравствуйте' :
// 		(login == '') ? 'Нет логина' :
// 			'';
// alert(message);


// let number = prompt('Введите число');

// if (number > 0) {
// 	alert('Значение больше 0')
// } else if (number < 0) {
// 	alert('Значение меньше 0')
// } else if (number == 0) {
// 	alert('Значение равно 0')
// }


/*
======================================================Циклы for и while============================================================================
*/

// let num = 5;

// while (num < 10) {
// 	console.log(num);
// 	num++


// }

// let i = 3;
// while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
// 	console.log(i);
// 	i--;
// }


// let i = 2;
// do {
// 	console.log(i);
// 	i++;
// } while (i < 2);

// let num = 1;
// while (num < 6) {
// 	console.log(num);
// 	num++
// }


// let num = 8;
// while (num) {
// 	console.log(num);
// 	num--
// }

// let num = 0;
// while (num < 3) {
// 	console.log(num);
// 	num++
// }


// Name: for (let num = 0; num < 2; num++) {
// 	for (let size = 0; size < 3; size++) {
// 		if (size == 1) {
// 			break Name;

// 		}
// 		console.log(size);
// 	}
// }

// let num = 2
// for (; num <= 10; num++) {
// 	if (num % 2 == 0) {
// 		console.log(num);
// 	}

// }


// let i = 0;

// while (i < 3) {
// 	console.log(`number ${i}`);
// 	i++;
// }

// let num;

// do {
// 	num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);


/*
=====================Числа======================
*/

// let num = 5.845;

// console.log(Math.round(num * 100) / 100);

// let nums = 12.36;
// alert(nums.toFixed(1));



// let num = 1.005 + Number.EPSILON;

// let result = (Math.round(num * 100) / 100)
// console.log(result);



// console.log(parseFloat('135.58px'));


// let value = 58 + "Фрилансер";
// if (isNaN(value)) {
// 	console.log('Результат выражения Nan');
// }

// console.log(Math.max(10, 58, 39, -150, 0));
// console.log(Math.floor(58.858));


// let numOne = +prompt("Введите первое число");
// let numTwo = +prompt('Введите второе число');


// alert(numOne + numTwo);




/*
=====================Функции======================
*/

// function nameMain() {
// 	console.log('Hello');
// }

// nameMain();





// let nameFirst = "Igor";

// function nameMain() {
// 	nameFirst = "jeka"
// 	let message = "hello," + " " + nameFirst;
// 	console.log(message);

// }

// nameMain();


// ===========Параметры============================


// function prew(one, two) {
// 	let result = one + two;
// 	console.log(result);
// }

// prew(1, 2);





// function showMessage(from, text) { // аргументы: from, text
// 	alert(from + ': ' + text);
// }

// showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
// showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)






// ===========Функции-колбэки============================

// function previews(numberFirst, numberSecond, big, small) {

// 	let summ = numberFirst + numberSecond;

// 	if (summ < 6) {
// 		small();
// 	} else {
// 		big();
// 	}

// }


// function showBigMessage() {
// 	console.log("Я большое 6");

// }
// function showSmallMessage() {
// 	console.log("Я меньше 6");

// }



// previews(2, 2, showBigMessage, showSmallMessage);


// ===========Возврат функции============================

// function sum(a, b) {
// 	return a + b;
// }

// let result = sum(1, 2);
// console.log(result); // 3


// =================================



// function calcSumm(a, b) {
// 	let numSumm = a + b;
// 	return numSumm;
// }
// let result = calcSumm(1, 2);
// console.log(result);


/// =====================================Функциональное выражение===================================================

// =====Функция внутри блока не видна за его пределами======

// if (2 > 1) {
// 	function getSumm() {
// 		let summ = 1 + 3;
// 		console.log(summ);
// 	};
// }
// getSumm();


// ===========видна за его пределами===========================


// let getSumm;

// if (2 > 1) {
// 	getSumm = function () {
// 		let summ = 1 + 3;
// 		console.log(summ);
// 	};
// }

// getSumm();






// ===========Однострочная функция============================


// let getMessage = (text, name) => text + ", " + name;
// console.log(getMessage("Привет", "Вася"));




// ===========Многострочная функция============================
// let getMessage = (text, name) => {
// 	let summ = text + ', ' + name;
// 	return summ;
// };
// console.log(getMessage("Привет", "Вася"));












// ===============================Массивы============================


// let someArray = [];
// console.log(someArray);
// console.log(typeof someArray);


// let listItems = document.querySelector('.list__item');

// listItems.forEach(function (listItem) {


// });





//====================DOM=======================================





//Навигация по документу


// const htmlElement = document.documentElement
// console.log(htmlElement);


// const headElement = document.head
// console.log(headElement);

// const bodyElement = document.body
// console.log(bodyElement);




//Получаем обьект body

// const bodyElement = document.body;
// console.log(bodyElement);
//Первый и последний дочерние элементы

// const firstChildNode = bodyElement.firstChild;
// console.log(firstChildNode);

// const lastChildNode = bodyElement.lastChild;
// console.log(lastChildNode);




//Коллекция childNodes содержит список всех детей,
// включая текстовые узлы
// const childNodes = bodyElement.childNodes;
// console.log(childNodes);


//Для проверки наличия дочерних узлов
//существует функция hasChildNodes
// console.log(bodyElement.hasChildNodes());



//Соседние и родительские узлы

// const previousSiblingNode = bodyElement.previousSibling;
// console.log(previousSibling);


// const nextSiblingNode = bodyElement.nextSibling;
// console.log(nextSibling);

// const parentNode = bodyElement.parentNode;
// console.log(parentNode);


//Получаем обьект body
// const bodyElement = document.body;

//Получа ем коллекцию дочерних узлов
// const childNodes = bodyElement.childNodes;

//Перебор коллекции
// for (let node of childNodes) {
// 	console.log(node); // покажет все узлы из коллекции
// }








//Практика//

// const bodyElement = document.body;
// console.log(bodyElement);

// const firstChild = bodyElement.firstChild;
// console.log(firstChild);

// const lastChild = bodyElement.lastChild;
// console.log(lastChild);





// const bodyElement = document.body;

//Получаем коллекцию всех дочерних узлов
// const childNodes = bodyElement.childNodes
// console.log(childNodes);

//Получаем коллекцию всех дочерних элементов
// const children = bodyElement.children
// console.log(children);

//Первый и дочерние элементы
// const firstElementChild = bodyElement.firstElementChild
// console.log(firstElementChild);

// const lastElementChild = bodyElement.lastElementChild
// console.log(lastElementChild);

// for (let items of childNodes)
// 	console.log(items);


//Соседние и родительский элементы

// const previousSibling = bodyElement.previousElementSibling;
// const nextSibling = bodyElement.nextElementSibling;
// const parentSibling = bodyElement.parentElement;


// console.log(previousSibling);
// console.log(nextSibling);
// console.log(parentSibling);






//document.querySelectorAll

// const elemsOne = document.querySelectorAll('.lesson__list')
// console.log(elemsOne);

// const elemsTwo = document.querySelectorAll('li')
// console.log(elemsTwo);

// for (let item of elemsTwo)
// 	console.log(item);

// elemsTwo.forEach(item => {
// 	console.log(item);
// });


//document.querySelector

// const elemsOne = document.querySelector('.lesson__list')
// console.log(elemsOne);



//closest

// const elemsOne = document.querySelector('.lesson__sub-list')
// console.log(elemsOne);

// const closest = elemsOne.closest('.lesson__list')
// console.log(closest);




//Получили обьект и применили свойство навигации

// const text = document.querySelector('.lesson__text');
// console.log(text);

// const nextElement = text.nextElementSibling;
// console.log(nextElement);


//matches


// const list = document.querySelectorAll('.lesson__item');
// console.log(list);

// for (let item of list) {
// 	if (item.matches('[class$="lesson__item_red"]')) {
// 		console.log('Красный');

// 	} else if (item.matches('[class$="lesson__item_blue"]')) {
// 		console.log('Синий');
// 	}
// }


//Изменение DOM

//Получаем обьект
// const text = document.querySelector('.lesson__text');
// console.log(text);

//Получаем содержимое обьекта "как есть" вместе с HTML
// const textElement = text.innerHTML
// console.log(textElement);

// Дописываем содержимое обьекта
// text.innerHTML =

// 	`<p>${textElement} </p> <p> Привет! Я изменился в <span class="yellow"> лучшую </span> сторону</p>`

// console.log(text.innerHTML);



//outerHTML


// const textTwo = document.querySelector('.lesson__text');


// const textContent = textTwo.outerHTML
// console.log(textContent);

// textTwo.outerHTML = `<p> Привет! Я изменился полностью</p>`


// console.log(textTwo.outerHTML);



//Создание элементов и узлов

// const textElement = document.querySelector('.lesson__text');

// const newElement = document.createElement('div')
// console.log(newElement);

// newElement.innerHTML = `Привет! я <span class="yellow">Жека</span> `;

// console.log(newElement);

// textElement.before(newElement);
// textElement.after(newElement);
// textElement.prepend(newElement);
// textElement.append(newElement);




//Методы вставки


//insertAdjacentHTML
// const textElement = document.querySelector('.lesson__text');

// textElement.insertAdjacentHTML(
// 	'afterend',
// 	`<p> Привет! Я попытлася вставить элемент после <span class="yellow">textElement</span> </p>`
// );

// textElement.insertAdjacentHTML(
// 	'beforebegin',
// 	`<p> Привет! Я попытлася вставить элемент перед <span class="yellow">textElement</span> </p>`
// );


// textElement.insertAdjacentHTML(
// 	'afterbegin',
// 	`<p> Привет! Я попытлася вставить элемент в начало <span class="yellow">textElement</span> </p>`
// );



// textElement.insertAdjacentHTML(
// 	'beforeend',
// 	`<p> Привет! Я попытлася вставить элемент в конец <span class="yellow">textElement</span> </p>`
// );


//Перенос элемента
// Все методы вставки автоматически удаляют узлы со старых мест

// const blockList = document.querySelector('.lesson__list')

// const title = document.querySelector('.title')

// blockList.append(title);





//Клонирование
//cloneNode




//Получаем обьект
// const title = document.querySelector('.title')


//Глубокое клонирование вместе с содержимым
//Клонируем нужный обьект
// const titleClone = title.cloneNode(true);


//Получаем обьект, в который хотим склонировать другой обьект
// const blockList = document.querySelector('.lesson__list')
// blockList.append(titleClone);




//className
// Изменяем класс

// const elem = document.querySelector('.lesson__item_red')

// const elemClassName = elem.className

// elem.className = "red";



//classList
//Специальный обьект с методами для добавления/удаления одного класса


// const elem = document.querySelector('.lesson__item_red')

//Добавляет класс
// elem.classList.add('active');
//удаляет класс
// elem.classList.remove('active');
//добавляет класс, если его нет, удаляет, если есть
// elem.classList.toggle('active');
//проверят, если ли такой класс (возращает буливое значение)
// elem.classList.contains('active');




//Проверяем на наличия  класса
// const elem = document.querySelector('.lesson__item_red')
// elem.classList.add('active');


// if (elem.classList.contains('active')) {
// 	console.log(`Такой класс есть`);
// }


//Перечисляем все классы элемента с помощью for..of

// const elem = document.querySelector('.lesson__item_red')
// elem.classList.add('active');

// for (let className of elem.classList) {
// 	console.log(className);
// }






//CSS стили
//Управление стилями
//.style

// const elem = document.querySelector('.lesson__item_red')

// elem.style.color = 'green';
// elem.style.fontSize = '40px';
// console.log(elem);
// console.log(elem.style.fontSize);



//Полная перезапись стилей
//style.cssText

// const elem = document.querySelector('.lesson__item_red')

// elem.style.cssText = `
// color:black;
// font-size:60px;

// `;



//Вычисленные стили getComputedStyle(element, [pseudo]) прямо из css

// const elem = document.querySelector('.lesson__item_red')

// const elemValue = getComputedStyle(elem)
// console.log(elemValue.fontSize);

//Стиль псевдоэлемента
// const elemPseudo = getComputedStyle(elem, ["::before"])
// console.log(elemPseudo.backgroundColor);





//Получаем обьект
// const elem = document.querySelector('.lesson__item_red')
//Получаем значения свойства padding
// const elemValue = getComputedStyle(elem)
// console.log(elemValue.paddingLeft);

//Получаем самое число из свойства
// const paddingLeft = parseInt(elemValue.paddingLeft)
// console.log(paddingLeft);

//Добавляем отступ элементу
// elem.style.marginLeft = "30px";


// const text = document.querySelector('.lesson__text');


// text.setAttribute('set-attribute', "some-value")

// if (text.hasAttribute("set-attribute")) {
// 	console.log("set-attribute есть!");
// } else {
// 	console.log('Такого атрибута нету!');
// }

// const text = document.querySelector('.lesson__text');

// text.setAttribute("id", "300")

// console.log(text.id);

// text.id = "200";

// console.log(text.getAttribute("id"));



// const text = document.querySelector('.lesson__text');

// console.log(text.dataset.sizeValue);


// text.dataset.sizeValue = "100"

// console.log(text.dataset.sizeValue);




//==============Домашка==============================

// const atribute = document.querySelector('[data-say-hi]');

// console.log(atribute.dataset.sayHi);



// const elem = document.querySelectorAll('li');
// console.log(elem[1]);


// const collection = document.getElementsByClassName("like");
// console.log(collection);

// const list = document.querySelector("ul")
// list.insertAdjacentHTML(
// 	'beforeend',
// 	`<li>Пункт№3</li>`
// );



// Форма поиска



const searchForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');





document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.search__button')) {
		searchInput.classList.toggle('_active');
	}
	if (!event.target.closest('.search__form')) {
		searchInput.classList.remove('_active');
	}
}

document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape') {
		searchInput.classList.remove('_active');
	}

})


const searchLimit = searchInput.getAttribute('maxlength');
const searchCounter = document.querySelector('.search__text span');

searchCounter.innerHTML = searchLimit;

searchInput.addEventListener("keyup", searchSetCounter);
searchInput.addEventListener("keydown", function (event) {
	if (event.repeat) searchSetCounter();
});

function searchSetCounter() {
	const searchResult = searchLimit - searchInput.value.length;
	searchCounter.innerHTML = searchResult;
}









