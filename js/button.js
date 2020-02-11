function checkLogin() {
  let id = document.getElementById("user_id").value,
    pw = document.getElementById("user_password").value;
  if (id === "") {
    alert("아이디를 입력해주세요.");
  } else if (pw === "") {
    alert("비밀번호를 입력해주세요.");
  } else {
    localStorage.setItem(id, pw);
    location.href = "./index.html";
  }
}

function policy() {
  window.open(
    "https://stud.inje.ac.kr/Privacy.html",
    "개인정보보호정책",
    `width=800,height=1000,location=no,status=no`
  );
}

function find() {
  window.open(
    "https://stud.inje.ac.kr/SYS/SYS04040WS.aspx",
    "ID/PW찾기",
    `width=410,height=640,location=no,status=no`
  );
}
