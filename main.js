const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
const colors = ["Red", "Green", "Blue"];

const persons = [{ Name: "Ali", Salary: 1000 }, { Name: "Imran", Salary: 2000 }];

// Simple Array to text
function arrayToText(itemsArray) {

    let itemsText = "";
    for (let i = 0; i < itemsArray.length; i++) {
        itemsText += itemsArray[i] + "<br>";
    }

    return itemsText;
}

function arrayToText(objectsArray) {

    let objectsText = "";
    for (let i = 0; i < objectsArray.length; i++) {
        objectsText += objectsArray[i][0] + " " + objectsArray[i][1] + "<br>";
    }

    return objectsText;
}

// Array to html table
let carsTable = "";
carsTable += "<table>";
for (let i = 0; i < cars.length; i++) {
    carsTable +=  "<tr>";
    carsTable += "<td>" + cars[i] + "</td>";
    carsTable +=  "</tr>";
}
carsTable += "</table>";

let personsTable = "";
personsTable += "<table>";
for (let i = 0; i < persons.length; i++) {
    personsTable +=  "<tr>";
    personsTable +=  "<td>" + persons[i].Name + " " + persons[i].Salary + "</td>";
    personsTable +=  "</tr>";
}
personsTable += "</table>";


        document.getElementById("demo").innerHTML = carsTable;
        document.getElementById("persons").innerHTML = personsTable;