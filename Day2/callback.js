//What is callback function in js

// setTimeout(function () {
//   console.log("Timer is executed after 4s");
// }, 4000);

function a(b) {
  console.log("X");
  b();
}

a(function y() {
  console.log("Y");
});

//Js is a synchronus and single threaded language

//Blocking the main thread

//Power of callbacks

//Deep about Event listeners

//Closure demo with Event Listeners

//Scope demo with Event Listerners
function attached() {
  let count = 0;
  document
    .getElementById("clickme")
    .addEventListener("click", function clicked() {
      console.log("Button Clicked", count++);
    });
}
attached();
