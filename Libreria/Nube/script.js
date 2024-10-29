function randomText(){
    var text = ("!@#$%^*()")
    letters = text[Math.floor(Math.random() * text.length)];
    return letters;
}
function Lluvia(){
    let Nube = document.querySelector('.Nube');
    let e = document.createElement('div');
    e.classList.add('drop');
    Nube.appendChild(e);
}
let left = Math.floor(Math.random() * 300)
let size = Math.random() * 1.5;
let duration = Math.random() * 1;

e.innerText = randomText();
e