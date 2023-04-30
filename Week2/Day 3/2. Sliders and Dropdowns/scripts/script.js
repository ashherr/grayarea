document.addEventListener('DOMContentLoaded', function() {
    const wordElement = document.getElementById('word');
    const repeatSlider = document.getElementById('repeatSlider');
    const colorSelect = document.getElementById('colorSelect');

    function updateWordRepetition() {
        const repetition = repeatSlider.value;
        wordElement.textContent = 'Hello'.repeat(repetition);
    }

    function updateWordColor() {
        const color = colorSelect.value;
        wordElement.style.color = color;
    }

    repeatSlider.addEventListener('input', updateWordRepetition);
    colorSelect.addEventListener('change', updateWordColor);
});