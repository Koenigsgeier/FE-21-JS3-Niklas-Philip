// ex 1 | Compare two numbers

document.getElementsByTagName("p")[0].innerHTML = "The student grades are:<br>";

var student_points = [76,85,65,93,81];
var sum_points = 0;

function GetGrade(points) {
    if (points < 60) return "F";
    else if (points < 70) return "D";
    else if (points < 80) return "C";
    else if (points < 90) return "B";
    else return "A";
}

for (let points of student_points) {
    let grade = GetGrade(points);
    switch (grade) {
        case "F": 
        case "A":
            document.getElementsByTagName("p")[0].innerHTML += `With ${points} points you got an <b>${grade}</b><br>`;
            break;
        default: 
            document.getElementsByTagName("p")[0].innerHTML += `With ${points} points you got a <b>${grade}</b><br>`;
            break;
    }
    // sum
    sum_points += points;
    
}


var average_grade = GetGrade(sum_points / student_points.length);
switch (average_grade) {
    case "F": 
    case "A":
        document.getElementsByTagName("p")[0].innerHTML += `<br>With ${sum_points / student_points.length} points the average grade is an <strong>${average_grade}</strong>.`;
        break;
    default:
        document.getElementsByTagName("p")[0].innerHTML += `<br>With ${sum_points / student_points.length} points the average grade is a <strong>${average_grade}</strong>.`;
        break;

}
