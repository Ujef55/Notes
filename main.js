const container = document.querySelector('.container');
const addButton = document.querySelector('#addButton');
const refreshButton = document.querySelector('#refresh');


function createNote() {
    const div = document.createElement('div');
    const newNote = document.createElement('textarea');
    newNote.setAttribute('placeholder', 'Write your notes');
    newNote.classList.add('notes');

    // Added random margin by calling margin function
    newNote.style.margin = margin();

    // Added random rotation by calling rotate function
    newNote.style.transform = rotate();

    // Added random color by calling color function
    newNote.style.backgroundColor = color();


    container.appendChild(div);;
    div.appendChild(newNote);


    // Delete Each note by double clicking
    newNote.addEventListener('dblclick', () => {
        const deleteNote = confirm('Are you sure you want to delete this note?');
        if (deleteNote) {
            div.remove();
        }
    })


    // clear all the notes by clicking
    refreshButton.addEventListener('click', () => {
        div.remove();
    })
    
}



function margin() {
    const randomMargin = ["15px", "10px", "20px", "-5px", "3px"];
    return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function color() {
    const randomColor = ['#fff740', '#feff9c', '#7afcff', '#ff65a3', '#a696c8'];
    return randomColor[Math.floor(Math.random() * randomColor.length)];
}

function rotate() {
    const randomRotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
    return randomRotate[Math.floor(Math.random() * randomRotate.length)];
}


addButton.addEventListener('click', createNote);


