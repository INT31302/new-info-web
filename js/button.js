function saveInfo() {
  let id = document.getElementById("user_id").value,
    pw = document.getElementById("user_password").value;
  localStorage.setItem(id, pw);
  location.href = "./index.html";
}
