const audio = new Audio('assets/sound.wav');
audio.loop = true;

function handleCheckbox() {
    const isChecked = document.getElementById('checkbox1').checked;
    if (isChecked) {
        audio.play();
    } else {
        audio.pause();
    }
}

function handleRadio() {
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');

    if (radio1.checked) {
        alert('I am popup 1');
    } else if (radio2.checked) {
        alert('I am popup 2');
    } else {
        alert('No radio button is selected');
    }
}

const myImage = document.getElementById('myImage');
const handleImageClick = () => {
    const src = 'assets/' + Math.floor(Math.random() * 4) + '.gif';
    myImage.src = src;
}
myImage.addEventListener('click', handleImageClick);
