const imgBackground = document.querySelector("#img-background");

const images = ["0.png", "1.jpg", "2.jpg", "3.jpg", "4.jpg"]


function changeBackground(){
        
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url(img/${chosenImage}`;
}
changeBackground();
imgBackground.addEventListener("click", changeBackground);
// document.body.style.backgroundImage = `url(img/2.jpg`;