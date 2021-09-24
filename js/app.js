const btnShow = document.querySelector('.btn-show')
const gallery = document.querySelector('.gallery')
const mainImage = document.querySelector('.main-img')
const galleryImages = document.querySelectorAll('.gallery-img')
const prevImage = document.querySelector('.fa-arrow-alt-left')
const nextImage = document.querySelector('.fa-arrow-alt-right')

const togglegallery = () => {
    if (gallery.classList.contains('show')) {
        btnShow.innerHTML = '<i class="fa fa-arrow-down " aria-hidden="true"> <span>Show gallery</span></i>'
        gallery.classList.remove('show')
        gallery.classList.add('hide')

    } else {
        btnShow.innerHTML = '<i class="fa fa-arrow-up " aria-hidden="true"> <span>Hide gallery</span></i>'
        gallery.classList.remove('hide')
        gallery.classList.add('show')
    }
}

btnShow.addEventListener('click', () => {
    togglegallery()
})

const removeActive = () => {
    for (const image of galleryImages) {
        image.classList.remove('active')
    }
}



galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        removeActive()
        image.classList.add('active')
        const img = image.style.backgroundImage
        mainImage.style.backgroundImage = img
    })
})

nextImage.addEventListener('click', () => {
    let currentImage = mainImage.style.backgroundImage
    removeActive()
    galleryImages[0].classList.add('active')
    mainImage.style.backgroundImage = galleryImages[0].style.backgroundImage
    galleryImages.forEach((image, index) => {
        if (currentImage == image.style.backgroundImage) {
            if (index !== galleryImages.length - 1) {
                removeActive()
                let nextImage = galleryImages[++index].style.backgroundImage
                galleryImages[index].classList.add('active')
                mainImage.style.backgroundImage = nextImage

            } else {
                removeActive()
                galleryImages[0].classList.add('active')
                mainImage.style.backgroundImage = galleryImages[0].style.backgroundImage
            }
        }

    })
})

prevImage.addEventListener('click', () => {
    let currentImage = mainImage.style.backgroundImage
    removeActive()
    galleryImages[3].classList.add('active')
    mainImage.style.backgroundImage = galleryImages[3].style.backgroundImage
    galleryImages.forEach((image, index) => {
        if (currentImage === image.style.backgroundImage) {
            if (index !== 0) {
                removeActive()
                let prevImage = galleryImages[--index].style.backgroundImage
                galleryImages[index].classList.add('active')
                mainImage.style.backgroundImage = prevImage

            } else {
                removeActive()
                galleryImages[3].classList.add('active')
                mainImage.style.backgroundImage = galleryImages[3].style.backgroundImage
            }

        }
    })

})