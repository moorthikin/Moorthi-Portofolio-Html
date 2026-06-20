// // console.log(a);
// // console.log(b);
// console.log(c);
// let a = 100;
// const b = 300;
// var c = 400;

// console.log(a);
// console.log(b);
// console.log(c);

// function name() {
//   let a = 200;
//   const b = 800;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// name();
console.log("Hello Everyone!");

function z() {
  var a = 10;
  function x() {
    function y() {
      console.log(a);
      return y;
    }
  }
}

z();

function t() {
  setTimeout(function () {
    console.log(3);
  }, 4000);
}

t();
