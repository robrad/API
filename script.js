const UI = {
    picture: document.querySelector(".picture"),
    newPictureButton: document.querySelector("#newPictureButton"),
    autoplayButton: document.querySelector("#autoplayButton")
}

let pictureData;
let autoplayInterval;

UI.newPictureButton.addEventListener("click", () => {
    fetchPicture();
})

UI.autoplayButton.addEventListener("click", () => {
    if (autoplayInterval) {
        UI.autoplayButton.innerHTML = "Autoplay";
        stopAutoplay();
    }else{
        UI.autoplayButton.innerHTML = "STOP";
        fetchPicture();
        autoplayInterval = setInterval(() => {
            fetchPicture();
        },4000) 
    }
})

function fetchPicture() {
    fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
        console.log("Atsakymas iš serverio gautas!");
        
        response.json().then((data) => {
            pictureData = data.message;

            renderPicture();

            console.log(data);
        });
    });
}

function renderPicture() {
    UI.picture.src=pictureData;
    console.log(pictureData);
    console.log(UI.picture);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
}
