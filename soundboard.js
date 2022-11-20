const sounds = ['applause', 'boing', 'crash'];

sounds.forEach((sound) => {
const btn = document.createElement('button')
btn.classList.add('btn')

btn.innerText = sound;

btn.addEventListener("click", ()=>{
    document.getElementById(sound).onplay();
})

document.getElementById('buttons').appendChild(btn)
})

