
function clearErrors(){

  errors = document.getElementsByClassName('formerror');
  for(let item of errors)
  {
      item.innerHTML = "";
  }
}
function seterror(id, error) {
  element=document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
  event.preventDefault() 
  var returnval=true;
  clearErrors();
  var fname =document.forms['myForm']["fname"].value; 
  var lname =document.forms['myForm']["lname"].value;
  var uname =document.forms['myForm']["uname"].value; 
  var pass =document.forms['myForm']["pass"].value; 
  var cpass =document.forms['myForm']["cpass"].value; 
  var mail =document.forms['myForm']["mail"].value; 
  var addr =document.forms['myForm']["addr"].value;
  var cntry =document.forms['myForm']["cntry"].value; 
  var stat =document.forms['myForm']["states"].value; 
  var zip =document.forms['myForm']["zip"].value;  
  var ccnam =document.forms['myForm']["ccnam"].value;
  var ccnum =document.forms['myForm']["ccnum"].value; 
  var ccexp =document.forms['myForm']["ccexp"].value;
  var cvv =document.forms['myForm']["cvv"].value;
  var plan =document.forms['myForm']["plan"].value;
  
  // alert(cntry);
  if (fname=="") {
    seterror("firstName","*Please enter first name!");
    returnval=false;
  }

  if (lname.length==0) {
    seterror("lastName","*Please enter last name!");
    returnval=false;
  }
  if (uname=="") {
    seterror("username","*Please enter user name!");
    returnval=false;
  }
  if (pass=="") {
    seterror("password","*Password is required!");
    returnval=false;
  }
  if (pass.length<8) {
    seterror("password","*Password should be atleast 8 characters long !");
    returnval=false;
  }
  if (cpass=="") {
    seterror("cpassword","*Confirm password is required!");
    returnval=false;
  }
  
  if (cpass!=pass) {
    seterror("cpassword","*Password and confirm password should match!");
    returnval=false;
  }
  if (mail=="") {
    seterror("email","*Please enter email!");
    returnval=false;
  }
  if (addr=="") {
    seterror("address","*Please enter address!");
    returnval=false;
  }
  if (zip=="") {
    seterror("zip","*Please enter zip code!");
    returnval=false;
  }
  if (ccnam=="") {
    seterror("cc-name","*Please enter card name!");
    returnval=false;
  }
  if (ccnum=="") {
    seterror("cc-number","*Please enter card number!");
    returnval=false;
  }
  if (ccexp=="") {
    seterror("cc-expiration","*Please enter card expiry!");
    returnval=false;
  }
  if (cvv=="") {
    seterror("cc-cvv","*Please enter card cvv!");
    returnval=false;
  }
  if (cntry=="") {
    seterror("country","*Confirm password is required!");
    returnval=false;
  }
  if (stat =="") {
    seterror("state","*Please select state!");
    returnval=false;
  }
  if (plan ==""){
    seterror("plan","*Please select plan!");
    returnval= false;
  }
  else if(returnval= true) {
    document.getElementById("form").submit();
  }
  return returnval
  
}

const email =document.getElementById('nn');
email.addEventListener('blur', ()=>{
  let regx=/^([\-\_\.0-9a-zA-Z]+)@([\-\_\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str= email.value;
  if(regx.test(str)){
    email.classList.remove('is-invalid');
  }
  else{
    email.classList.add('is-invalid');
  }
})
var loadFile = function(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('output');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};