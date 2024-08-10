let selectedColor = '';

document.querySelectorAll('.color-picker .btn').forEach(button => {
    button.addEventListener('click', function() {
        selectedColor = this.getAttribute('data-color');
    });
});

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function() {
        if (selectedColor) {
            this.style.backgroundColor = selectedColor;
        }
    });
});

document.getElementById('clear').addEventListener('click', function() {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = '#ffffff';
    });
    selectedColor = '';
});
