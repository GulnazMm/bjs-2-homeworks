function parseCount(number) {
    const result = Number.parseInt(number);
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}


function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        console.log(error);
    }

}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a > b + c || b > a + c || c > a + b) {
            throw new Error("Треугольник не существует")
        }
    }
    getPerimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    getArea() {
        let p = perimeter / 2;
        let s = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;
        return + s.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        let triangle2 = new Triangle(a, b, c);
    }
    catch (error) {
        return triangle2.getArea() {
            console.log("Ошибка! Треугольник не существует")

        }
        + triangle2.getPerimeter() {
            console.log("Ошибка! Треугольник не существует");

        }
    }
}





