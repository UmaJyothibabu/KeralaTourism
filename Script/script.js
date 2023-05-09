let firstName = document.getElementById("floatingFirstName");
let email = document.getElementById("floatingInputmail");
let phone = document.getElementById("floatingInputPh");
let password = document.getElementById("floatingPassword");
let confirmpwd = document.getElementById("floatingPassword1");
let pwdRules = document.getElementsByClassName("password-rules");
let validemail = false,
  validphone = false,
  validname = false,
  validpassword = false,
  validconfirm = false;

let rulelen = false,
  rulenum = false,
  ruleupper = false,
  rulelower = false;

//First name mandatory
firstName.addEventListener("blur", fillcheckFname);
function fillcheckFname() {
  let fieldName = "First name";
  firstName.style.borderColor = "red";
  let alertmsg = document.getElementById("msgFname");
  if (firstName.value == "") {
    fillCheck(fieldName, alertmsg);
  } else {
    nameValidation(alertmsg);
  }
}

function fillCheck(fieldName, alertmsg) {
  alertmsg.innerHTML = `<h6>${fieldName} is mandatory</h6>`;
  alertmsg.style.color = "red";
  alertmsg.style.fontFamily = "'Times New Roman', Times, serif";
  alertmsg.style.fontSize = "1em";
  // alertmsg.style.fontStyle = "italic";
  alertmsg.style.fontWeight = "bold";
}
firstName.addEventListener("focusin", resetmsgFname);
function resetmsgFname() {
  let alertmsg = document.getElementById("msgFname");
  alertmsg.innerHTML = "";
  firstName.style.borderColor = "#f5f8fa";
}

// Email mandatory
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
  alertmsg.innerHTML = "";
  email.style.borderColor = "#f5f8fa";
}

// Phone number mandatory
phone.addEventListener("blur", fillcheckPhone);
function fillcheckPhone() {
  let fieldName = "Phone Number";

  let alertmsg = document.getElementById("msgph");
  if (phone.value == "") {
    fillCheck(fieldName, alertmsg);
    phone.style.borderColor = "red";
  } else {
    phoneValidation(alertmsg);
  }
}
phone.addEventListener("focusin", resetmsgPhone);
function resetmsgPhone() {
  let alertmsg = document.getElementById("msgph");
  alertmsg.innerHTML = "";
  phone.style.borderColor = "#f5f8fa";
}

// Password Mandatory
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
// password.addEventListener("focusin", resetmsgPwd);
// function resetmsgPwd() {
//   let alertmsg = document.getElementById("msgpwd");
//   alertmsg.innerHTML = "";
// }
// pwd Confirm mandatory
confirmpwd.addEventListener("blur", fillcheckPwd1);
function fillcheckPwd1() {
  let fieldName = "Password confirmation";

  let alertmsg = document.getElementById("msgpwd1");
  if (
    confirmpwd.value.length >= password.value.length &&
    confirmpwd.value != password.value
  ) {
    confirmpwd.value = "";
  }
  if (confirmpwd.value == password.value) {
    alertmsg.innerHTML = `<h6>Password Match</h6>`;
    alertmsg.style.color = "green";
    setTimeout(() => {
      alertmsg.innerHTML = "";
    }, 400);
  }
  if (confirmpwd.value == "") {
    fillCheck(fieldName, alertmsg);
    confirmpwd.style.borderColor = "red";
  } // else {
  //   confirmpwdValidation();
  // }
}
confirmpwd.addEventListener("focusin", resetmsgPwd1);
function resetmsgPwd1() {
  let alertmsg = document.getElementById("msgpwd1");
  alertmsg.innerHTML = "";
  confirmpwd.style.borderColor = "#f5f8fa";
}

// Name validation
let regexname = /^([A-Za-z][A-Za-z\.\- ]+)$/;
function nameValidation(alertmsg) {
  alertmsg.style.fontFamily = "'Times New Roman', Times, serif";
  alertmsg.style.fontSize = "1em";

  if (regexname.test(firstName.value)) {
    alertmsg.innerHTML = `<h6>Valid name</h6>`;
    alertmsg.style.color = "green";
    firstName.style.borderColor = "green";
    validname = true;
    setTimeout(() => {
      alertmsg.innerHTML = "";
      firstName.style.borderColor = "#f5f8fa";
    }, 400);
  } else {
    alertmsg.innerHTML = `<h6>Invalid Name </h6>`;
    alertmsg.style.color = "red";
    firstName.style.borderColor = "red";
    firstName.value = "";
    validname = false;
  }
}

