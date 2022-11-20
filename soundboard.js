const sounds = ['applause', 'boing', 'crash', ];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innertext = sound;

    document.getElementById('buttons').appendChild(btn);
    
});
