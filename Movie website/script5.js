let {realName, userName, mobile, email, password, confirmPassword} = JSON.parse(localStorage.getItem("formData"));

let movies = document.getElementById("movies");
let romance = document.getElementsByClassName("romance");
let action = document.getElementsByClassName("action");
let horror = document.getElementsByClassName("horror");
let sci_fi = document.getElementsByClassName("sci-fi");
let comedy = document.getElementsByClassName("comedy");

let categories = document.getElementById("categories");
let cover = document.getElementById("cover");
let choose = document.getElementById("choose");
let r_btn = document.getElementById("r-btn");
let a_btn = document.getElementById("a-btn");
let h_btn = document.getElementById("h-btn");
let s_btn = document.getElementById("s-btn");
let c_btn = document.getElementById("c-btn");
let genre = document.getElementsByClassName("genre");

let alert = document.getElementById("alert");
let genre_back = document.getElementById("genre_back");
let genre_next = document.getElementById("genre_next");


// if(r_btn.onclick = true){
//  r_btn.style.backgroundColor = "#434242e9"   
// } else if(r_btn.onclick = false){
//     r_btn.style.backgroundColor = "#908f8fe9"
// }
// else {
//     r_btn.style.backgroundColor = "#908f8fe9"
// }

// if(r_btn.style.backgroundColor = "#434242e9"){
//     alert("hy");
// }

// function click (){
//     r_btn.style.backgroundColor ="#434242e9"
// }
// r_btn.addEventListener("click",function(){
//     r_btn.style.backgroundColor = "#434242e9"
//     genre_back.style.display = "block";
//     genre_next.style.display = "block";
    // click()
    // r_btn.style.backgroundColor = "#908f8fe9"
    // if(r_btn.onclick ){
    //     r_btn.style.backgroundColor = "#908f8fe9"
    // }
// });
// a_btn.addEventListener("click",function(){
//     a_btn.style.backgroundColor = "#434242e9"
//     genre_back.style.display = "block";
//     genre_next.style.display = "block";
//     // a_btn.style.backgroundColor = "#908f8fe9"
// });
// h_btn.addEventListener("click",function(){
//     h_btn.style.backgroundColor = "#434242e9"
//     // h_btn.style.backgroundColor = "#908f8fe9"
// });
// s_btn.addEventListener("click",function(){
//     s_btn.style.backgroundColor = "#434242e9"
//     // s_btn.style.backgroundColor = "#908f8fe9"
// });
// c_btn.addEventListener("click",function(){
//     c_btn.style.backgroundColor = "#434242e9"
//     // c_btn.style.backgroundColor = "#908f8fe9"
// });


// if ((r_btn.style.backgroundColor = "#434242e9") && (a_btn.style.backgroundColor = "#434242e9") || (r_btn.style.backgroundColor = "#434242e9") && (h_btn.style.backgroundColor = "#434242e9") || (r_btn.style.backgroundColor = "#434242e9") && (s_btn.style.backgroundColor = "#434242e9") || (r_btn.style.backgroundColor = "#434242e9") && (c_btn.style.backgroundColor = "#434242e9")){
//     genre_back.style.display = "block";
//     genre_next.style.display = "block";
// }
// if (r_btn.style.backgroundColor = "#434242e9"){
//     alert("hy");
// } else{
//     prompt("what?")
// }