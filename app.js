const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "skyblue", "rgba(102,144,113)", "rgba(132,104,113)"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");
function getRandomNumber(){
   return Math.floor(Math.random() * colors.length);
};
// math.floor() rounds up to the nearest integer, while math.random() generates a random number
// between 0 and 1.
btn.addEventListener("click", function(){
   const randomNumber = getRandomNumber();
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
});


