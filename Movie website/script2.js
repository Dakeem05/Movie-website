
//  let click = document.getElementById("click");
//  click.addEventListener("click", function(){
//    alert("hello world");
//    console.log(localStorage.getItem("FullName"));
//  });
let {realName, userName, mobile, email, password, confirmPassword} = JSON.parse(localStorage.getItem("formData"));



let username_login = document.getElementById("username_login");
let password_login = document.getElementById("password_login");
let login = document.getElementById("login");
let log = document.getElementById("log");
let welcome = document.getElementById("welcome")

// let user = localStorage.getItem("User Name");
// let fill = document.getElementById("fill");
// let first = user.slice(0,1);
// let rest = user.slice(1, user.length);
// let firstCaps = first.toUpperCase();
// let restCaps = rest.toLowerCase();
// let actual2 = `Welcome ${firstCaps}${restCaps}`;
// fill.textContent(actual2);
login.addEventListener("click", function(){
  let usernameLogin = username_login.value;
  let passwordLogin = password_login.value;

  if (usernameLogin === userName && passwordLogin === confirmPassword){
    
    location.href = "./index.html";
    // welcome.style.display = "block";
  } else {
    log.style.display = "block";
    location.reload();
  }
});
// console.log(userName);




// name.addEventListener('click', (e) =>{
//   let user = document.querySelector("#name");

//   let actual = user.value;
  
//   let fill = document.querySelector("#fill");

//   if (!actual) {
//       alert(`Please fill out task`);
//       return;
//   }
//   let first = actual.slice(0,1);
//   let rest = actual.slice(1, actual.length);
//   let firstCaps = first.toUpperCase();
//   let restCaps = rest.toLowerCase();
//   let actual2 = `${firstCaps}${restCaps}`;
//   let actual3 =`${actual2}'s`


//   fill.textContent = actual3;
// })