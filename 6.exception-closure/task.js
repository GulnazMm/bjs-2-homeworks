function parseCount(number) {
    const result = Number.parseInt(number);
    if (Number.isNaN(result)) {
      throw exception =  new Error("Невалидное значение");
    }
    return result;
}


function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
       return exception;
    }

}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a > b + c || b > a + c || c > a + b) {
            throw new Error("Треугольник с такими сторонами не существует»")
        }
    }
    getPerimeter() {
       return  this.a + this.b + this.c; 
    }

    getArea() {
        let p = this.getPerimeter()/ 2;
        let s = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;
        return + s.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (error) {
        let traingle = {
            getPerimeter() {
                ("Ошибка! Треугольник не существует");
            },
            getArea() {
                ("Ошибка! Треугольник не существует");
            }
        }
        return traingle;
    }

}