// Email Validation
let regexmail =
  /^([a-zA-Z\d]([A-Za-z\d!#$%&'*+\-\/\?\^_`{|}\.=~]+[a-zA-Z\d])?)+@[a-zA-Z\d\-]{2,}\.[a-z]{2,5}(.[a-z]{2,5})?$/;
function emailValidation(alertmsg) {
  alertmsg.style.fontFamily = "'Times New Roman', Times, serif";
  alertmsg.style.fontSize = "1em";
  if (regexmail.test(email.value)) {
    alertmsg.innerHTML = `<h6>Valid email format</h6>`;
    alertmsg.style.color = "green";
    alertmsg.style.fontWeight = "normal";
    email.style.borderColor = "green";
    validemail = true;
    setTimeout(() => {
      alertmsg.innerHTML = "";
      email.style.borderColor = "#f5f8fa";
    }, 400);
  } else {
    alertmsg.innerHTML = `<h6>Invalid Email </h6>`;
    alertmsg.style.color = "red";
    email.style.borderColor = "red";
    email.value = "";
    validemail = false;
  }
}

// phone number validation
let regexphone = /^([\d]{3}[\-\. ]?){2}[\d]{4}$/;
function phoneValidation(alertmsg) {
  alertmsg.style.fontFamily = "'Times New Roman', Times, serif";
  alertmsg.style.fontSize = "1em";
  let regexph1 = /^[\d]{10}$/;
  let regexph2 = /^([\d]{3}\-){2}[\d]{4}$/;
  let regexph3 = /^([\d]{3}\.){2}[\d]{4}$/;
  let regexph4 = /^([\d]{3} ){2}[\d]{4}$/;
  if (regexphone.test(phone.value)) {
    if (
      regexph1.test(phone.value) ||
      regexph2.test(phone.value) ||
      regexph3.test(phone.value) ||
      regexph4.test(phone.value)
    ) {
      alertmsg.innerHTML = `<h6>Valid phone number</h6>`;
      alertmsg.style.color = "green";
      phone.style.borderColor = "green";
      validphone = true;
      setTimeout(() => {
        alertmsg.innerHTML = "";
        phone.style.borderColor = "#f5f8fa";
      }, 400);
    } else {
      alertmsg.innerHTML = `<h6>Invalid phone number </h6>`;
      alertmsg.style.color = "red";
      phone.style.borderColor = "red";
      phone.value = "";
      validphone = false;
    }
  } else {
    alertmsg.innerHTML = `<h6>Invalid phone number </h6>`;
    alertmsg.style.color = "red";
    phone.style.borderColor = "red";
    phone.value = "";
    validphone = false;
  }
}

// Password validation

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
togglePass[1].addEventListener("click", function () {
  console.log(togglePass[1].classList);
  togglePass[1].classList.toggle("active");
  if (confirmpwd.getAttribute("type") == "password") {
    confirmpwd.setAttribute("type", "text");
  } else {
    confirmpwd.setAttribute("type", "password");
  }
});

password.addEventListener("focusin", resetmsgPwd);
function resetmsgPwd() {
  let alertmsg = document.getElementById("msgpwd");
  alertmsg.innerHTML = "";
  password.style.borderColor = "#f5f8fa";
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
    rulelen = true;
  } else {
    lengthRule[0].classList.remove("active");
    rulelen = false;
  }
  if (uCase.test(password.value)) {
    upper[0].classList.add("active");
    ruleupper = true;
  } else {
    upper[0].classList.remove("active");
    ruleupper = false;
  }
  if (lCase.test(password.value)) {
    lower[0].classList.add("active");
    rulelower = true;
  } else {
    lower[0].classList.remove("active");
    rulelower = false;
  }
  if (numbers.test(password.value)) {
    numberRule[0].classList.add("active");
    rulenum = true;
  } else {
    numberRule[0].classList.remove("active");
    rulenum = false;
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

confirmpwd.addEventListener("keyup", comparePass);

function comparePass() {
  let pwdVal = password.value;
  let pwdCMsg = document.getElementById("msgpwd1");
  if (confirmpwd.value == pwdVal) {
    pwdCMsg.innerHTML = `<h6>Password match</h6>`;
    pwdCMsg.style.color = "green";
    confirmpwd.style.borderColor = "green";
    setTimeout(() => {
      pwdCMsg.innerHTML = "";
      confirmpwd.style.borderColor = "#f5f8fa";
    }, 400);
    validconfirm = true;
  } else {
    pwdCMsg.innerHTML = `<h6>Password not match</h6>`;
    pwdCMsg.style.color = "red";
    confirmpwd.style.borderColor = "red";
    validconfirm = false;
    setTimeout(() => {
      pwdCMsg.innerHTML = "";
    }, 400);
  }
  if (confirmpwd.value == "") {
    fillCheck("confirm Password", pwdCMsg);
  }
}

function passregexValidation() {
  passregex = /^[A-Za-z0-9]{8,32}$/;
  let alertmsg = document.getElementById("msgpwd");
  if (
    passregex.test(password.value) &&
    rulelen &&
    rulelower &&
    ruleupper &&
    rulenum
  ) {
    alertmsg.style.color = "green";
    alertmsg.innerHTML = `<h6>Valid Password</h6>`;
    validpassword = true;
    setTimeout(() => {
      alertmsg.innerHTML = "";
    }, 400);
  } else {
    alertmsg.innerHTML = `<h6>Invalid password </h6>`;
    alertmsg.style.color = "red";
    password.value = "";
    showHide.style.color = "#000";
    iconText.style.color = "#000";
    text.textContent = "";
    validpassword = false;
    lengthRule[0].classList.remove("active");
    upper[0].classList.remove("active");
    lower[0].classList.remove("active");
    numberRule[0].classList.remove("active");
  }
}

// let submitButton = document.getElementsById("submit-btn");
// submitButton.addEventListener("onclick", checkFiedlds);
function checkFields() {
  if (validconfirm && validemail && validname && validpassword && validphone) {
    return true;
  } else {
    alert("Fill the mandatory fields");
    return false;
  }
}
