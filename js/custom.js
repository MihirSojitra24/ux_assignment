var slider = document.getElementById("range");
var output = document.getElementById("rangevalue");
output.innerHTML = slider.value;

function updateGradient(rangeValue) {
    const percentage = (rangeValue - slider.min) / (slider.max - slider.min) * 100;
    slider.style.setProperty('--percentage', percentage + '%');
}

// Update gradient onload
updateGradient(slider.value);

// Update gradient oninput
slider.addEventListener('input', (e) => {
    output.innerHTML = e.target.value;
    updateGradient(e.target.value);
});