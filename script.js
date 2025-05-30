const images = [
    { src: 'https://via.placeholder.com/800x450/FF5733/FFFFFF?text=Image+1', alt: 'Sunrise over mountains', caption: 'Majestic sunrise from the peaks.' },
    { src: 'https://via.placeholder.com/800x450/33FF57/000000?text=Image+2', alt: 'Cityscape at night', caption: 'Vibrant city lights after dusk.' },
    { src: 'https://via.placeholder.com/800x450/3357FF/FFFFFF?text=Image+3', alt: 'Peaceful forest path', caption: 'A serene path through the dense forest.' },
    { src: 'https://via.placeholder.com/800x450/FF33CC/FFFFFF?text=Image+4', alt: 'Ocean waves crashing', caption: 'Powerful waves on a sandy beach.' },
    { src: 'https://via.placeholder.com/800x450/CCFF33/000000?text=Image+5', alt: 'Abstract art', caption: 'Colorful abstract patterns.' }
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
