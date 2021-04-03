let n = 10;

firstCycle: // continue передается на внешний цикл
for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue firstCycle;
        }
    }
    alert(i)
}