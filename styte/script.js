let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchform.classList.toggle('active');
  navbar.classList.remove('active');
 
  cartItem.classList.remove('active');
}
let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  searchform.classList.remove('active');
 
}
let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
   
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
}

 window.onscroll =() =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
 }     
     

 
function send(){
  var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
  var button = document.getElementById("btn");
  var email = document.getElementById("email").value;
  if( email=="" ){
    alert("Vui lòng điền đầy đủ thông tin email !");
  }
  else if (regExp.test(email)) {
  
      alert("Cảm ơn phản hồi của bạn .Chúng tôi sẽ trả lời bạn sau!");
  }
    else 
   {
      alert("email không hợp lệ , bạn vui lòng nhập lại email!");
  }
}


function login(){
  var arr = document.getElementsByTagName('input');
  var username= arr[0].value;
  var password=arr[1].value;
  if(username=="" && password=="" ){
    alert("Vui lòng điền đầy đủ thông tin  !");
    return;
  }
  else if(username=="user"&& password=="123"){
    window.location.href = "../trangchu.html";
     
  }else{
    alert("Tên đăng nhập hoặc mật khẩu không đúng  !")
  }
}

function dk(){
  var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
  var arr = document.getElementsByTagName('input');
  var name= arr[0].value;
  var email=arr[1].value;
  var pass=arr[2].value;
  if((name=="" || email=="" || pass=="")){
    alert("Vui lòng điền đầy đủ thông tin  !")
  }
  else if(!regExp.test(email)){
    alert("email không hợp lệ , bạn vui lòng nhập lại email!");
  }
  else{
    alert("Đăng kí tài khoản thành công!");
  }
}
