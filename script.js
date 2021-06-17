'use strict';

const inputTitle = document.querySelector('.input-title'),
   out = document.querySelector('.out');

let delayedText = '';

inputTitle.addEventListener('input', () => {
   // out.textContent = '';

   if (!delayedText) {
      clearTimeout(delayedText);
      delayedText = '';
   }

   delayedText = setTimeout(printInput, 300);
});

const printInput = () => {
   delayedText = '';
   out.textContent = inputTitle.value;
};



