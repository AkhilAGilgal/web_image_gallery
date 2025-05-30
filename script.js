const images = [
    { src: 'https://images.unsplash.com/photo-1506744038136-465a660a80e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Misty mountain range', caption: 'A serene view of misty mountains at dawn.' },
    { src: 'https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'City street at night', caption: 'Bright lights of a bustling city street at night.' },
    { src: 'https://cdn.pixabay.com/photo/2016/10/27/22/35/forest-1776707_1280.jpg', alt: 'Path through an autumn forest', caption: 'An inviting path through a vibrant autumn forest.' },
    
];

const mainImage = document.getElementById('mainImage');
const imageCaption = document.getElementById('imageCaption');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbnailContainer = document.getElementById('thumbnailContainer');

let currentImageIndex = 0;

function displayMainImage(index) {
    if (index < 0) {
        currentImageIndex = images.length - 1;
    } else if (index >= images.length) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = index;
    }

    const image = images[currentImageIndex];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    imageCaption.textContent = image.caption;

    updateActiveThumbnail();
}

function showNextImage() {
    displayMainImage(currentImageIndex + 1);
}

function showPreviousImage() {
    displayMainImage(currentImageIndex - 1);
}

function createThumbnails() {
    images.forEach((image, index) => {
        const thumbDiv = document.createElement('div');
        thumbDiv.classList.add('thumbnail');

        const thumbImg = document.createElement('img');
        thumbImg.src = image.src;
        thumbImg.alt = image.alt;
        thumbImg.dataset.index = index;

        thumbDiv.addEventListener('click', () => {
            displayMainImage(index);
        });

        thumbDiv.appendChild(thumbImg);
        thumbnailContainer.appendChild(thumbDiv);
    });
}

function updateActiveThumbnail() {
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        if (index === currentImageIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

prevBtn.addEventListener('click', showPreviousImage);
nextBtn.addEventListener('click', showNextImage);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        showNextImage();
    } else if (event.key === 'ArrowLeft') {
        showPreviousImage();
    }
});

createThumbnails();
displayMainImage(0);
