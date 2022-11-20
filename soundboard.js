const sounds = ['applause', 'boing', 'crash']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', ()=> {
        stopSongs()

        document.getElementById(sound).onplay()
    })

    document.getElementById('buttons').appendChild(btn);
});

funtion stopSongs () {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        
        song.pause()
        song.currentTime = 0;
    })
}


