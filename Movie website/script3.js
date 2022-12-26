let {realName, userName, mobile, email, password, confirmPassword} = JSON.parse(localStorage.getItem("formData"));

let user = userName;
let fill = document.getElementById("fill");
let first = user.slice(0,1);
let rest = user.slice(1, user.length);
let firstCaps = first.toUpperCase();
let restCaps = rest.toLowerCase();
let actual2 = `Welcome ${firstCaps}${restCaps}`;
fill.innerHTML = actual2;