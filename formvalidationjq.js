function clearErrors(){

    errors = $('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
  }
  function seterror(id, error) {
    // element=document.getElementById(id);
    // element.getElementsByClassName('formerror')[0].innerHTML = error;
    var errorId = $('#'+id);
    $(errorId).find('.formerror').html(error);
    // $('.formerror').html(error);
  }
  
  function validateForm() {
    var returnval=false;
    clearErrors();
    var fname = $("input[name=fname]").val();
    var lname = $("input[name=lname]").val();
    var uname = $("input[name=uname]").val(); 
    var pass = $("input[name=pass").val(); 
    var cpass = $("input[name=cpass]").val(); 
    var mail = $("input[name=mail]").val(); 
    var addr = $("input[name=addr]").val();
    var cntry = $("select[name=cntry]").val(); 
    var stat = $("select[name=states]").val(); 
    var zip = $("input[name=zip]").val();  
    var ccnam = $("input[name=ccnam]").val();
    var ccnum = $("input[name=ccnum]").val(); 
    var ccexp = $("input[name=ccexp]").val();
    var cvv = $("input[name=cvv]").val();
    var plan = $("select[name=plan]").val();
  
    if (fname=="") {
      seterror("firstName","*Please enter first name!");
      returnval=true;
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
    if (stat =="") {
      seterror("state","*Please select state!");
      returnval=false;
    }
    if (plan ==""){
      seterror("plan","*Please select plan!");
      returnval= false;
    }  
    if (cntry =="") {
      seterror("country","*Country is required!");
      returnval=false;
    }
    
    return returnval;
  
  }