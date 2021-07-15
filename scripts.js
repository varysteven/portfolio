var colorIndex = 0;
//Change the color of the website
function changeColor() {
  //List of all the website colors.
  var colors = ["red", "green", "blue"];
  //Go to the next color
  colorIndex++;
  //Loop back to the first color at end
  if (colorIndex > colors.length - 1) {
    colorIndex = 0;
  }
  //Update the style color
  document.querySelector(':root').style.setProperty('--mainColor', colors[colorIndex]);
  document.querySelector(':root').style.setProperty('--subColor',"dark" + colors[colorIndex]);
  return;
}

var profileIndex = 0;
//Change the text of the tagline
function nextProfile() {
  //List of the tagline profiles
  var profiles = ["Software Developer", "Gadget Inventor", "Creative Genius", "Sexy Beast"];
  //Go to the next profile
  profileIndex++;
  //Loop back to first profile at end
  if (profileIndex > profiles.length - 1) {
    profileIndex = 0;
  }
  //Update the tagline
  document.getElementById("tagline").innerHTML = profiles[profileIndex];
  return;
}

var slideIndex = 1;
showSlide(slideIndex);
//Go n slides forward
function forwardSlides(n) {
  showSlide(slideIndex += n);
}
//Show the slide in position n
function showSlide(n) {
  //List of all slides with the "slidePhoto" class style
  var slides = document.getElementsByClassName("slidePhoto");
  //Loops back around to first or last slide at the end
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  //Hide all of the unselected slides
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Display the selected slide
  slides[slideIndex-1].style.display = "block";
  return;
}
