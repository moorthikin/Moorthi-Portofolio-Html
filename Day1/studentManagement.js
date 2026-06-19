//This is the practice project for the student management system where user can able to add the student, update the student details, remove the student details

const studentDetails = [
  {
    id: 1,
    name: "Moorthi",
    age: 1,
    gender: "Male",
    mark: 80,
  },
];

function addStudentdetails(id, name, age, gender, mark) {
  studentDetails.push({
    id: id,
    name: name,
    age: age,
    gender: gender,
    mark: mark,
  });
}
addStudentdetails(2, "Gopal", 1, "Male", 90);
//console.log(studentDetails);

//For list the all student

function allstudentList() {
  studentDetails.forEach((student, index) => {
    console.log(student);
  });
}

//allstudentList();

function studentNameList() {
  studentDetails.map((student, index) => {
    console.log(student.name);
  });
}

//studentNameList();

function getStudentbyId(id) {
  studentDetails.find((studentid, index) => {
    if (studentid.id === id) {
      console.log(studentid.name);
    }
  });
  console.log("Student doesn't exist in the DB!");
}

//getStudentbyId(3);

function getdetailsStudentAgewise() {
  studentDetails.filter((student, index) => {
    if (student.age > 2) {
      console.log(student.name);
    }
  });
  console.log("There are no users available with below age of 2");
}
//getdetailsStudentAgewise();

function updateStudentdetails(id, name) {
  studentDetails.find((student, index) => {
    if (student.id === id) {
      student.name = name;
      // student.age = age;
      // student.mark = mark;
    }
  });
  console.log("There is no user exists for this studentId");
}

updateStudentdetails(1, "Joomer");
console.log(studentDetails);
