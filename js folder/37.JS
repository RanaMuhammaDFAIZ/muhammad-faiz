document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'red';
 document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'green';
 let x = document.getElementsByTagName('nav')[0].lastElementChild.style.color = 'red';
 console.log(x);


let a = Math.floor(Math.random() * 200);
let b;
let score = 0;
do {
  b = prompt("Enter the number")
  b = Number.parseInt(b)
  if (a > b) {
    console.log("The number is greater")
  }
  else if (a < b) {
    console.log("The number is lesser")
  }

  else if (a == b) {
    console.log("Yep ! you found that");
  }
score++;

} while (b != a);

let ans = 100 - score;
console.log(`Your Score is ${ans}`)
