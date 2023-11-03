const formReg = document.querySelector(".login-form");

formReg.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { elements:
    { email, password }, } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const user = {Email: email.value, Password: password.value}
  console.log(user);
  event.currentTarget.reset();
}