function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subject;
}

Student.prototype.addMark = function (mark) {

  if (this.mark === undefined) {
    mark = 0;
  }
  else {
    mark.push(1, 2, 3, 4, 5);
  }
}


Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    marks = 0;
  }
  else {
    marks.push(...marks);
  }
}


Student.prototype.getAverage = function () {

  this.getAverage = Student.marks.reduse((all, mark) => all + mark) / Student.marks.length;

}
Student.prototype.exclude = function (reason) {
  this.exclude = reason;
  delete student2.subject;
  delete student2.marks;
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