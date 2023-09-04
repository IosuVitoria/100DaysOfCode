const images = document.querySelectorAll('.image');

for (let [i, imageSelected] of images.entries()) { // Utiliza 'images' en lugar de 'image'
    imageSelected.addEventListener("click", function focus() {
        resetFocus();
        imageSelected.classList.toggle('active');
    });
}

function resetFocus() {
    images.forEach(i => i.classList.remove('active'))
}