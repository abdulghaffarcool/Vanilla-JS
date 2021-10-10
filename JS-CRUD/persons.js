// let and const introduced in ES6
let persons = [{Name: "Ali", Address: "London", Salary: "1000"},
{Name: "Brain", Address: "NewYork", Salary: "2000"}];

let personsTable = "";
personsTable += "<table>";
personsTable +=  "<tr>";
personsTable +=  "<th> Name </th><th> Address </th><th> Salary </th><th colspan='2'>";
personsTable +=  "<a href='#'> Create New </a></th>";
personsTable +=  "</tr>";
for (let i = 0; i < persons.length; i++) {
    personsTable +=  "<tr>";
    personsTable +=  "<td>" + persons[i].Name + "</td>";
    personsTable +=  "<td>" + persons[i].Address + "</td>";
    personsTable +=  "<td>" + persons[i].Salary + "</td>";
    personsTable +=  "<td><a href='#' >Edit</a></td>";
    personsTable +=  "<td><a href='#' >Delete</a></td>";
    personsTable +=  "</tr>";
}
personsTable += "</table>";

document.getElementById("persons").innerHTML = personsTable;