// // anti template
// console.time('1');
// document.getElementById('my').style.color = 'red';
// document.getElementById('my').style.padding = '5px';
// console.timeEnd('1');

// //good template
// console.time('2');
// let el = document.getElementById('my');
// el.style.color = 'red';
// el.style.padding = '5px';
// console.timeEnd('2');


// console.time('3');
// // antitemplate
// for (var i = 0; i < 100; i++) {
//     document.getElementById('my').innerHTML += i + '<br>';
// }

// console.timeEnd('3');

// console.time('4');
// // good template
// let el = document.getElementById('my');
// var i = 0, msg = "";
// for (;i < 100; i++) {
//     msg += i + "<br>";
// }
// el.innerHTML = msg;
// console.timeEnd('4');




