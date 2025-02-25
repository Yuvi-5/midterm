function calculateFactorial() {
    let number = document.getElementById("numberInput").value;
    let resultBox = document.getElementById("resultBox");

    if (number < 0) {
        resultBox.innerHTML = "Factorial not defined for negative numbers.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    resultBox.innerHTML = `${number}! = ${factorial}`;
}

function setTheme(mode) {
    if (mode === "dark") {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#ddd";
    } else {
        document.body.style.backgroundColor = "#eee";
        document.body.style.color = "#222";
    }
}
