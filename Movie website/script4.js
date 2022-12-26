let {realName, userName, mobile, email, password, confirmPassword} = JSON.parse(localStorage.getItem("formData"));

let email_retrieve = document.getElementById("email_retrieve");
let view = document.getElementById("view");
let retrieve = document.getElementById("retrieve");
let report = "Wrong Email";

retrieve.addEventListener("click", function(){
    if(email_retrieve.value === email){
        view.innerHTML = confirmPassword;
        // location.href = "./login.html";
    } else {
        view.innerHTML = report;
        location.reload();
    }
    // console.log(email_retrieve.value);
});

// console.log(localStorage.getItem("formData.password"));
// console.log(email);
// console.log(confirmPassword);


// retrieve.addEventListener("click", function(){
//     let emailRetrieve = email_retrieve.value;
//     for(i=0; i<localStorage.length; i++){
//         console.log(localStorage.i);
//         // info.push(localStorage[1]);
//     }
//     // console.log(emailRetrieve);
//     // view.innerHTML = localStorage.getItem("Password");
// });
// if(emailRetrieve === localStorage.getItem("Email")){
//     view.innerHTML = localStorage.getItem("Password");
// }else{
//     view.innerHTML = report;
//     location.reload();
// }
// console.log(info);