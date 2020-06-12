function colorChange() {
    var element = document.body;
    
        element.classList.toggle("color-change");
    
   
    
    
    
}
  function focusF() {
      document.myFormAlert.fname.focus();
      return true;
  }  
function myAlert(fname){
    var firtsname = document.myFormAlert.fname;
    var words = /^[A-Za-z]+$/;
 if(firstname.value.match(words)){
  
  document.myFormAlert.firstname.focus();
  return true;
    }
   else{
     alert("Please fill in your details!");
     firstname.focus();
     return false;
   }
  }

function lastNameVal(lstname) {
    var lstname = document.myFormAlert.lname;
    var letter = /^[A-Za-z]+$/;
    if(lstname.value.match(letter)) {
        alert("Correct");
        document.myFormAlert.lstname.focus();
        return true;
    } else {
        alert("Enter details");
        return false;
    }
}

  function emailVal(email) {
    var email = document.myFormAlert.email;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat)) {
alert("Email is correct")
document.myFormAlert.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
function textAreaVAl(textArea) {
    var textArea = document.myFormAlert.textA;
    if(textArea) {
        alert("Thank you" + fname + lname);
        document.myFormAlert.textArea.focus();
        return true;
    } else {
        alert("Did not fill in full details");
     
        return false;
    }
}
