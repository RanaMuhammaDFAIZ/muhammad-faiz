let a = document.getElementById("google").addEventListener("click", function() {
 window.location.href = "https://www.google.com";
});
let b = document.getElementById("fb").addEventListener("click", function() {
 window.location.href = "https://www.Facebook.com";
});
let c = document.getElementById("Twitter").addEventListener("click", function() {
 window.location.href = "https://www.Twitter.com";
});

setInterval(async function() {
document.getElementById("bulb").classList.toggle("bulb");

},500)