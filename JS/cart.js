'use strict';
console.log('cart.js');

let retrievedAnimals = localStorage.getItem('stringifiedAnimalsKey');
let parsedAnimals = JSON.parse(retrievedAnimals);
// console.log(parsedAnimals);





// function checkoutClick(event) {
//   //get the email value and store it for thank you page
//   let emailInput = document.getElementById('email');
//   let userEmail = emailInput.value;
//   localStorage.setItem('user-email', userEmail);
//   //get name value and store it for thank you page
//   let nameInput = document.getElementById('name');
//   let userName = nameInput.value;
//   localStorage.setItem('user-name', userName);
// }

// function clearCartClick(event) {
//   console.log(event);
//   localStorage.setItem('key', '[]');
// }




function showCart() {
  //get selected animal array from local storage and deserialize it from json
  //...add local storage code here...
  let tableContainer = document.getElementById("table-container");
  //cycle through array and show selected animals in table
  for (let i = 0; i < parsedAnimals.length; i++) {
    //create two divs and place them in the container
    let nameDiv = document.createElement('div');
    nameDiv.textContent = parsedAnimals[i].name;
    nameDiv.classList.add('name-cell');
    nameDiv.classList.add('table-cell');
    let speciesDiv = document.createElement('div');
    speciesDiv.textContent = parsedAnimals[i].species;
    speciesDiv.classList.add('species-cell');
    speciesDiv.classList.add('table-cell');
    let ageDiv = document.createElement('div');
    ageDiv.textContent = parsedAnimals[i].age;
    ageDiv.classList.add('age-cell');
    ageDiv.classList.add('table-cell');
    let interestDiv = document.createElement('div');
    interestDiv.textContent = parsedAnimals[i].interest;
    interestDiv.classList.add('interest-cell');
    interestDiv.classList.add('table-cell');

    if (i % 2 == 0) {
      nameDiv.classList.add('even-row');
      speciesDiv.classList.add('even-row');
      ageDiv.classList.add('even-row');
      interestDiv.classList.add('even-row');
    }
    else {
      nameDiv.classList.add('odd-row');
      speciesDiv.classList.add('odd-row');
      ageDiv.classList.add('odd-row');
      interestDiv.classList.add('odd-row');
    }

    tableContainer.appendChild(nameDiv);
    tableContainer.appendChild(speciesDiv);
    tableContainer.appendChild(ageDiv);
    tableContainer.appendChild(interestDiv);
  }

  // let checkoutButton = document.getElementById('checkout-button');
  // checkoutButton.addEventListener('click', checkoutClick);
  // let clearCartButton = document.getElementById('clear-cart-button');
  // clearCartButton.addEventListener('click', clearCartClick);
}

showCart();

function checkoutButton(event) {
  // window.location.pathname = 'thankYou.html';
  localStorage.clear();
}
// checkoutButtons();


function clearButton(event) {
  localStorage.clear();
<<<<<<< HEAD
  // let allClear = document.querySelectorAll('.name-cell .species-cell .age-cell .interest-cell');
  // console.log(allClear); 
  // allClear.innerHTML = ''; 
  window.location.reload(); 

  // let nameCells = document.querySelectorAll('.name-cell'); 
  // nameCells.innerHTML = ''; 
  
  // let speciesCells = document.querySelectorAll('.species-cell'); 
  // speciesCells.innerHTML = ''; 

  // let ageCells = document.querySelectorAll('.age-cell'); 
  // ageCells.innerHTML = ''; 

  // let interestCells = document.querySelectorAll('.interest-cell'); 
  // interestCells.innerHTML = ''; 
=======
  window.location.reload();
>>>>>>> 0f410f957a56b53d898274b4748008732b95d5d0
}
// clearButton();

let checkoutCartButton = document.getElementById('checkout-button');
checkoutCartButton.addEventListener('click', checkoutButton);

let clearCartButton = document.getElementById('clear-cart-button');
clearCartButton.addEventListener('click', clearButton);
