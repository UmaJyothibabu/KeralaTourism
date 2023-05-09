let email = document.getElementById("floatingInputmail");
let password = document.getElementById("floatingPassword");
let pwdRules = document.getElementsByClassName("password-rules");
let flag = 0;
let validemail = false,
  validpassword = false;

function fillCheck(fieldName, alertmsg) {
  alertmsg.innerHTML = `<h6>${fieldName} is mandatory</h6>`;
  alertmsg.style.color = "red";
  alertmsg.style.fontFamily = "'Times New Roman', Times, serif";
  alertmsg.style.fontSize = "1em";
  // alertmsg.style.fontStyle = "italic";
  alertmsg.style.fontWeight = "bold";
}

email.addEventListener("blur", fillcheckMail);
function fillcheckMail() {
  let fieldName = "Email";

  let alertmsg = document.getElementById("msgmail");
  if (email.value == "") {
    fillCheck(fieldName, alertmsg);
    email.style.borderColor = "red";
  } else {
    emailValidation(alertmsg);
  }
}
email.addEventListener("focusin", resetmsgMail);
function resetmsgMail() {
  let alertmsg = document.getElementById("msgmail");
  email.style.borderColor = "#f5f8fa";
  alertmsg.innerHTML = "";
}

password.addEventListener("blur", fillcheckPwd);
function fillcheckPwd() {
  let fieldName = "Password";

  pwdRules[0].classList.remove("active");
  let alertmsg = document.getElementById("msgpwd");
  if (password.value == "") {
    fillCheck(fieldName, alertmsg);
    password.style.borderColor = "red";
  } else {
    passregexValidation();
  }
}
let regexmail =
  /^([a-zA-Z\d]([A-Za-z\d!#$%&'*+\-\/\?\^_`{|}\.=~]+[a-zA-Z\d])?)+@[a-zA-Z\d\-]{2,}\.[a-z]{2,5}(.[a-z]{2,5})?$/;
function emailValidation(alertmsg) {
  alertmsg.style.fontFamily = "'Times New Roman', Times, serif";
  alertmsg.style.fontSize = "1em";
  if (regexmail.test(email.value)) {
    alertmsg.innerHTML = `<h6>Valid email format</h6>`;
    alertmsg.style.color = "green";
    email.style.borderColor = "green";
    alertmsg.style.fontWeight = "normal";
    validemail = true;
    setTimeout(() => {
      alertmsg.innerHTML = "";
      email.style.borderColor = "#f5f8fa";
    }, 400);
  } else {
    alertmsg.innerHTML = `<h6>Invalid Email </h6>`;
    email.style.borderColor = "red";
    alertmsg.style.color = "red";
    email.value = "";
    validemail = false;
  }
}
let togglePass = document.getElementsByClassName("toggle-password");
togglePass[0].addEventListener("click", function () {
  console.log(togglePass[0].classList);
  togglePass[0].classList.toggle("active");
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
password.addEventListener("focusin", resetmsgPwd);
function resetmsgPwd() {
  let alertmsg = document.getElementById("msgpwd");
  alertmsg.innerHTML = "";
  passwordRules();
}

// let pwdRules = document.getElementsByClassName("password-rules");
function passwordRules() {
  pwdRules[0].classList.add("active");
}

let uCase = /[A-Z]/,
  numbers = /[0-9]/,
  lCase = /[a-z]/,
  leng = /.{8,}/;

let lengthRule = document.getElementsByClassName("length");
let numberRule = document.getElementsByClassName("numberrule");
let upper = document.getElementsByClassName("uppercaserule");
let lower = document.getElementsByClassName("lowercaserule");

password.addEventListener("keyup", passValidation);

function passValidation() {
  if (leng.test(password.value)) {
    lengthRule[0].classList.add("active");
  } else {
    lengthRule[0].classList.remove("active");
  }
  if (uCase.test(password.value)) {
    upper[0].classList.add("active");
  } else {
    upper[0].classList.remove("active");
  }
  if (lCase.test(password.value)) {
    lower[0].classList.add("active");
  } else {
    lower[0].classList.remove("active");
  }
  if (numbers.test(password.value)) {
    numberRule[0].classList.add("active");
  } else {
    numberRule[0].classList.remove("active");
  }
  passwordStrength();
}

function pStrength(pwdVal) {
  let i = 0;
  if (pwdVal.length > 8) {
    i++;
  }
  if (pwdVal.length > 10) {
    i++;
  }
  if (pwdVal.length >= 11) {
    i++;
  }
  if (uCase.test(pwdVal)) {
    i++;
  }
  if (lCase.test(pwdVal)) {
    i++;
  }
  if (numbers.test(pwdVal)) {
    i++;
  }
  if (/[A-Za-z0-9]/.test(pwdVal)) {
    i++;
  }
  return i;
}

const indicator = document.querySelector(".strengthIndicte"),
  iconText = document.querySelector(".text-icon"),
  text = document.querySelector(".strengthmsg"),
  showHide = document.querySelector(".showHide");
function passwordStrength() {
  let pwdVal = password.value;
  let strength = pStrength(pwdVal);
  if (strength > 0 && strength < 5) {
    text.textContent = "Password strength is weak";
    password.style.color = "#FF6333";
    showHide.style.color = "#FF6333";
    iconText.style.color = "#FF6333";
    password.style.borderColor = "#FF6333";
  } else if (strength >= 5 && strength <= 6) {
    text.textContent = "Password strength is medium";
    password.style.color = "#cc8500";
    showHide.style.color = "#cc8500";
    iconText.style.color = "#cc8500";
    password.style.borderColor = "#cc8500";
  } else {
    if (strength != 0) {
      text.textContent = "Password  is strong";
      password.style.color = "#22C32A";
      showHide.style.color = "#22C32A";
      password.style.borderColor = "#22C32A";
      iconText.style.color = "#22C32A";
    } else {
      text.textContent = "";
      showHide.style.color = "#000";
      iconText.style.color = "#000";
      password.style.color = "#5e6278";
      password.style.borderColor = "#f5f8fa";
    }
  }
}
function passregexValidation() {
  passregex = /^[A-Za-z0-9]{8,32}$/;
  let alertmsg = document.getElementById("msgpwd");
  if (passregex.test(password.value)) {
    alertmsg.style.color = "green";
    flag++;
    setTimeout(() => {
      alertmsg.innerHTML = "";
    }, 400);
    validpassword = true;
  } else {
    alertmsg.innerHTML = `<h6>Invalid password </h6>`;
    password.style.borderColor = "red";
    alertmsg.style.color = "red";
    password.value = "";
    showHide.style.color = "#000";
    iconText.style.color = "#000";
    text.textContent = "";
    validpassword = false;
  }
}
function checkFields() {
  console.log(flag);
  if (validemail && validpassword) {
    console.log(flag);
    return true;
  } else {
    alert("Fill the mandatory fields");
    return false;
  }
}
