const button = document.querySelector('button');
button.addEventListener('click', () => {
  // document.body.style.backgroundColor = 'olive';
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})



// 
// const red = Math.floor(Math.random()
//  const blue = Math.floor(Math.random()
//  const green = Math.floor(Math.random()
// Math.floor(Math.random(`${red}, ${green}, ${blue}`));