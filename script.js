function uploadImage() {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '300px';
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
        };

        reader.readAsDataURL(imageInput.files[0]);
    }
}
