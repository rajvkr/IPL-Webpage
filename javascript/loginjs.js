function validateTextbox()
{

var box = document.getElementById("lmail");
var box2= document.getElementById("lpass");


var mailformat = /^\w+@\w+(\.\w{2,3})+$/;
if(!(box.value.match(mailformat)))
{
  alert("Invalid e-mail");
  box.focus();
  box.style.border ="solid 2px red";
  return false;
}

if(box2.value.length < 6 )
{
alert("Invalid Password");
box2.focus();
box2.style.border = "solid 2px red";
return false;
}

}







