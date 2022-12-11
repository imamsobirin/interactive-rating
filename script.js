const ratingValue = document.querySelector(".rating-group");
const submit = document.querySelector(".btn-submit");
const result = document.querySelector(".result");

let rating;
ratingValue.addEventListener("click", function (e) {
  const children = ratingValue.children;
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    rating = 0;
  } else if (e.target.classList.contains("rating")) {
    for (i = 0; i < children.length; i++) {
      children[i].classList.remove("active");
    }
    rating = e.target.value;
    e.target.classList.toggle("active");
  }
});

submit.addEventListener("click", () => {
  if (rating != 0 && rating !== undefined) {
    document.querySelector(".rating-state").style.display = "none";
    result.innerHTML = `<p>You selected ${rating} out of 5</p>`;
    document.querySelector(".thank-state").style.display = "flex";
  } else {
    alert("choose any rating first");
  }
});
