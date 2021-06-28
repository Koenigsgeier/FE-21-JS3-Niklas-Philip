// ex 3 | Starloop


document.querySelector(".starloop").innerHTML = "<h1>ex 3 | Starloop</h1>";
var char = "*";
const colors = ["red", "green", "blue"];
const fweight = ["normal", "bold", "900"];
for (let i = 1; i<=10; i++) {
    // document.querySelector(".starloop").innerHTML += "*" * i + "<br>";
    var mul_str = "";
    for (let j = 1; j<=i; j++)  {
        mul_str += `<strong style="color:${colors[(j-1)%3]};font-weight:${fweight[(j-1)%3]};">${char}</strong>`; 
    }
    
    document.querySelector(".starloop").innerHTML += `<p>${mul_str}</p>`;
}

