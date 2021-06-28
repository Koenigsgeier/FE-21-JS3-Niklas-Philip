// ex 2 | FizzBuzz


document.querySelector(".starloop").innerHTML = "<h1>ex 2 | FizzBuzz</h1><br>";

for (let i = 1; i<=100; i++) {
    if (i%15 == 0) document.querySelector(".fizzbuz").innerHTML += "<h2>FizzBuzz</h2>";
    else if (i%3 == 0) document.querySelector(".fizzbuz").innerHTML += "<strong>Fizz</strong> <br>";
    else if (i%5 == 0) document.querySelector(".fizzbuz").innerHTML += "<em>Buzz</em> <br>";
    else document.querySelector(".fizzbuz").innerHTML += i + " <br>";
}