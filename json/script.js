var student = {
    name: "Ikbal",
    age: 23,
    hometwon: "Cumilla"
};


var student_json = JSON.stringify(student); //js object to  json string
console.log(student_json);

console.log(typeof(student_json));



var new_student = JSON.parse(student_json); // json to js object
console.log(new_student);
console.log(new_student.name, new_student.age);
console.log(typeof(new_student));