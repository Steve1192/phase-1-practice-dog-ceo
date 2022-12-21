

//globals and event listeners
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded',function (){fetchDogs()});
document.addEventListener('DOMContentLoaded', function(){fetchDogBreeds()});



function fetchDogs()
{
    return fetch(imgUrl)
    .then(resp => resp.json()) //breaks fown json data from API
     .then(json => renderDogs(json.message)); //this is calling renderDogs
}

function fetchDogBreeds()
{
return fetch(breedUrl)
.then(resp => resp.json())
.then(json => renderDogBreeds(json.message)); //I know this will spit out an object containing an array
}

function renderDogs(array1) //this is whatever you want to call it
{
   const dogImageContainer = document.getElementById('dog-image-container');
    array1.forEach(imgUrl => {
    const image = document.createElement('img');
    image.src = imgUrl
    dogImageContainer.appendChild(image);

    });
}

function renderDogBreeds(array2)
{
const dogBreeds = document.getElementById('dog-breeds');
const dropDown = document.getElementById("breed-dropdown")
let dogBreeds1 = Object.keys(array2);     // the word Object is absolutely necessary in Object.keys() lol, but yeah now dogBreeds1 is jsut the keys from the object array2

dogBreeds1.forEach(breedUrl => {
const breeds = document.createElement('li');
breeds.innerHTML = breedUrl
dogBreeds.append(breeds);
})

//this does the color change, my variables are all fucked up
dogBreeds.addEventListener("click", () => {

    if (event.target.style.color == "green")
   {event.target.style.color = "black";}
   else 
   {event.target.style.color = "green"}
   //idgaf that its deprected its working lol
})

dropDown.addEventListener('change', () => {
    //think of dropdowns as an input field
    //make sure to use dogBreeds1 to filter stuff
const letter = event.target.value
let filteredBreeds = []
dogBreeds1.forEach(item => {
if (item.startsWith(letter)) 
filteredBreeds.push(item)

})
console.log(filteredBreeds)


//find a way to replace all the li's under bogBreeds without deleting dogBreeds
dogBreeds.remove();
const breeds1000 = document.createElement('li');
breeds1000.innerHTML = filteredBreeds.push();
document.body.append(filteredBreeds)
 }

)}

;




