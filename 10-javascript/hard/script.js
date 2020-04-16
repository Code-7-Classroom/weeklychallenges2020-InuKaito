// document.querySelector(".red").addEventListener('click', () => {
//     document.querySelector(".red").style['background-color'] = 'red';
//   });

//   document.querySelector(".white").addEventListener('click', () => {
//     document.querySelector(".white").style['background-color'] = 'white';
//   });


  const red = document.querySelector(".red");
  const white = document.querySelector(".white");

  red.addEventListener('click', () => {
      red.style['background-color'] = 'red';
      red.style['color'] = 'white';
  });

  white.addEventListener('click', () => {
      white.style['background-color'] = 'white';
      white.style['color'] = 'red';
  })