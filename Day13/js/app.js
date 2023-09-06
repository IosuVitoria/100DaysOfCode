const images = document.querySelectorAll('.image');
const button = document.getElementById('changeImagesButton');
const photoOne = document.getElementById('first__photo')


for (let [i, imageSelected] of images.entries()) { 
    imageSelected.addEventListener("click", function focus() {
        resetFocus();
        imageSelected.classList.toggle('active');
    });
}

function resetFocus() {
    images.forEach(i => i.classList.remove('active'))
}

