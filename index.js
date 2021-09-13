// Alert for opening web in laptop
alert('Please Open in Computer or Laptop.');
// from youtube top button', function'
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})



{/* </script> */}
