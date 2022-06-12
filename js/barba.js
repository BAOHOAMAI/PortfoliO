// // Loading page animation

// var body = document.querySelector("main"),
//     bar = document.querySelector('.loading_bar'),
//     i = 0,
//     throttle = 1000; // 0-1

// (function draw() {
//   if(i <= 100) {
//     var r = Math.random();
    
//     requestAnimationFrame(draw);  
//     bar.style.width = i + '%';
    
//     if(r < throttle) { // Simulate d/l speed and uneven bitrate
//       i = i + r;
//     }
//   } else {;
//     bar.className += " done";
//     loadingDone();
// }
// })();

// function loadingDone () {
//     setTimeout(function() {
//         loading.remove();
//       }, 430);
// }

// Page Transition