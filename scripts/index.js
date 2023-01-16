document.querySelector('.knopka__knopka').addEventListener('click', () => {
    document.querySelector('.les__tropinka').classList.toggle('les__stop');
    document.querySelector('.les__blizko').classList.toggle('les__stop');
    document.querySelector('.les__dalshe').classList.toggle('les__stop');
    document.querySelector('.les__daleko').classList.toggle('les__stop');
    Array.from(document.querySelectorAll('.solnce')).forEach((solnce) => {
        solnce.classList.toggle('les__stop');
    });
})