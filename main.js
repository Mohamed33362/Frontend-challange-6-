let img = document.getElementById("img")

if (matchMedia) {
    let media = window.matchMedia("(max-width: 576px)")
    media.addListener(widthChange)
    widthChange(media)
}

function widthChange(media) {
    if (media.matches) {
        img.setAttribute("src","./images/image-product-mobile.jpg")
    } else {
        img.setAttribute("src","./images/image-product-desktop.jpg")
    }
}