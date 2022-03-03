'use strict';
console.log('app.js');
let allAnimals = [];

let buyerObj = [];


//constructor for all animals 
function Animal (name, species, age, interest){
  this.name = name,
  this.species = species,
  this.age = age,
  this.interest = interest,
  this.src = `../imgs/${name}.jpg`,
  //should the image be stored in this.src? or is there a better way to store an image? 
  allAnimals.push(this);
}
// dog instantiations
let tucker = new Animal('tucker', 'dog', 3, 'hunting');
let luanne = new Animal('luanne', 'dog', 5, 'walks');
let ramona = new Animal('ramona', 'dog', 8, 'swimming');
let sonja = new Animal('sonja', 'dog', 4, 'tug of war');
let tinsly = new Animal('tinsly', 'dog', 10, 'fetch');
let carol = new Animal('carol', 'dog', 7, 'rawhides');
let dorinda = new Animal('dorinda', 'dog', 6, 'drama');

// bird instantiations
let chirpy = new Animal('chirpy', 'bird', 2, 'singing');
let jerry = new Animal('jerry', 'bird', 4, 'comedy');
let elaine = new Animal('elaine', 'bird', 6, 'whistling');
let george = new Animal('george', 'bird', 10, 'eating');
let kramer = new Animal('kramer', 'bird', 12, 'flying');
let newman = new Animal('newman', 'bird', 14, 'pecking');
let jackie = new Animal('jackie', 'bird', 40, 'talking');

// cat instantiations
let luke = new Animal('luke','cat', 4, 'lasers');
let mace = new Animal('mace','cat', 7, 'feather toys');
let anakin = new Animal('anakin','cat', 9, 'mice');
let obi = new Animal('obi','cat', 11, 'jazz music');
let leia = new Animal('leia','cat', 8, 'scratching posts');
let jarjar = new Animal('jarjar','cat', 5, 'catnip');
let han = new Animal('han','cat', 10, 'zoomies');



// console.log(allAnimals); 
// let imgWindow = document.getElementById('img-one');

let animalProfilesContainer = document.getElementById('profiles');


// function renderTucker (){
//   let img1 = document.createElement('img');
//   img1.src = allAnimals[0].src;
//   let capt1 = document.createElement('figcaption');
//   // capt1.textContent = 'hello';

//   let ul = document.createElement('ul');
//   let li1 = document.createElement('li');
//     li1.textContent = allAnimals[0].name;
//     ul.appendChild(li1);
//   let li2 = document.createElement('li');
//     li2.textContent = allAnimals[0].age;
//     ul.appendChild(li2);
//   let li3 = document.createElement('li');
//     li3.textContent = allAnimals[0].interest;
//     ul.appendChild(li3);

//   capt1.appendChild(ul);
//   myContainer.appendChild(img1);
//   myContainer.appendChild(capt1);
// }

// renderTucker();


// helper function to render images of all pets and information in a `<ul></ul>`
function renderAnimals (){
  for (let i = 0; i < allAnimals.length; i++){
    let outerDiv = document.createElement('div');

    let currentImgLoc = document.createElement('img');
    currentImgLoc.src = allAnimals[i].src;
    currentImgLoc.alt = allAnimals[i].name;
    let currentCapt = document.createElement('figcaption');

    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    li1.textContent = `Name: ${allAnimals[i].name}` ;
    ul.appendChild(li1);

    let li2 = document.createElement('li');
    li2.textContent = `Age: ${allAnimals[i].age}`;
    ul.appendChild(li2);

    let li3 = document.createElement('li');
    li3.textContent = `Interest: ${allAnimals[i].interest}`;
    ul.appendChild(li3);

    currentCapt.appendChild(ul);
    outerDiv.appendChild(currentImgLoc);
    outerDiv.appendChild(currentCapt);
    animalProfilesContainer.appendChild(outerDiv);
  }
}

renderAnimals();

// event listener for user to select pet and add to cart, notifies selection with alert
function handleClick(event) {
  if (event.target.src === undefined){
    alert('Please click on a photo of animal to add to cart.');
  } else {
    let imgClicked = event.target.src;
    let imgClickedName = event.target.alt;
    alert(`You've added ${event.target.alt} to your cart!`);
    for (let i = 0; i < allAnimals.length; i++){
      let currentAnimal = allAnimals[i];
      if (imgClickedName === allAnimals[i].name){
        buyerObj.push(allAnimals[i]);
      }
    }
  }

  let uniqueObjects = [...new Set(buyerObj)];
  let stringifiedAnimals = JSON.stringify(buyerObj);
  localStorage.setItem('stringifiedAnimalsKey', stringifiedAnimals);
}

//  let message = `Thanks ${name1}! We will contact you at ${email1}`;
//   let message-container = document.getElementById('message');
//   message-container.textContent = message;
 
//   let name1 = 'Michael';
//   let email1 = 'blob@gmail.com';

animalProfilesContainer.addEventListener('click', handleClick);















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