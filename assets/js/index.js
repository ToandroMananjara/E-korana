const passwordIcon = document.querySelector(".fa-eye");
const passwordInput = document.querySelector("#password");

passwordIcon.addEventListener("click", (e) => {
  if (passwordIcon.classList.contains("fa-eye")) {
    passwordIcon.classList.replace("fa-eye", "fa-eye-slash");
    passwordInput.type = "text";
  } else if (passwordIcon.classList.contains("fa-eye-slash")) {
    passwordIcon.classList.replace("fa-eye-slash", "fa-eye");
    passwordInput.type = "password";
  }
});

const handleInscription = () => {
  document.querySelector(".pop-up-container").style.display = "block";
  const inscriptionInputs = document.querySelectorAll(".myInput");

  inscriptionInputs.forEach((input) => {
    input.value = "";
  });
};

const handleCancel = () => {
  document.querySelector(".pop-up-container").style.display = "none";
};
