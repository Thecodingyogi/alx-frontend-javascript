interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
  }

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
  }

export class Director implements DirectorInterface {
  workFromHome(): string{
    return 'Working from home';
    }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
    }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
    }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
    }

  workTeacherTasks(): string {
    return 'Getting to work';
    }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
  }

type Employee = Director | Teacher;

export function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

export function teachClass(todayClass: string): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
    } else {
      return 'Teaching History';
    }
}
