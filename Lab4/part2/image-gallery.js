const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

//Data object: Array of image file names and their corresponding alt text
const images = [
    { filename: "pic1.jpg", alt: "Closeup of a human eye" },
    { filename: "pic2.jpg", alt: "Rock that looks like a wave"},
    { filename: "pic3.jpg", alt: "Purple and white pansies" },
    { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

// 2. Base URL for images
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Loop through the images using a for...of loop and add an event listener to each thumbnail
for (const image of images) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", baseURL + image.filename);
  newImage.setAttribute("alt", image.alt);
  newImage.setAttribute("tabindex", "0"); // make focusable by keyboard
  thumbBar.appendChild(newImage);

  // Update the display to show the image full size when a thumb is clicked 
    newImage.addEventListener("click", () => {
    updateDisplayedImage(newImage);

    });

      // Keyboard accessibility: Enter/Return key
  newImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      updateDisplayedImage(newImage);
    }
  });
}

// 4. Function to update displayed image
function updateDisplayedImage(imgElement) {
  displayedImage.src = imgElement.src;
  displayedImage.alt = imgElement.alt;
}














