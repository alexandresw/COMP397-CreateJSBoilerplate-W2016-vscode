/// <reference path="../objects/person.ts" />
/// <reference path="../objects/student.ts" />
var Person = objects.Person;
var Student = objects.Student;
console.log("game started...");
var person = new Person("Alex");
person.speaks();
var student = new Student("Mike", 1234);
student.studies();
student.speaks();
//# sourceMappingURL=game.js.map