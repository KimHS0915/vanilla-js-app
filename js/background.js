const images = ["0.jpg", "1.jpg", "2.jpg"];

const displayRandomImage = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const backgroundImage = document.createElement("img");
  backgroundImage.src = `images/${randomImage}`;
  document.body.appendChild(backgroundImage);
};

displayRandomImage();
