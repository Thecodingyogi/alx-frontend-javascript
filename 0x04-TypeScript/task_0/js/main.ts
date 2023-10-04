interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

const student1: Student = {
firstName: "Cynthia",
lastName: "Tonui",
age: 31,
location: "Nakuru"
};

const student2: Student = {
firstName: "Sean",
lastName: "Bett",
age: 21,
location: "Nairobi"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach(student => {
const row = document.createElement("tr");

const firstNameHeading = document.createElement("td");
firstNameHeading.textContent = student.firstName;

const locationHeading = document.createElement("td");
locationHeading.textContent = student.location;

row.appendChild(firstNameHeading);
row.appendChild(locationHeading);
tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
