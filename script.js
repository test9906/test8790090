const signInDialog = document.getElementById("sign-in-dialog");

document.getElementById("open-sign-in").addEventListener("click", () => {
  signInDialog.showModal();
});

document.getElementById("close-sign-in").addEventListener("click", () => {
  signInDialog.close();
});

signInDialog.addEventListener("click", (event) => {
  if (event.target === signInDialog) signInDialog.close();
});

document.getElementById("sign-in-form").addEventListener("submit", (event) => {
  event.preventDefault();
});
