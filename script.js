const magicBtn = document.querySelector('#magic-btn');
const heart = document.querySelector('.fa-heart');


magicBtn.addEventListener('mouseover', () => {
    heart.classList.add('heart-beat');
});

magicBtn.addEventListener('mouseout', () => {
    heart.classList.remove('heart-beat');
});