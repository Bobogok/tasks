let input;

while (true) {
    input = prompt('Введите число, большее 100?', '');

    if (input > 100 || !input) {
        break;
    }
}


// do {
//     input = prompt("Введите число, большее 100?", 0);
// } while (input < 100 && input);