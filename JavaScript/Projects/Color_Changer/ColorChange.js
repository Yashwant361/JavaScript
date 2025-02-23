
let color = ["grey", "orange", "blue", "yellow"];
let btn = document.getElementById("btn");
let colorselect = document.getElementById("colorSelect");

btn.addEventListener("click", function () {
  let randomColor = color[Math.floor(Math.random() * color.length)];
  console.log(randomColor);
  document.body.style.background=randomColor;
 
});