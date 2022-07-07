// console.log('hello world')
let inputField = document.querySelector('input');


function addMovie(event) {
    event.preventDefault()
let movie = document.createElement('li')
console.log(movie)
let movieTitle = document.createElement('span')
console.log(movieTitle)

movieTitle.textContent = inputField.value

movie.appendChild(movieTitle)

let element = document.querySelector('ul') 
element.appendChild(movie);


// let formElement = document.querySelector('form');
// formElement.addEventListener('submit', addMovie);
// console.log(addMovie)

const deletedBtn = document.createElement('button');


deletedBtn.textContent = 'x'; 

deletedBtn.addEventListener('click', deleteMovie);
// console.log(deletedBtn)


movie.appendChild(deletedBtn);

inputField.value = ''

movieTitle.addEventListener('click', crossOffMovie);

}

// Finally, outside of your function, use querySelector to select the form element and then use addEventListener to listen for a submit event on the form element and run the addMovie function.

let formElement = document.querySelector('form');
formElement.addEventListener('submit', addMovie);
console.log(addMovie)


function deleteMovie(event){
    event.target.parentNode.remove() 
    
}

console.log(deleteMovie)

function crossOffMovie(event){
    event.target.classList.toggle('checked');
    if (event.target.classList.contains
        ('checked') === true) {
            message.textContent = 'watched movie'
        } else {
            message.textContent = 'movie added'
        }
}



