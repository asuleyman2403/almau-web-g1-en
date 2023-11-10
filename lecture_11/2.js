function getTriangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return s;
}

let s1 = getTriangleArea(3, 4, 5);
console.log(s1);

let s2 = getTriangleArea(4, 5, 7);
console.log(s2);

