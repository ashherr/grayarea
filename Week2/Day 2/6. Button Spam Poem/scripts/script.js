const poems = [
    'A cat with a hat',
    'Sat on a mat',
    'A dog in the fog',
    'Jumped over a log',
    'The cat chased the dog',
    'Around the bog',
    'The dog and the cat',
    'Had a little chat'
];

function handleButtonClick() {
    const newButton = createNewButton();
    document.getElementById('buttons').appendChild(newButton);
}

function createNewButton() {
    const button = document.createElement('button');
    button.textContent = getRandomPoem();
    button.onclick = handleButtonClick;
    return button;
}

function getRandomPoem() {
    const index = Math.floor(Math.random() * poems.length);
    return poems[index];
}
