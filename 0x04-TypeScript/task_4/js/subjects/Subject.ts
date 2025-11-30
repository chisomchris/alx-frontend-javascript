/// <reference path="./Teacher.ts" />

namespace Subjects {
  export interface Subject {
    teacher: Teacher;
  }

  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
