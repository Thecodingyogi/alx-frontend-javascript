interface Teacher {
readonly firstName: string;
readonly lastName: string;
fullTimeEmployee: boolean;
yearsOfExperience?: number;
location: string;
[key: string]: any;
}

interface Directors extends Teacher {
numberOfReports: number;
}

interface printTeacherFunction {
(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${formattedLastName}`;
  };

interface StudentInfo {
  firstName: string;
  lastName: string;
  }

interface ClassInterface {
  workOnHomework(): string;
  displayName(): string;
  }

class StudentClass implements ClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentInfo) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

  workOnHomework(): string{
    return "Currently working";
    }

  displayName(): string{
    return this.firstName;
    }
} 
