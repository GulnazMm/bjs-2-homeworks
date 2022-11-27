function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
Student.prototype.setSubject = function (subjectName) {
}

Student.prototype.addMark = function (marks) {
  if (this.marks === undefined) {
    let mark = 0;
  } else {

    mark[3, 4, 5] = arr // добавить вторую и последующие оценки в массив
  }
}

Student.prototype.addMarks = function (mark1, mark2, mark3, ...marks) {
}
Student.prototype.getAverage = function () {
  let sum = 0;

}
Student.prototype.exclude = function (reason) {
  delete Student.setSubject;
  delete Student.addMarks;
}

let student1 = new Student("Maria", "female", 25);
student1.subjectName("Algebra");
student1.addMark(5);
student1.addMark(5);
student1.addMark(4);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student("Ivan", "male", 23);
student2.subjectName("Geometry");
student2.addMark(3);
student2.addMark(2);
student2.addMark(2);
student2.exclude("low grades");
console.log(student2);

let student3 = new Student("Petr", "male", 28);

// ваш код для остальных методов