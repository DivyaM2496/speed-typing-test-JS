let quoteDisplay = document.getElementById("quoteDisplay");
let timer = document.getElementById("timer");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let result = document.getElementById("result");
let spinner = document.getElementById("spinner");

let uniqueId;
let count;

function randomquote() {
    quoteInput.value = "";
    clearInterval(uniqueId);
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET",
    }
    spinner.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            quoteDisplay.textContent = JSON.stringify(jsonData.content);
        });

    count = 0;
    uniqueId = setInterval(function() {
        count = count + 1;
        timer.textContent = count;
    }, 1000);
}


submitBtn.addEventListener("click", function(event) {
    if (quoteInput.value === quoteDisplay.textContent) {
        clearInterval(uniqueId);
        result.textContent = "You typed in " + count + " seconds";
    } else {
        result.textContent = "You typed incorrect sentence";

    }
});
resetBtn.addEventListener("click", randomquote);
randomquote();
