export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsUpdated = students.filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.find((grade) => grade.studentId === student.id);
      const grade = grades ? grades.grade : 'N/A';
      return { ...students, grade };
    });
  return studentsUpdated;
}
