'use strict'; 

let allAnimals = [];

//constructor for all animals 
function Animal (name, species, age, interest){
  this.name = name, 
  this.species = species, 
  this.age = age, 
  this.interest = interest, 
  this.src = `../imgs/${name}.jpg`
  //should the image be stored in this.src? or is there a better way to store an image? 
  allAnimals.push(this); 
}

let tucker = new Animal('tucker', 'dog', 3, 'hunting'); 
console.log(allAnimals); 
// let imgWindow = document.getElementById('img-one'); 

let myContainer = document.getElementById('profiles');


function renderTucker (){
  let img1 = document.createElement('img'); 
  img1.src = allAnimals[0].src; 
  let capt1 = document.createElement('figcaption'); 
  // capt1.textContent = 'hello'; 

  let ul = document.createElement('ul'); 
  let li1 = document.createElement('li'); 
    li1.textContent = allAnimals[0].name; 
    ul.appendChild(li1); 
  let li2 = document.createElement('li');
    li2.textContent = allAnimals[0].age;
    ul.appendChild(li2);  
  let li3 = document.createElement('li');
    li3.textContent = allAnimals[0].interest; 
    ul.appendChild(li3); 

  capt1.appendChild(ul); 
  myContainer.appendChild(img1); 
  myContainer.appendChild(capt1); 
}

renderTucker(); 

// function renderImgs (){
//   // imgOne.src = allAnimals.tucker.src;
//   // imgOne.alt = allAnimals[0].name;
//   let img1 = document.createElement('img'); 
//   img1.src = allAnimals[0].src; 
//   let capt1 = document.createElement('figcaption'); 
//   capt1.textContent = 'hello'; 

  
//   // for (let i = 0; i < allAnimals.length; i++){
//     // let currentAnimal = allAnimals[i]; 
//     // console.log(currentAnimal); 

//     let bullets = document.createElement('ul'); 
//     let b1 = document.createElement('li'); 
//     b1.textContent = currentAnimal.name; 
//     bullets.appendChild(b1); 
//     let b2 = document.createElement('li'); 
//     b2.textContent = currentAnimal.age; 
//     bullets.appendChild(b2); 
//     let b3 = document.createElement('li');
//     b3.textContent = currentAnimal.interest; 
//     bullets.appendChild(b3); 
//     capt1.textContent = bullets; 
//     // for (let key in currentAnimal){
//     //   let currentBullet = document.createElement('li'); 
//     //   currentBullet.textContent = currentAnimal[key]; 
//     //   console.log(currentAnimal[key]); 
//     //   capt1list.appendChild(currentBullet); 
//     // }
//   // }

//   myContainer.appendChild(img1);
//   img1.appendChild(capt1); 
//   // imgOne.src = allAnimals[0].src; 
  
// }
// renderImgs(); 

// imgWindow.


// document.getElementById('img-one').src = '../imgs/tucker.jpg'; 