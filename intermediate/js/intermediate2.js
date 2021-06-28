// ex 2 | FizzBuzz


document.querySelector(".fizzbuz").innerHTML = "<h1>ex 2 | FizzBuzz</h1><br>";

for (let i = 1; i<=100; i++) {
    if (i%15 == 0) document.querySelector(".fizzbuz").innerHTML += "FizzBuzz <br>";
    else if (i%3 == 0) document.querySelector(".fizzbuz").innerHTML += "Fizz <br>";
    else if (i%5 == 0) document.querySelector(".fizzbuz").innerHTML += "Buzz <br>";
    else document.querySelector(".fizzbuz").innerHTML += i + " <br>";
}