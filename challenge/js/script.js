// Challenge 
const GetTemperature = (min = -5, max = 25) => Math.round(min + Math.random()*(max-min));
const InRange = (x,lo,hi) => x >= lo && x <= hi;

function ColorString(grade) {
    const colors = ["red", "yellow", "green", "blue"];
    if (grade < 60) return `<strong style="color:${colors[0]};">${grade}</strong>`;
    else if (InRange(grade,60,70)) return `<strong style="color:${colors[1]};">${grade}</strong>`;
    else if (InRange(grade,71,99)) return `<strong style="color:${colors[2]};">${grade}</strong>`;
    else return `<strong style="color:${colors[3]};">${grade}</strong>`; // >= 100
}

var student_list = ["John", "Jane", "Paul", "Felix"];
var math_grades = [70, 85, 50, 100];

var input_name = prompt("Please write your name, to check your grade!...");


/*
< 60 red
60-70 yellow
> 70 green
>= 100 blue
*/
document.getElementById("challenge").innerHTML = "<h1>That are the results we found...</h1><br>";
var found_name = false;
// var index = 0;
for (let student of student_list) {
    // document.getElementById("challenge").innerHTML += `<b>${input_name}</b> ${student}<br>`;
    if (input_name == student) {
        let index = student_list.indexOf(student);
        let grade = math_grades[index];
        let grade_cstring = ColorString(grade);
        document.getElementById("challenge").innerHTML += `${student} has reached ${grade_cstring} points in Math this season.<br>`;
        found_name = true;
    } //else index++;
}


if (!found_name) document.getElementById("challenge").innerHTML += "Your name wasn't found!";
