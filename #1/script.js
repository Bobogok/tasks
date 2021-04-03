let userName = prompt('Введите ваше имя?');

if (userName != '' && isNaN(Number(userName))) { //преобразование строки в номер и проверка ее на NaN
    alert(userName + ', добро пожаловать!');
}
else {
    alert('Данные введены неверно!');
}