const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const form = document.querySelector("form");

const resultParagraph = document.querySelector("#result");
const headerParagraph = document.querySelector("#header-paragraph");

form.addEventListener("click", (event) => {
  event.preventDefault();

  const fullName = document.querySelector("#full-name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (!fullName || !email ||!message) {
    resultParagraph.textContent = "Please fill in all fields.";
    return;
  }

  h1.textContent = fullName;
  resultParagraph.textContent = `Your message has been sent successfully`;
});
