const actualForm = document.querySelector(".actual-form");

const requiredInputIds = ["name", "email", "title", "message"];
const requiredInputs = [];

for (let i = 0; i < requiredInputIds.length; i++) {
  const input = document.querySelector(`#${requiredInputIds[i]}`);
  const errorMessage = input.nextElementSibling;
  requiredInputs.push({ input, errorMessage });
}

actualForm.addEventListener("submit", function (e) {
  e.preventDefault();

  for (let i = 0; i < requiredInputs.length; i++) {
    const input = requiredInputs[i].input;
    const errorMessage = requiredInputs[i].errorMessage;

    if (input.value === "") {
      input.classList.add("missing-field");
      errorMessage.classList.remove("hidden");
    } else {
      input.classList.remove("missing-field");
      errorMessage.classList.add("hidden");
    }
  }
});

function main() {
  console.log("=====");
}

main();
