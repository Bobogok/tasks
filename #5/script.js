// for (let i = 0; i < 5; i++) {
//     if (i == 3) {
//         alert(i);
//         break
//     }
// }

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Значение на координатах (${i}, ${j})`, '');

        if (!input) {
            break outer;
        }
    }
}

alert('Готово!');