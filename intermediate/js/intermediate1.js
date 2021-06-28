// ex 1 | Compare two numbers
function GetGrade(points) {
    if (points < 60) return "F";
    else if (points < 70) return "D";
    else if (points < 80) return "C";
    else if (points < 90) return "B";
    else return "A";
}

const CheckGrammatic = (grade) => {
    switch(grade) {
        case "F":
        case "A":
            return "an";
            break;
        default:
            return "a";
            break;
    }
}



document.getElementsByTagName("p")[0].innerHTML = "The students grades are:<br>";

var student_points = [76,85,65,93,81];
var student_names = ["Martin", "Thomas" ," Klaus", "Maria", "David"];

var sum_points = 0;
var i = 0;

for (let points of student_points) {
    let grade = GetGrade(points);
    let name = student_names[i];
    document.getElementsByTagName("p")[0].innerHTML += `With ${points} points ${name} got ${CheckGrammatic(grade)} <b>${grade}</b>.<br>`;
    sum_points += points;
    i++;
    
}


var average_grade = GetGrade(sum_points / student_points.length);
document.getElementsByTagName("p")[0].innerHTML += `<br>With ${sum_points / student_points.length} points the average class grade is ${CheckGrammatic(average_grade)} <strong>${average_grade}</strong>.`;
