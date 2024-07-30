let myAdvice = document.querySelector(".advice-card p");
let adviceNumber = document.querySelector(".advice-card h2");
let click = document.querySelector(".img-click");
function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      myAdvice.innerHTML = `"${data.slip.advice}"`;
      adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
    });
  function refresh() {
    window.location;
  }
}
click.addEventListener("click", fetchAdvice);

fetchAdvice();
