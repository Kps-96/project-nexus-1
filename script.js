let currentSlide = 0;

function moveSlide(direction) {
    const cards = document.querySelector('.cards');
    const totalCards = document.querySelectorAll('.card').length;
    const cardWidth = document.querySelector('.card').offsetWidth;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalCards - 1;
    } else if (currentSlide >= totalCards) {
        currentSlide = 0;
    }

    cards.style.transform = `translateX(${-currentSlide * (cardWidth + 20)}px)`;
}



// page reload

function reload()
{
    window.location.reload();
}