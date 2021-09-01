var student = { id: 2324, name: "sabbir", phone: '2323'}

 student.name = "Tarequr Rhman Sabbir";

 //show object value
 var stdValue = "id";
 var stdId1 = student.id;
 var stdId2 = student['id'];
 var stdId3 = student[stdValue];

 //add new property
 student.address = "Uttara, Dhaka";

console.log(student);