
function getParabola() {
    const array = [];


    for (let i = 1; i <= 100; i++) {
        // arr.append(i ** 2)
        array.push(i ** 2);
    }

    return array;
}

const Ys = getParabola();

console.log(Ys);

