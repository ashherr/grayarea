const poem1 = [
    'A gentle breeze',
    'Autumn leaves fall',
    'Moonlit shadows'
];

const poem2 = [
    'Whispers through the trees',
    'Dancing to the ground',
    'Stretch across the path'
];

const poem3 = [
    'Nature sings its song',
    'In the season of change',
    'Silent and profound'
];

const poemDiv = document.getElementById('poem');

function generatePoem() {
    const line1 = poem1[Math.floor(Math.random() * poem1.length)];
    const line2 = poem2[Math.floor(Math.random() * poem2.length)];
    const line3 = poem3[Math.floor(Math.random() * poem3.length)];

    poemDiv.innerHTML = `${line1}<br>${line2}<br>${line3}`; // with line breaks
}

generatePoem();
setInterval(generatePoem, 3000); // change the poem every 3 seconds