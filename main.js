"use strict";

class Student {
  constructor(name, sureName, yearsOfBirth) {
    this.name = name;
    this.sureName = sureName;
    this.yearsOfBirth = yearsOfBirth;
    this.grades = [];
    this.attendance = new Array(25);
    this.attendanceIndex = 0;
  }
  get age() {
    const current = new Date();
    return current.getFullYear() - this.yearsOfBirth;
  }

  get averageGrade() {
    return (
      this.grades.reduce((acc, grade) => {
        return acc + grade;
      }, 0) / (this.grades.length ? this.grades.length : 1)
    );
  }
  present() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex++] = true;
    }
  }
  absent() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex++] = false;
    }
  }
  summary() {
    const avg = this.averageGrade;
    const averageAttendance =
      this.attendance.reduce((acc, visit) => {
        return acc + (visit ? 1 : 0);
      }, 0) / (this.attendanceIndex ? this.attendanceIndex : 1);
    if (avg > 90 && averageAttendance > 0.9) {
      console.log("Awesome!");
    } else if (avg > 90 || averageAttendance > 0.9) {
      console.log("Good, you can do better!");
    } else {
      console.log("Not good!!");
    }
  }
  addGrade(grade) {
    if (grade <= 100 && grade > 0) {
      this.grades.push(grade);
    }
  }
}

const student1 = new Student("Bucks", "Brown", 2000);

student1.present();
student1.present();
student1.absent();
student1.absent();

student1.addGrade(99);
student1.addGrade(98);
student1.addGrade(99);
student1.addGrade(99);
student1.addGrade(98);

student1.summary();

const student2 = new Student("Bob", "Barkley", 1997);

student2.present();
student2.present();
student2.absent();
student2.absent();

student2.addGrade(45);
student2.addGrade(55);
student2.addGrade(67);
student2.addGrade(32);
student2.addGrade(76);

student2.summary();
