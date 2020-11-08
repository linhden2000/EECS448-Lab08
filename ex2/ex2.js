var imgIndex = 1;
showImg(imgIndex);

// Next/previous controls
function plusImg(n) {
  showImg(imgIndex += n);
}

// Thumbnail image controls
function currentImg(n) {
  showImg(imgIndex = n);
}

function showImg(n) {
  var i;
  var img = document.getElementsByClassName("img");
  if (n > img.length) {imgIndex = 1}
  if (n < 1) {imgIndex = img.length}
  for (i = 0; i < img.length; i++) {
      img[i].style.display = "none";
  }
  img[imgIndex-1].style.display = "block";
}