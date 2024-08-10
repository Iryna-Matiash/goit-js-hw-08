function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  
document.addEventListener('DOMContentLoaded', function() {  
    const input = document.querySelector('input');  
    const createBtn = document.querySelector('[data-create]');  
    const destroyBtn = document.querySelector('[data-destroy]');  
    const boxesContainer = document.getElementById('boxes');  

    createBtn.addEventListener('click', function () {  
      const amount = parseInt(input.value);  
    
      if (amount >= 1 && amount <= 100) {  
        destroyBoxes();  
        createBoxes(amount);  
        input.value = '';  
      } else {  
        alert('Please enter a number between 1 and 100.');  
      }  
    });  

    destroyBtn.addEventListener('click', function () {  
      destroyBoxes();  
    });  

    function getRandomHexColor() {  
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;  
    }  

   function createBoxes(amount) {  
  const fragment = document.createDocumentFragment();
  let size = 30;  

  for (let i = 0; i < amount; i++) {  
    const color = getRandomHexColor();  
    const box = document.createElement('div');  
    box.style.width = `${size}px`;  
    box.style.height = `${size}px`;  
    box.style.backgroundColor = color;  
    fragment.appendChild(box);  
    size += 10;  
  }  

  boxesContainer.appendChild(fragment); 
}  


    function destroyBoxes() {  
      boxesContainer.innerHTML = '';  
    }  
});  
