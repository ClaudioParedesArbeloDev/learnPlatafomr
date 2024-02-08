let countdown = 5
let countdownElement = document.getElementById("countdown")

let countdownInterval = setInterval(function() {
    countdown--;
    countdownElement.textContent = countdown;
    if(countdown <= 0){
        clearInterval(countdownInterval);
        window.location.href="/"
    }
},1000);

