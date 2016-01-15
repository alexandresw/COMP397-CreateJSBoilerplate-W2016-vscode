/// <reference path="../objects/person.ts" />
/// <reference path="../objects/student.ts" />

import Person = objects.Person;
import Student = objects.Student;


console.log("game started...");


var person:Person = new Person("Alex");

person.speaks();

var student:Student = new Student("Mike", 1234);
student.studies();
student.speaks();
