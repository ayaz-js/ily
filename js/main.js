let phrases = [{
        text: 'Больше всего на свете',
        image: 'img/2.JPG'
    },
    {
        text: 'И быть с тобой всегда',
        image: 'img/3.JPG'
    },
    {
        text: 'И обниматся',
        image: 'img/4.JPG'
    },
    {
        text: 'И много много целовать и целовать',
        image: 'img/5.JPG'
    },
    {
        text: 'И поддержиать друг друга',
        image: 'img/6.JPG'
    },
    {
        text: 'И пройти через все вместе',
        image: 'img/7.JPG'
    },
    {
        text: 'Тебя',
        image: 'img/9.JPG'
    },
    {
        text: 'И не расстватся',
        image: 'img/10.JPG'
    },
    {
        text: 'И носить тебя на руках',
        image: 'img/11.JPG'
    },
    {
        text: 'Ни смотря, ни на что',
        image: 'img/12.JPG'
    }

];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];

}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text)
    smoothly(image, 'src', randomElement.image)

    if (randomElement.text.length > 40) {
        advice.style.fontSize = '33px';
    } else {
        advice.style.fontSize = '42px';
    }
});

for (let i = 0; i <= 2; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
}