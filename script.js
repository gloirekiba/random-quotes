const quote = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");
const credits = document.querySelector(".credits");

function randNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PushQuote() {
  let rand = randNum(0, 1643);
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      quote.textContent = data[rand].text;
      if (data[rand].author === null) {
        quoteAuthor.textContent = "Unknown Author";
      } else {
        quoteAuthor.textContent = data[rand].author;
      }
    });
}
PushQuote();

configIcon.addEventListener("click", () => {
  credits.classList.remove("d-none");
});

closeCredits.addEventListener("click", () => {
  credits.classList.add("d-none");
});

refresh.addEventListener("click", () => {
  PushQuote();
});
