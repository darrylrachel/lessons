/*//////////////////////////////////////////////////////////////
                                STYLING

Set Properties

h1.style.color = 'green';
h1.style.fontSize = '3em';
h1.style.border = '2px solid aqua';



//////////////////////////////////////////////////////////////*/

// Select element(s)
const allLinks = document.querySelectorAll('a');

// Loop through all anchor tags
for ( let link of allLinks ) {
  link.style.color = 'rgb(0, 108, 134)';
  link.style.fontSize = '24px';
  link.style.fontWeight = '900';
}


const container = document.querySelector('#container');
container.style.textAlign = 'center';

const image = document.querySelector('img');
image.style.width = '150px';
image.style.borderRadius = '50%';



const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:

const rainbow = document.querySelectorAll('span');


for (let i = 0; i < rainbow.length; i++) {
  rainbow[i].style.color = colors[i];
}