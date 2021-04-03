let a = prompt('Введите сторону a');
let b = prompt('Введите сторону b');
let c = prompt('Введите сторону c');

function triangleS(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
}

alert(`Площадь треугольника со сторонами ${a}, ${b}, ${c} = ${triangleS(a, b, c)}`)