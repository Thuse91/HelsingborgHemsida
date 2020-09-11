
const img = document.getElementById('sliderimgs');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
 
let pictures = [
    'skrot1.png',
    'skrot2.png',
    'skrot3.png',
    'skrot4.png',
    'skrot5.png'
];
img.src = pictures[0];
let position = 0;

moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);  


/*
$(document).ready(function() {
  $('.kod').click(function () {
    if($('input[value="submit"]').is(':checked')) //edit the value here to use your own.
       {
       $('.kod-btn').show();
       }
    else {
      $('.kod-btn').hide();
    }
  });                 
});
*/


