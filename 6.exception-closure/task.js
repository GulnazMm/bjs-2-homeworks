function parseCount(number) {
    Number.parseInt(number);
    if (Number.isNaN(number)) {
        throw new Error("Невалидное значение");
    }
    return number;
}


function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        (console.error("Невалидное значение"));
    } finally {return count}

}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    if (a > b + c || b > a + c || c > a + b); {
    throw new Error("Треугольник не существует");
}
getPerimeter() {
    console.log(a + b + c);
}

getArea() {
let p = (a + b + c) / 2;
let s = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
return s.toFixed(3);
}

function getTriangle (a, b, c) {
    try{
        return new Triangle;
    } catch (error){
        return new Triangle.getArea.getPerimeterr 
        (console.log (new Triangle.getArea.getPerimeter + "Ошибка! Треугольник не существует"));
    }
}
}


