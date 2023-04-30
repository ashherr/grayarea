const button = document.getElementById('actionButton');
const audioElement = document.getElementById('audioElement');
const displayText = document.getElementById('displayText');

const backgroundImages = [
    'https://media.tenor.com/M3lexDdZRTEAAAAd/pixel-art.gif',
    'https://steamuserimages-a.akamaihd.net/ugc/912408235211382321/62F3FBC8F234B09233ED1B3D0406A93137156A9B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
];

let currentImageIndex = 0;

button.addEventListener('click', () => {
    // Change the background image
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;

    // Play the audio file
    audioElement.currentTime = 0;
    audioElement.play();

    // Display the text
    displayText.style.display = 'welcome to a digital resting place';
});
